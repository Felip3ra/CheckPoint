import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { styles } from "@/styles/styles";
import { router, Stack } from "expo-router";
import StyledTextInput from "@/components/StyledTextInput";
import Acessar from "@/components/Acessar";
import axios from "axios";
import { useAuth } from "@/hooks/AuthContext";
import { useCustomFonts } from "@/hooks/useFonts";

function Login(): React.JSX.Element {
    const fontsLoaded = useCustomFonts();
    const [email,setEmail] = useState<string | null>("")
    const [senha,setSenha] = useState<string | null>("")
    const {login} = useAuth()
    const handleAutenticateUser = async() => {
        try{
            const API_URL = 'http://192.168.15.116:3000/api/Autentication';
            
            const response = await axios.post(API_URL,{email,senha});
            console.log(response)
            const {user} = response.data;
            login({
                id: user.id,
                nome: user.NM_FUNCIONARIO,
                email: user.NM_EMAIL
            });
            console.log(user.id)
            router.replace('../(tabs)')
        }
        catch(error){
            console.error('Erro ao fazer login:', error.response?.data || error.message);
            Alert.alert('Erro', error.response?.data?.error || 'Ocorreu um erro ao fazer login.');
        }
    }
    return (
        

        <KeyboardAvoidingView style={styles.ContainerLogin}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.ContainerLogo}>
                <Image
                    source={require('../../imgs/checkpoint.png')}
                    style={styles.LogoLogin}
                />
            </View>
            <View style={styles.ContainerBackground}>
                <View style={styles.ContainerInput}>
                    <Text className="font-montserratRegular mt-14">
                        Email
                    </Text>
                    <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} onChangeText={(texto) => setEmail(texto)}/>


                    <Text style={styles.LabelSenha} className="font-montserratRegular">
                        Senha
                    </Text>
                    <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword={true} onChangeText={(texto) => setSenha(texto)}/>

                    <TouchableOpacity style={styles.BtnEsqueciSenha}>
                        <Text className="text-base text-[#0097E2]">
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>

                    <Acessar tipo="Acessar" onPress={handleAutenticateUser}/>

                    <View  className="mb-14 py-4 flex-row flex-1 justify-center items-end">
                        <Text className="mr-3 text-base font-montserratRegular">
                            Não tem uma conta?
                        </Text>
                        <TouchableOpacity onPress={() => router.push('../Register')}>
                        <Text className="text-base text-[#0097E2] font-montserratRegular">
                            Cadastre-se 
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>



            </View>
        </KeyboardAvoidingView>

    );
}

export default Login