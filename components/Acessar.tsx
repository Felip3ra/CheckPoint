import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

type BtnAcessar = {
    tipo: String
}
const Acessar: React.FC<BtnAcessar> = ({tipo}) => {
    return (
        <TouchableOpacity style={styles.BtnAcessar}>
            <Text style={styles.BtnTextAcessar}>
                {tipo}
            </Text>
        </TouchableOpacity>
    );
}

export default Acessar