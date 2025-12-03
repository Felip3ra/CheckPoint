import { Stack } from "expo-router/stack";
import "../global.css";
import { AddressProvider } from "@/hooks/AddressContext";
import { AuthProvider } from "@/hooks/AuthContext";
import { useCustomFonts } from "@/hooks/useFonts";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Layout(): React.JSX.Element {
    const fontsLoaded = useCustomFonts();

    if (!fontsLoaded) {
        return <LoadingOverlay label="Carregando fontes..." />;
    }

    return (
        <AuthProvider>
            <AddressProvider>
                <Stack>
                    <Stack.Screen name="Login/index" />
                    <Stack.Screen
                        name="Register/index"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="NewRequest/index"
                        options={{
                            title: "Nova Solicitação",
                            headerStyle: { backgroundColor: "#0097E2" },
                            headerTintColor: "#FBF7F4",
                        }}
                    />
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </AddressProvider>
        </AuthProvider>
    );
}
