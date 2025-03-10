import { Stack } from 'expo-router/stack';
import "../global.css";

export default function Layout() {
  return (
    <Stack>
      
      
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
    </Stack>
  );
}
