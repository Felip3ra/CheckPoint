import { Stack } from 'expo-router/stack';
import '../global.css'; // Importação do global.css para carregar os estilos do Tailwind

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Oculta o header para as telas dentro de "(tabs)"
        }}
      />
      {/* Adicione outras telas ou grupos de telas aqui, se necessário */}
    </Stack>
  );
}