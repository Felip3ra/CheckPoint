import React, { useEffect, useMemo, useState } from "react";
import { View, Text, SafeAreaView, Modal, TouchableOpacity, Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import Mapa from "@/components/maps";
import { useAddressContext } from "@/hooks/AddressContext";
import { useAuth } from "@/hooks/AuthContext";
import { pointStyles } from "@/styles/pointStyles";
import { theme } from "@/styles/theme";
import { criarPonto } from "@/services/pontoService";
import Acessar from "@/components/Acessar";

enum Pontos {
    Entrada = "Entrada",
    Almoco = "Almoço",
    VoltaDoAlmoco = "Volta",
    Saida = "Saída",
    Default = "Selecione o tipo de ponto",
}

export default function Point(): React.JSX.Element {
    const { user } = useAuth();
    const { address } = useAddressContext();

    const [tipoPonto, setTipoPonto] = useState<Pontos>(Pontos.Default);
    const [dataHoje, setDataHoje] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);
    const [saving, setSaving] = useState<boolean>(false);

    const endereco = useMemo(() => {
        if (!address) return "";
        return `${address.street || ""}, ${address.streetNumber || ""} - ${address.postalCode || ""} - ${
            address.region || ""
        } - ${address.country || ""}`;
    }, [address]);

    useEffect(() => {
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

        const intervalo = setInterval(atualizarData, 1000);
        atualizarData();
        return () => clearInterval(intervalo);
    }, []);

    const handleAddPoint = async (): Promise<void> => {
        if (!user?.id) {
            Alert.alert("Atenção", "Usuário não identificado.");
            return;
        }
        if (tipoPonto === Pontos.Default) {
            Alert.alert("Atenção", "Selecione o tipo de ponto.");
            return;
        }
        try {
            setSaving(true);
            await criarPonto({
                userId: user.id,
                tipoPonto,
                endereco,
                token: user.token,
            });
            setModal(true);
        } catch (error: any) {
            console.error("Erro ao criar Ponto:", error.message);
            Alert.alert("Erro", error.message || "Ocorreu um erro ao criar o Ponto.");
        } finally {
            setSaving(false);
        }
    };

    const closeModal = (): void => {
        setModal(false);
        router.replace("/(tabs)");
    };

    return (
        <SafeAreaView style={pointStyles.screen}>
            <Modal animationType="slide" visible={modal}>
                <View style={pointStyles.modalBox}>
                    <Text style={pointStyles.modalTitle}>Comprovante de Ponto</Text>
                    <View style={{ alignItems: "center", marginVertical: theme.spacing.lg }}>
                        <LottieView
                            source={require("../../assets/checked-animation.json")}
                            autoPlay
                            loop={false}
                            style={{ width: 150, height: 150 }}
                        />
                    </View>
                    <Text style={pointStyles.modalTitle}>{tipoPonto}</Text>
                    <Text style={pointStyles.modalDate}>Registrado em: {dataHoje}</Text>
                    <Text style={pointStyles.modalSectionTitle}>Identificação do empregado</Text>
                    <View style={pointStyles.modalRow}>
                        <Text style={pointStyles.modalText}>
                            <Text style={{ fontFamily: theme.fontFamily.bold }}>Nome:</Text> {user?.nome}
                        </Text>
                        <Text style={pointStyles.modalText}>
                            <Text style={{ fontFamily: theme.fontFamily.bold }}>Matrícula:</Text> {user?.id}
                        </Text>
                        <Text style={pointStyles.modalText}>
                            <Text style={{ fontFamily: theme.fontFamily.bold }}>Jornada:</Text> 09:00 às 16:00
                        </Text>
                        <Text style={pointStyles.modalText}>
                            <Text style={{ fontFamily: theme.fontFamily.bold }}>Local:</Text> {endereco || "Não informado"}
                        </Text>
                    </View>
                    <View style={{ gap: theme.spacing.md, marginTop: theme.spacing.xl }}>
                        <Acessar tipo="Baixar Comprovante" disabled />
                        <Acessar tipo="Finalizar" onPress={closeModal} />
                    </View>
                </View>
            </Modal>

            <ScrollView contentContainerStyle={pointStyles.wrapper} showsVerticalScrollIndicator={false}>
                <Text style={pointStyles.title}>Horário do ponto</Text>
                <Text style={pointStyles.subtitle}>{dataHoje}</Text>

                <Text style={pointStyles.subtitle}>Tipo de ponto</Text>
                <View style={pointStyles.pickerWrapper}>
                    <Picker
                        selectedValue={tipoPonto}
                        onValueChange={(itemValue) => setTipoPonto(itemValue as Pontos)}
                        style={{ fontFamily: theme.fontFamily.regular }}
                    >
                        {Object.values(Pontos)
                            .filter((value) => typeof value === "string")
                            .map((ponto, index) => (
                                <Picker.Item key={index} label={ponto} value={ponto} />
                            ))}
                    </Picker>
                </View>

                <Text style={pointStyles.subtitle}>Localização</Text>
                <View style={pointStyles.addressBox}>
                    <Text className="font-montserratRegular text-lg" style={{ flex: 1 }}>
                        {endereco || "Coletando localização..."}
                    </Text>
                    <MaterialCommunityIcons name="reload" size={24} />
                </View>

                <View style={pointStyles.mapArea}>
                    <Mapa />
                </View>

                <View style={{ marginTop: theme.spacing.lg, marginBottom: theme.spacing.xl }}>
                    <Acessar tipo="Bater ponto" onPress={handleAddPoint} loading={saving} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
