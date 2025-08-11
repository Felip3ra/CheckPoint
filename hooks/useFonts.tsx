import { useFonts } from 'expo-font';

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  return fontsLoaded;
};
