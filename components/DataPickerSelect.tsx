import React, { useEffect, useState } from "react";
import { View,Text,TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import '../global.css';
import { useAuth } from "@/hooks/AuthContext";
import axios from "axios";
export default function DataPickerSelect({user}) : React.JSX.Element {
    const [loading, setLoading] = useState(true);
      const [estatisticas, setEstatisticas] = useState(null);
    
      const [inicio, setInicio] = useState(new Date("2024-12-01"));
      const [fim, setFim] = useState(new Date("2024-12-18"));
    
      const [isPickerVisible, setPickerVisible] = useState(false);
      const [pickerType, setPickerType] = useState("inicio");
    
      const userId = 1; // exemplo
    
      const formatarData = (data) => {
        const d = new Date(data);
        return d.toLocaleDateString("pt-BR");
      };
        useEffect(() => {
            try{
            
                const fetchDataPicker = async () => {
                    const API_URL = `http://192.168.15.116:3000/api/GetStatistics/${user.id}`
                console.log(user?.id);
                    await axios.post(API_URL,{
                        CodigoFuncionario : user!.id,
                        

                    })
                }
                
            
        }
        catch(error){
            console.error('Erro ao criar Ponto:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao criar o Ponto.');
        }
        },[inicio,fim]);
    return(
        <SafeAreaView>
            <View className="p-5 rounded-xl bg-white flex-row items-center justify-between">
                <View>

                    <Text className="font-montserratMedium text-base">Período Escolhido</Text>
                    <View className="flex-row items-center">
                        
                            <TouchableOpacity onPress={() => { setPickerType("inicio"); setPickerVisible(true); }}>
                                <Text className="mb-1.5 font-montserratMedium">{formatarData(inicio)}</Text>
                            </TouchableOpacity>
                            <Text className="mb-1.5 font-montserratMedium"> - </Text>
                            <TouchableOpacity onPress={() => { setPickerType("fim"); setPickerVisible(true); }}>
                                <Text className="mb-1.5 font-montserratMedium">{formatarData(fim)}</Text>
                            </TouchableOpacity>

                        
                    </View>
                </View>
                <Ionicons name="calendar-outline" size={22} color="#333" />
            </View>
        </SafeAreaView>
    );
}