import { Link, Redirect, Stack } from 'expo-router';
import { View,Text } from 'react-native';
export default function RootLayout() {
  return (
    <Redirect href="Login"/>
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
