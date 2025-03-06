import React from "react";
import { TouchableOpacity,View,Text } from "react-native";

import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../styles/styles";
type ItemProps = {
    titulo: string,
    onPress: () => void,
    status: string,
    motivo: string
}

const Item = ({titulo,onPress,status,motivo}:ItemProps) => (
    <TouchableOpacity onPress={onPress} style={styles.SolicitacaoItem}>
        <Text>
            {titulo}
        </Text>
        <View style={styles.ContainerStatus}>
            <Icon
            name="clock-outline"
            size={25}
            />
            <Text>
                {status}
            </Text>
        </View>
        <Text>
            {motivo}
        </Text>
        <Text>
            18 de Dezembro de 2024
        </Text>
    </TouchableOpacity>
)

export default Item;
