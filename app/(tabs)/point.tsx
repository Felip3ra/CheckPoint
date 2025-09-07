import { View, Text, SafeAreaView, Modal, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Mapa from "@/components/maps";
import LottieView from "lottie-react-native";
import { styles } from "@/styles/styles";
import { useAddressContext } from "@/hooks/AddressContext";
import axios from "axios";
import { router } from "expo-router";
import { useAuth } from "@/hooks/AuthContext";

export default function Point(): React.JSX.Element {
  const { user } = useAuth(); // contém { id, nome, token, ... }
  let intervalo: any;

  enum Pontos {
    ponto1 = "Entrada",
    ponto2 = "Almoço",
    ponto3 = "Volta do Almoço",
    ponto4 = "Saída",
    default = "Selecione o tipo de ponto",
  }

  const [tipoPonto, setTipoPonto] = useState<string | null>(Pontos.default);
  const [Endereco, setEndereco] = useState<string | null>("");
  const [modal, setModal] = useState<boolean>(false);
  const [DataHoje, setDataHoje] = useState<string | null>("");

  const { address } = useAddressContext();
  let endereco = `${address?.street}, ${address?.streetNumber} - ${address?.postalCode} - ${address?.region} - ${address?.country}`;

  // Função para registrar ponto
  const handleAddPoint = async () => {
    try {
      const API_URL = "http://192.168.15.116:3000/pontos/criarPonto";
        console.log(user?.id);
      await axios.post(
        API_URL,
        {
          PON_CD_USUARIO: user?.id,
          PON_NM_PONTO: tipoPonto,
          PON_NM_ENDERECO: endereco,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`, // envia o JWT no header
          },
        }
      );

      ShowModal();
    } catch (error) {
      console.error("Erro ao criar Ponto:", error);
      Alert.alert("Erro", "Ocorreu um erro ao criar o Ponto.");
    }
  };

  // Atualização da data em tempo real
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

    intervalo = setInterval(atualizarData, 1000);
    atualizarData();

    return () => clearInterval(intervalo);
  }, []);

  function ShowModal() {
    clearInterval(intervalo);
    setModal(true);
  }

  function CloseModal() {
    setModal(false);
    router.replace("/(tabs)");
  }

  return (
    <SafeAreaView className="flex bg-[#FBF7F4]">
      {/* Modal de comprovante */}
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
            {tipoPonto}
          </Text>

          <Text className="mt-5 font-montserratMedium text-sm">
            Registrado em: {DataHoje}
          </Text>

          <Text className="text-center mt-5 font-montserratBold text-xl">
            Identificação do empregado
          </Text>

          <View className="gap-5 mt-5">
            <Text className="font-montserratMedium text-sm">
              <Text className="font-montserratBold text-sm">Nome:</Text>{" "}
              {user?.nome}
            </Text>
            <Text className="font-montserratMedium text-sm">
              <Text className="font-montserratBold text-sm">Matrícula:</Text>{" "}
              {user?.id}
            </Text>
            <Text className="font-montserratMedium text-sm">
              <Text className="font-montserratBold text-sm">Jornada:</Text> 09:00
              às 16:00
            </Text>
            <Text className="font-montserratMedium text-sm">
              <Text className="font-montserratBold text-sm">Local:</Text>{" "}
              {endereco}
            </Text>
          </View>

          <TouchableOpacity style={styles.BtnAcessar} onPress={ShowModal}>
            <Text className="font-montserratBold text-xl color-white">
              Baixar Comprovante
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.BtnAcessar} onPress={CloseModal}>
            <Text className="font-montserratBold text-xl color-white">
              Finalizar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Conteúdo principal */}
      <View className="mx-7">
        <Text className="font-montserratRegular text-xl mt-9">
          Horário do ponto
        </Text>
        <Text className="font-montserratMedium text-xl mt-8">{DataHoje}</Text>

        <Text className="font-montserratRegular text-xl mt-4 mb-1.5">
          Tipo de ponto
        </Text>
        <View className="rounded-lg bg-[#EDEDED]">
          <Picker
            selectedValue={tipoPonto}
            onValueChange={(itemValue) => setTipoPonto(itemValue)}
            style={{ fontFamily: "font-montserratRegular" }}
          >
            {Object.values(Pontos)
              .filter((value) => typeof value === "string")
              .map((ponto, index) => (
                <Picker.Item key={index} label={ponto} value={ponto} />
              ))}
          </Picker>
        </View>

        <Text className="font-montserratRegular text-xl mb-1.5 mt-5">
          Localização
        </Text>
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
          <Text className="font-montserratBold text-xl color-white text-center">
            Bater ponto
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
