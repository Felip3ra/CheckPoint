import React from "react";
import { TouchableOpacity,View,Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";
type ItemProps = {
    titulo: string,
    onPress: () => void,
    status: string,
    motivo: string
}

const Item = ({titulo,onPress,status,motivo}:ItemProps) => (
    <TouchableOpacity onPress={onPress} style={styles.SolicitacaoItem}>
        <Text className="text-xl font-semibold">
            {titulo}
        </Text>
        <View style={styles.ContainerStatus}>
            <MaterialCommunityIcons
            name="clock-outline"
            size={25}
            />
            <Text>
                {status}
            </Text>
        </View>
        <Text className="">
            {motivo}
        </Text>
        <Text>
            18 de Dezembro de 2024
        </Text>
    </TouchableOpacity>
)

export default Item;
