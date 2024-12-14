import { StatusBar, View } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  // se as fonts não estiverem carregadas o app não inicia
  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <View className='bg-black flex-1 items-center justify-center'>
      <Home />
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
    </View>
  );
}