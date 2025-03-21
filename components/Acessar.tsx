import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

type BtnAcessar = {
    tipo: string,
    onPress: () => void
}
const Acessar: React.FC<BtnAcessar> = ({tipo,onPress}) => {
    return (
        <TouchableOpacity style={styles.BtnAcessar} onPress={onPress}>
            <Text className="font-montserratBold text-xl color-white">
                {tipo}
            </Text>
        </TouchableOpacity>
    );
}

export default Acessar