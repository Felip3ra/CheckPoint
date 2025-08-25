import { View, Text, SafeAreaView, Modal, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Mapa from "@/components/maps";
import LottieView from "lottie-react-native";
import { styles } from "@/styles/styles";
import { useAddressContext } from "@/hooks/AddressContext";
import axios from "axios";
import { router } from "expo-router";
import { useAuth } from "@/hooks/AuthContext";

// Define o enum para os tipos de ponto
enum Pontos {
    Entrada = "Entrada",
    Almoco = "Almoço",
    VoltaDoAlmoco = "Volta do Almoço",
    Saida = "Saída",
    Default = "Selecione o tipo de ponto",
}

export default function Point(): React.JSX.Element {
    const { user } = useAuth();
    const { address } = useAddressContext();

    const [tipoPonto, setTipoPonto] = useState<Pontos>(Pontos.Default);
    const [dataHoje, setDataHoje] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);

    const endereco = `${address?.street}, ${address?.streetNumber} - ${address?.postalCode} - ${address?.region} - ${address?.country}`;

    useEffect(() => {
        let intervalo: NodeJS.Timeout;

        const atualizarData = () => {
            const novaData = new Date().toLocaleDateString("pt-BR", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour12: false,
                timeZone: "America/Sao_Paulo",
            });
            setDataHoje(novaData);
        };

        intervalo = setInterval(atualizarData, 1000);
        atualizarData();

        return () => clearInterval(intervalo);
    }, []);

    const handleAddPoint = async (): Promise<void> => {
        try {
            const API_URL = "http://192.168.15.116:3000/api/Point";
            console.log(user?.id);

            await axios.post(API_URL, {
                CodigoFuncionario: user!.id,
                tipoPonto,
                endereco,
            });

            ShowModal();
        } catch (error) {
            console.error("Erro ao criar Ponto:", error);
            Alert.alert("Erro", "Ocorreu um erro ao criar o Ponto.");
        }
    };

    const ShowModal = (): void => {
        setModal(true);
    };

    const CloseModal = (): void => {
        setModal(false);
        router.replace("/(tabs)");
    };

    return (
        <SafeAreaView className="flex bg-[#FBF7F4]">
            <Modal animationType="slide" visible={modal}>
                <View className="mx-9">
                    <Text className="text-center mt-7 font-montserratBold text-2xl">
                        Comprovante de Ponto
                    </Text>
                    <View className="items-center my-4">
                        <LottieView
                            source={require("../../assets/checked-animation.json")}
                            autoPlay={true}
                            loop={false}
                            style={{ width: 150, height: 150 }}
                        />
                    </View>
                    <Text className="text-center mb-5 font-montserratBold text-2xl">
                        Ponto de Entrada
                    </Text>
                    <Text className="mt-5 font-montserratMedium text-sm">
                        Registrado em: {dataHoje}
                    </Text>
                    <Text className="text-center mt-5 font-montserratBold text-xl">
                        Identificação do empregado
                    </Text>
                    <View className="gap-5 mt-5">
                        <Text className="font-montserratMedium text-sm">
                            <Text className="font-montserratBold text-sm">Nome:</Text> {user!.nome}
                        </Text>
                        <Text className="font-montserratMedium text-sm">
                            <Text className="font-montserratBold text-sm">Matrícula:</Text> 000.000.000-00
                        </Text>
                        <Text className="font-montserratMedium text-sm">
                            <Text className="font-montserratBold text-sm">Jornada:</Text> 09:00 às 16:00
                        </Text>
                        <Text className="font-montserratMedium text-sm">
                            <Text className="font-montserratBold text-sm">Local:</Text> {endereco}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.BtnAcessar} onPress={ShowModal}>
                        <Text className="font-montserratBold text-xl color-white">Baixar Comprovante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BtnAcessar} onPress={CloseModal}>
                        <Text className="font-montserratBold text-xl color-white">Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View className="mx-7">
                <Text className="font-montserratRegular text-xl mt-9">Horário do ponto</Text>
                <Text className="font-montserratMedium text-xl mt-8">{dataHoje}</Text>
                <Text className="font-montserratRegular text-xl mt-4 mb-1.5">Tipo de ponto</Text>
                <View className="rounded-lg bg-[#EDEDED]">
                    <Picker
                        selectedValue={tipoPonto}
                        onValueChange={(itemValue) => setTipoPonto(itemValue as Pontos)}
                        style={{ fontFamily: "font-montserratRegular" }}
                    >
                        {Object.values(Pontos)
                            .filter((value) => typeof value === "string")
                            .map((ponto, index) => (
                                <Picker.Item key={index} label={ponto} value={ponto} />
                            ))}
                    </Picker>
                </View>
                <Text className="font-montserratRegular text-xl mb-1.5 mt-5">Localização</Text>
                <View className="flex-row items-center gap-20 py-5 pl-5 border-[#D6D6D6] border rounded-lg">
                    <Text className="font-montserratRegular text-xl">
                        {address?.street}, {address?.streetNumber} - {address?.postalCode}
                    </Text>
                    <MaterialCommunityIcons name="reload" size={24} />
                </View>
                <View className="h-72 flex-row mt-4">
                    <Mapa />
                </View>
                <TouchableOpacity style={styles.BtnAcessar} onPress={handleAddPoint}>
                    <Text className="font-montserratBold text-xl color-white text-center">Bater ponto</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}