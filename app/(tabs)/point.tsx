import { View,Text, SafeAreaView, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Mapa from "../../components/maps";
import Acessar from "components/Acessar";
import LottieView from "lottie-react-native";
import { styles } from "styles/styles";

export default function point(): React.JSX.Element{
    enum Pontos{
        ponto1 = 'Entrada',
        ponto2 = 'Almoco',
        ponto3 = 'Volta do Almoco',
        ponto4 = 'Saída',
        default = 'Selecione o tipo de ponto'
    };
    //const [ponto, setPonto] = useState<string | null>(null);
    let dataHoje: string = new Date().toLocaleDateString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'long', // Nome do dia da semana
        year: 'numeric', // Ano completo
        month: 'long',   // Nome do mês
        day: 'numeric',   // Dia do mês
        hour12: false,
        timeZone: 'America/Sao_Paulo',
      });
      
      const [ponto,setPonto] = useState<string | null>(Pontos.default);
      const [modal,setModal] = useState<boolean>(false);
      function ShowModal() {
        setModal(true)
      }
      function CloseModal() {
        setModal(false);
      }
      
    return(
        <SafeAreaView className="flex bg-[#FBF7F4]">
            <Modal animationType="slide" visible={modal} >
        <View className="mx-9">
            <Text className="text-center mt-7 font-montserratBold text-2xl">
                Comprovante de Ponto
            </Text>
            <View className="items-center my-4">
            <LottieView
            source={require('../../assets/checked-animation.json')}
            autoPlay={true}
            loop={false}
            style={{width: 150, height: 150}}
            />
            </View>
            
            <Text className="text-center mb-5 font-montserratBold text-2xl">
                Ponto de Entrada
            </Text>
            <Text className="mt-5 font-montserratMedium text-sm">
            Registrado em: 18 de Dezembro de 2024 às 09:00
            </Text>
            <Text className="text-center mt-5 font-montserratBold text-xl">
            Identificação do empregado
            </Text>
            <View className="gap-5 mt-5">
                <Text className="font-montserratMedium text-sm">
                <Text className="font-montserratBold text-sm">Nome:</Text> Felipe Santana Santos
                </Text>
                <Text className="font-montserratMedium text-sm">
                <Text className="font-montserratBold text-sm">Matrícula:</Text> 000.000.000-00
                </Text>
                <Text className="font-montserratMedium text-sm">
                <Text className="font-montserratBold text-sm">Jornada:</Text> 09:00 ás 16 Hrs
                </Text>
                <Text className="font-montserratMedium text-sm">
                <Text className="font-montserratBold text-sm">Local:</Text> Av. Benjamin Constant, 66 - Santos
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
            <View className="mx-7">
            <Text className="font-montserratRegular text-xl mt-9">
                Horário do ponto
            </Text>
            <Text className="font-montserratMedium text-xl mt-8">
                {dataHoje}
            </Text>
            <Text className="font-montserratRegular text-xl mt-4 mb-1.5">
                Tipo de ponto
            </Text>
            <View className="rounded-lg bg-[#EDEDED]">
            <Picker selectedValue={ponto} onValueChange={(itemValue,itemIndex) => setPonto(itemValue)} style={{fontFamily: 'font-montserratRegular'}}>
            {Object.values(Pontos)
                    .filter(value => typeof value === 'string') // Filtra apenas os valores do enum
                    .map((ponto, index) => (
                        <Picker.Item key={index} label={ponto} value={ponto}/>
                    ))}
                
            </Picker>
            </View>
            <Text className="font-montserratRegular text-xl mb-1.5 mt-5">
                Localizacao
            </Text>
            <View className="flex-row items-center gap-20 py-5 pl-5  border-[#D6D6D6] border rounded-lg">
                <Text className="font-montserratRegular text-xl">
                    Av. Benjamin Constant, 66
                </Text>
                <MaterialCommunityIcons
                name="reload"
                size={24}
                
                />
            </View>
            <View className="h-72 flex-row mt-4">
                    <Mapa/>
            </View>
            <TouchableOpacity style={styles.BtnAcessar} onPress={ShowModal}>
                        <Text className="font-montserratBold text-xl color-white">
                            Bater ponto
                        </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        
    );

    
}