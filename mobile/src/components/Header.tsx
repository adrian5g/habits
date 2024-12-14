import { TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../assets/logo.svg';
import colors from 'tailwindcss/colors';

export function Header() {
  return (
    <View className='flex-row items-center justify-between w-full'>
      <Logo />

      <TouchableOpacity
        className='flex-row items-center justify-center px-4 border rounded-lg border-violet-500 h-11'
        activeOpacity={0.7}
      >
        <Feather name='plus' color={colors.violet[500]} size={20} />
        <Text className='ml-3 text-white'>Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
