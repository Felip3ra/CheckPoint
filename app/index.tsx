import { Redirect } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useCustomFonts } from "../hooks/useFonts";
import LottieView from "lottie-react-native";

export default function RootLayout(): React.JSX.Element {
    const fontsLoaded = useCustomFonts();

    if (!fontsLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <LottieView
                    source={require("../assets/loading-animation.json")} // Substitua pelo caminho correto
                    autoPlay
                    loop
                    style={styles.animation}
                />
            </View>
        );
    }

    return <Redirect href="/Login" />;
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF7F4", // Cor de fundo opcional
    },
    animation: {
        width: 150,
        height: 150,
    },
});
