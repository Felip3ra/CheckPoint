import React,{JSX} from "react";
import { TouchableOpacity,View,Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import { useFonts } from 'expo-font';

type ItemProps = {
    titulo: string,
    onPress: () => void,
    status: string,
    motivo: string
}

const Item = ({titulo,onPress,status,motivo}:ItemProps) => {
    
    
    return(
    <TouchableOpacity onPress={onPress} style={[styles.SolicitacaoItem,{overflow: 'visible'}]}>
        <Text className="text-xl font-montserratSemiBold px-5">
            {titulo}
        </Text>
        <View style={[
            styles.ContainerStatus,
            status == "Aprovado" ? {backgroundColor: '#ACFFD6'} :
            status == "Pendente" ? {backgroundColor: '#FBFBA6'} :
            {backgroundColor: '#FBA6A8'}
            ]}>
            <MaterialCommunityIcons
            name={

                status == "Pendente" ? "clock-outline" :
                status == "Aprovado" ? "thumb-up-outline":
                "thumb-down-outline"
            }
            size={25}
            color={
                status == "Pendente" ? "#4A4A0F" :
                status == "Aprovado" ? "#0C4E2D":
                "#591B1C"
            }
            />
            <Text className="text-base font-montserratMedium px-1">
                {status}
            </Text>
        </View>
        <Text className="font-montserratMedium text-base px-4">
            Motivo: {motivo}
        </Text>
        <Text className="text-base font-montserratRegular px-4">
            18 de Dezembro de 2024
        </Text>
    </TouchableOpacity>
    )
}

export default Item;
