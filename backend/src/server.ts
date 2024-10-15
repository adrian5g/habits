import Fastify from 'fastify';
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client';

export const app = Fastify();
export const prisma = new PrismaClient()

app.register(cors)

app.get('/habits', async () => {
  const beber = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Beber'
      }
    }
  })
  
  
  return beber;
});

app.get('/', () => {
  return 'Hello world';
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333/');
  });
