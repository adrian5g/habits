import { FastifyInstance } from 'fastify';
import { prisma } from './lib/prisma';
import { z } from 'zod';
import dayjs from 'dayjs';

export async function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6)),
    });

    const { title, weekDays } = createHabitBody.parse(request.body);

    const today = dayjs().startOf('day').toDate();

    prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              week_day: weekDay,
            };
          }),
        },
      },
    });
  });

  app.get('/day', async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date(),
    });

    const { date } = getDayParams.parse(request.query);

    const parsedDate = dayjs(date).startOf('day');
    const weekday = parsedDate.get('day');

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date, // se a data de criação do habito é menor ou igual a data do dia
        },
        weekDays: {
          some: {
            week_day: weekday, // se o dia da semana do habito é igual ao dia do dia da semana do parâmetro
          },
        },
      },
    });

    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate(), // se a data do dia é igual a data do dia do parâmetro
      },
      include: {
        dayHabits: true,
      },
    });

    const completedHabits = day?.dayHabits.map(
      (dayHabit) => dayHabit.habit_id
    );

    return { possibleHabits, completedHabits };
  });

  app.get('/', async () => {
    return await prisma.habit.findMany();
  });
}
