import { Stack } from 'expo-router/stack';
import '../global.css'; // Importação do global.css para carregar os estilos do Tailwind
import { AddressProvider } from '@/hooks/AddressContext';
import { AuthProvider } from '@/hooks/AuthContext';


export default function Layout() {
  return (
    <AuthProvider>
      <AddressProvider>
    <Stack>
      <Stack.Screen name='Login/index'/>
      <Stack.Screen name='Register/index'
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen
      name='NewRequest/index'
      options={{
        title:'Nova Solicitacao',
        headerStyle: {backgroundColor: '#0097E2',},
        headerTintColor: '#FBF7F4',
      }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Oculta o header para as telas dentro de "(tabs)"
        }}
      />
      
    </Stack>
    </AddressProvider>
    </AuthProvider>
    
  );
}