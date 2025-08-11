import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";
import "../global.css";
import * as Font from 'expo-font'
import { useCustomFonts } from "@/hooks/useFonts";
type BtnAcessar = {
    tipo: string,
    onPress: () => void
}
const Acessar: React.FC<BtnAcessar> = ({tipo,onPress}) => {
    const fontsLoaded = useCustomFonts();
    return (
        <TouchableOpacity style={styles.BtnAcessar} onPress={onPress} >
            <Text className="font-montserratBold text-xl color-white text-center">
                {tipo}
            </Text>
        </TouchableOpacity>
    );
}

export default Acessar