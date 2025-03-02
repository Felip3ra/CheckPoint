import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";


export default function Acessar(): React.JSX.Element {
    return (
        <TouchableOpacity style={styles.BtnAcessar}>
            <Text style={styles.BtnTextAcessar}>
                Acessar
            </Text>
        </TouchableOpacity>
    );
}