import { View,Text } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
const RegistroPonto = () =>{
    return(
        <View className="flex-row justify-around border border-[#D6D6D6] py-2 mt-3 items-center gap-20 rounded-lg">  
        <MaterialCommunityIcons
        name="home"
        size={25}
        />
        <View className="gap-1.5 items-center">
            <Text className="font-montserratSemiBold text-base">Entrada</Text>
            <Text className="font-montserratRegular text-base">09:00</Text>
        </View>
        <MaterialCommunityIcons
        name="file"
        size={25}
        />
    </View>
    )
    
}
export default RegistroPonto