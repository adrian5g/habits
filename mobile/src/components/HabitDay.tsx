import { View, Text, TouchableOpacity } from 'react-native';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 8;

export function HabitDay() {
  return <TouchableOpacity className='w-10 h-10 m-1 border-2 rounded-lg bg-zinc-800 border-zinc-900' />;
}
