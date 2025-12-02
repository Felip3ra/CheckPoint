import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import "../global.css";
import { useAuth } from "@/hooks/AuthContext";
import { theme } from "@/styles/theme";

type PickerType = "inicio" | "fim";

export default function DataPickerSelect(): React.JSX.Element {
    const { user } = useAuth();
    const [inicio, setInicio] = useState<Date>(new Date());
    const [fim, setFim] = useState<Date>(new Date());
    const [pickerVisible, setPickerVisible] = useState<boolean>(false);
    const [pickerType, setPickerType] = useState<PickerType>("inicio");

    const formatarData = (data: Date): string => {
        const d = new Date(data);
        return d.toLocaleDateString("pt-BR");
    };

    useEffect(() => {
        // Aqui podemos disparar requests de estatística quando datas mudarem
    }, [inicio, fim, user?.id]);

    const abrirPicker = (tipo: PickerType): void => {
        setPickerType(tipo);
        setPickerVisible(true);
    };

    return (
        <SafeAreaView>
            <View
                className="p-5 rounded-xl bg-white flex-row items-center justify-between"
                style={{ shadowOpacity: 0.1, elevation: 2 }}
            >
                <View>
                    <Text className="font-montserratMedium text-base" style={{ color: theme.colors.text }}>
                        Período Escolhido
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity onPress={() => abrirPicker("inicio")}>
                            <Text className="mb-1.5 font-montserratMedium">{formatarData(inicio)}</Text>
                        </TouchableOpacity>
                        <Text className="mb-1.5 font-montserratMedium mx-1"> - </Text>
                        <TouchableOpacity onPress={() => abrirPicker("fim")}>
                            <Text className="mb-1.5 font-montserratMedium">{formatarData(fim)}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Ionicons name="calendar-outline" size={22} color="#333" />
            </View>
        </SafeAreaView>
    );
}
