import { Picker } from "@react-native-picker/picker";
import { View,Text, TextInput } from "react-native";


function NewRequest() {
    return(

        <View>
            <Text className="font-montserratRegular text-base mt-3">
                Tipo de Solicitacao
            </Text>
            <Picker className="mt-1.5">
            
            </Picker>
            <View className="flex-row">
                <View>
                    <Text className="font-montserratRegular text-base">
                        Data Inicial
                    </Text>
                    <Text className="font-montserratRegular text-base">
                        Data Inicial
                    </Text>
                </View>
                <View>
                    <Text className="font-montserratRegular text-base">
                        Data Final
                    </Text>
                    <Text className="font-montserratRegular text-base">
                        Data Final
                    </Text>
                </View>
            </View>
            <Text className="font-montserratRegular text-base">
                Motivo
            </Text>
            <Picker>
            
            </Picker>
            <Text className="font-montserratRegular text-base">
                Total
            </Text>
            <TextInput/>
            <Text className="font-montserratRegular text-base">
                Descreva o ocorrido
            </Text>
            <TextInput/>
            <Text className="font-montserratRegular text-base">
                Envie o arquivo(Opcional)
            </Text>
        </View>
        
    );
}

export default NewRequest;