import { Link, Redirect, Stack } from 'expo-router';
import { View,Text } from 'react-native';
import { useCustomFonts } from '../hooks/useFonts';
export default function RootLayout() {
  const fontsLoaded = useCustomFonts();
  return (
    <Redirect href="(tabs)"/>
  );
}

/**
 * 
 * <View>
        <Text>
            sim
            <Link href={"(tabs)"}>Ir</Link>
        </Text>
    </View>
 */
