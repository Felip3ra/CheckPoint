import { Picker } from "@react-native-picker/picker";
import { View,Text, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function NewRequest() {
    const [date,setDate] = useState<Date | null>(new Date)
    const [mode,setMode] = useState<string | null>('date')
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const ExibeDataPicker = () => {
        setShowDatePicker(!showDatePicker)
    }
    const handleDateChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setDate(currentDate); // Atualiza a data selecionada
        setShowDatePicker(false); // Oculta o DateTimePicker após a seleção
    };
    return(

        <View className="mx-11">
            <Text className="font-montserratRegular text-base mt-3">
                Tipo de Solicitacao
            </Text>
            <View className="mt-1.5 bg-[#EDEDED] rounded-lg">
            <Picker >
            <Picker.Item label="Ajuste de Ponto" value="ajuste-ponto" />
                    <Picker.Item label="Férias" value="ferias" />
                    <Picker.Item label="Licença Médica" value="licenca-medica" />
            </Picker>
            </View>
            
            <View className="flex-row justify-between mt-1.5">
                <View>
                    <Text className="font-montserratRegular text-base">
                        Data Inicial
                    </Text>
                    <View className="flex-row items-center bg-[#EDEDED] rounded-lg gap-3 px-3 py-1">
                        <TextInput
                        placeholder="DD/MM/AAAA"
                        value={date?.toLocaleDateString()}
                        editable={false}
                        />
                            
                        
                        <MaterialCommunityIcons name="calendar" size={24} onPress={ExibeDataPicker}/>
                    </View>
                    {
                        showDatePicker && (<DateTimePicker
                            testID="dateTimePicker"
                            value={date || new Date()}
                            mode={mode}
                            display="default"
                            onChange={handleDateChange}
                            />)
                    }
                    
                </View>
                <View>
                    <Text className="font-montserratRegular text-base">
                        Data Final
                    </Text>
                    <View className="flex-row items-center bg-[#EDEDED] rounded-lg gap-3 px-3 py-1">
                        <TextInput
                        placeholder="DD/MM/AAAA"
                        value={date?.toLocaleDateString()}
                        editable={false}
                        />
                            
                        
                        <MaterialCommunityIcons name="calendar" size={24} onPress={ExibeDataPicker}/>
                    </View>
                    {
                        showDatePicker && (<DateTimePicker
                            testID="dateTimePicker"
                            value={date || new Date()}
                            mode={mode}
                            display="default"
                            onChange={handleDateChange}
                            />)
                    }
                </View>
            </View>
            <Text className="font-montserratRegular text-base mt-2">
                Motivo
            </Text>
            <View className="mt-1.5 bg-[#EDEDED] rounded-lg">
            <Picker >
            <Picker.Item label="Ajuste de Ponto" value="ajuste-ponto" />
                    <Picker.Item label="Férias" value="ferias" />
                    <Picker.Item label="Licença Médica" value="licenca-medica" />
            </Picker>
            </View>
            <Text className="font-montserratRegular text-base mt-2">
                Total
            </Text>
            <View className="bg-[#EDEDED] py-1 rounded-lg">
                <TextInput
                className="font-montserratRegular ml-2"
                placeholder="Total de Horas"
                />
            </View>
            <Text className="font-montserratRegular text-base mt-2">
                Descreva o ocorrido
            </Text>
            
            <View className="bg-[#EDEDED] rounded-lg">
                <TextInput
                className="font-montserratRegular ml-2 h-32"
                placeholder="Descricao do occorrido"
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                />
            </View>
            <Text className="font-montserratRegular text-base mt-2">
                Envie o arquivo(Opcional)
            </Text>
            <TouchableOpacity
            className="p-5 bg-[#0097E2] opacity-30 rounded-lg"
            >
                <Text className="font-montserratRegular text-base text-center">Selecione o arquivo</Text>
            </TouchableOpacity>
            <TouchableOpacity
            className="p-5 bg-[#0097E2] rounded-lg mt-10"
            >
                <Text className="font-montserratBold text-xl text-center color-white">Selecione o arquivo</Text>
            </TouchableOpacity>
        </View>
        
    );
}

export default NewRequest;