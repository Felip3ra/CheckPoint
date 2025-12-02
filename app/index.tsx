import { Redirect } from "expo-router";
import { useCustomFonts } from "../hooks/useFonts";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function RootLayout(): React.JSX.Element {
    const fontsLoaded = useCustomFonts();

    if (!fontsLoaded) {
        return <LoadingOverlay label="Carregando fontes..." />;
    }

    return <Redirect href="/Login" />;
}
