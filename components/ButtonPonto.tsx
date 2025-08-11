import React from "react";
import {View} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import "../global.css";
import { useCustomFonts } from "@/hooks/useFonts";
type ButtonPontoProps = {
    size: number,
    focused: boolean
}
const ButtonPonto: React.FC<ButtonPontoProps> = ({focused,size}) => {
    const fontsLoaded = useCustomFonts();
    return(
        <View style={[styles.BtnPonto,{backgroundColor: focused ? '#0097E2': '#6fdfff',borderRadius: 8,}]}>
            <MaterialCommunityIcons name="alarm" size={size} color={focused ? '#fff':'#F8F8F8'}/>
        </View>
    );
}

export default ButtonPonto
