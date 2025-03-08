import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

type BtnAcessar = {
    tipo: string,
}
const Acessar: React.FC<BtnAcessar> = ({tipo}) => {
    return (
        <TouchableOpacity style={styles.BtnAcessar}>
            <Text className="font-montserratBold text-xl color-white">
                {tipo}
            </Text>
        </TouchableOpacity>
    );
}

export default Acessar