import React,{useState} from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { styles } from "@/styles/styles";
import StyledTextInput from "@/components/StyledTextInput";
import Acessar from "@/components/Acessar";
import axios from "axios";
import { router } from "expo-router";
import { useCustomFonts } from "@/hooks/useFonts";
function Cadastrar(): React.JSX.Element {
    const fontsLoaded = useCustomFonts();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const handleCreateUser = async () => {
        try{
            const API_URL = 'http://192.168.15.116:3000/funcionarios/criarFuncionario';
            
            await axios.post(API_URL,{
                FUN_NM_NOME: nome,
                FUN_NM_EMAIL: email,
                FUN_NM_SENHA: senha
            });
            Alert.alert("Sucesso","Usuário criado com sucesso!")
            router.replace("../Login")
        }
        catch(error){
            console.error('Erro ao criar usuário:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao criar o usuário.');
        }
    }
    return (
        <KeyboardAvoidingView style={styles.ContainerLogin}>
            <View style={styles.ContainerLogo}>
                <Image
                    source={require('../../imgs/checkpoint.png')}
                    style={styles.LogoLogin}
                />
            </View>
            <View style={styles.ContainerBackground}>
                <View style={styles.ContainerInput}>

                    <Text className="text-base mt-12 mb-1.5 font-montserratRegular">
                        Nome
                    </Text>
                    <StyledTextInput Iconname="account" placeholder="Digite seu nome..." ispassword={false} onChangeText={(text) => setNome(text)}/>

                    <Text className="text-base mt-2 mb-1.5 font-montserratRegular">
                        Email
                    </Text>
                    <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} onChangeText={(text) => setEmail(text)}/>


                    <Text style={styles.LabelSenha} className="text-base mt-2 mb-1.5">
                        Senha
                    </Text>
                    <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword={true} onChangeText={(text) => setSenha(text)}/>



                    <Acessar tipo="Cadastrar" onPress={handleCreateUser}/>

                    <View className="flex-1 items-end mb-12  self-center flex-row justify-center py-4">
                        <Text className="mr-2 text-base font-montserratRegular">
                            Já possui uma conta?
                        </Text>
                        <TouchableOpacity>
                        <Text className="text-base text-[#0097E2] font-montserratRegular">
                            Acesse aqui
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>



            </View>
        </KeyboardAvoidingView>

    );
}

export default Cadastrar