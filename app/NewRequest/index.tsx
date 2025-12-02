import { Picker } from "@react-native-picker/picker";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { criarSolicitacaoAjuste } from "@/services/requestService";

interface RequestData {
    cdPonto: string;
    solicitacao: string;
    status: string;
    motivo: string;
    descricao: string;
    dataInicio: string;
    dataFinal: string;
    totalHoras: string;
    arquivo?: string;
}

function NewRequest(): React.JSX.Element {
    const [date, setDate] = useState<Date | null>(new Date());
    const [mode] = useState<"date" | "time">("date");
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const toggleDatePicker = (): void => {
        setShowDatePicker((prev) => !prev);
    };

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date): void => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShowDatePicker(false);
    };

    const handleCreateFixPointRequest = async (): Promise<void> => {
        try {
            setLoading(true);
            const requestData: RequestData = {
                cdPonto: "123",
                solicitacao: "Ajuste de Ponto",
                status: "Pendente",
                motivo: "Consulta médica",
                descricao: "Descrição do ocorrido",
                dataInicio: date?.toLocaleDateString() || "",
                dataFinal: date?.toLocaleDateString() || "",
                totalHoras: "8",
                arquivo: undefined,
            };

            await criarSolicitacaoAjuste(requestData);
            Alert.alert("Sucesso", "Solicitação criada com sucesso!");
        } catch (error: any) {
            console.error("Erro ao criar solicitação:", error.message);
            Alert.alert("Erro", error.message || "Ocorreu um erro ao criar a solicitação.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="mx-11">
            <Text className="font-montserratRegular text-base mt-3">Tipo de Solicitação</Text>
            <View className="mt-1.5 bg-[#EDEDED] rounded-lg">
                <Picker>
                    <Picker.Item label="Ajuste de Ponto" value="ajuste-ponto" />
                    <Picker.Item label="Férias" value="ferias" />
                    <Picker.Item label="Licença Médica" value="licenca-medica" />
                </Picker>
            </View>

            <View className="flex-row justify-between mt-1.5">
                <View>
                    <Text className="font-montserratRegular text-base">Data Inicial</Text>
                    <View className="flex-row items-center bg-[#EDEDED] rounded-lg gap-3 px-3 py-1">
                        <TextInput placeholder="DD/MM/AAAA" value={date?.toLocaleDateString()} editable={false} />
                        <MaterialCommunityIcons name="calendar" size={24} onPress={toggleDatePicker} />
                    </View>
                    {showDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date || new Date()}
                            mode={mode}
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </View>
                <View>
                    <Text className="font-montserratRegular text-base">Data Final</Text>
                    <View className="flex-row items-center bg-[#EDEDED] rounded-lg gap-3 px-3 py-1">
                        <TextInput placeholder="DD/MM/AAAA" value={date?.toLocaleDateString()} editable={false} />
                        <MaterialCommunityIcons name="calendar" size={24} onPress={toggleDatePicker} />
                    </View>
                </View>
            </View>

            <Text className="font-montserratRegular text-base mt-2">Motivo</Text>
            <View className="mt-1.5 bg-[#EDEDED] rounded-lg">
                <Picker>
                    <Picker.Item label="Ajuste de Ponto" value="ajuste-ponto" />
                    <Picker.Item label="Férias" value="ferias" />
                    <Picker.Item label="Licença Médica" value="licenca-medica" />
                </Picker>
            </View>

            <Text className="font-montserratRegular text-base mt-2">Total</Text>
            <View className="bg-[#EDEDED] py-1 rounded-lg">
                <TextInput className="font-montserratRegular ml-2" placeholder="Total de Horas" />
            </View>

            <Text className="font-montserratRegular text-base mt-2">Descreva o ocorrido</Text>
            <View className="bg-[#EDEDED] rounded-lg">
                <TextInput
                    className="font-montserratRegular ml-2 h-32"
                    placeholder="Descrição do ocorrido"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                />
            </View>

            <Text className="font-montserratRegular text-base mt-2">Envie o arquivo (Opcional)</Text>
            <TouchableOpacity className="p-5 bg-[#0097E2] opacity-30 rounded-lg">
                <Text className="font-montserratRegular text-base text-center">Selecione o arquivo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="p-5 bg-[#0097E2] rounded-lg mt-10"
                onPress={handleCreateFixPointRequest}
                disabled={loading}
                style={loading ? { opacity: 0.7 } : undefined}
            >
                <Text className="font-montserratBold text-xl text-center color-white">
                    {loading ? "Enviando..." : "Enviar Solicitação"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default NewRequest;
