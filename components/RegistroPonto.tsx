import { View,Text } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";

type RegistroPontoProps = {
    ponto: string;
    horario: string;
}

const RegistroPonto = ({ponto,horario}: RegistroPontoProps) =>{
    return(
        <View className="flex-row justify-around border border-[#D6D6D6] py-2 mt-3 items-center gap-20 rounded-lg">  
        <MaterialCommunityIcons
        name={
            ponto == "Entrada" ? "login" :
            ponto == "Almoço" ? "food" :
            ponto == "Volta" ? "desk" :
            ponto == "Saída" ? "logout" : "cross"
        }
        size={25}
        color={
            ponto == "Entrada" ? "#00DF72" :
            ponto == "Almoço" ? "#FF9603" :
            ponto == "Volta" ? "#00DF72" :
            ponto == "Saída" ? "#FBA6A8" : "#FBA6A8"
        }
        />
        <View className="gap-1.5 items-center">
            <Text className="font-montserratSemiBold text-base">{ponto}</Text>
            <Text className="font-montserratRegular text-base">{horario}</Text>
        </View>
        <MaterialCommunityIcons
        name="file-document-outline"
        size={25}
        />
    </View>
    )
    
}
export default RegistroPonto