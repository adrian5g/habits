import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';
import { NotReachedHabitDay, HabitDay } from './HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const summaryDates = generateDatesFromYearBeginning();
const minimumSummaryDaysSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDaysSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((weekDay, i) => {
          return (
            <div key={i} className='text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center'>
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        {summaryDates.map((day) => {
          return <HabitDay key={day.toString()} />;
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return <NotReachedHabitDay key={i} />;
          })}
      </div>
    </div>
  );
}
