import React from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "styles/styles";
import { Stack } from "expo-router";
import StyledTextInput from "components/StyledTextInput";
import Acessar from "components/Acessar";
function Login(): React.JSX.Element {
    return (
        
        <SafeAreaView style={styles.ContainerLogin}>
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
                    <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} />


                    <Text style={styles.LabelSenha} className="font-montserratRegular">
                        Senha
                    </Text>
                    <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword={true} />

                    <TouchableOpacity style={styles.BtnEsqueciSenha}>
                        <Text className="text-base text-[#0097E2]">
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>

                    <Acessar tipo="Acessar"/>

                    <View style={{flexDirection: "row",justifyContent: "center", alignItems: "flex-end",flex:1, marginBottom: 50, width: 160,alignSelf: "center"}}>
                        <Text className="mr-2 text-base font-montserratRegular">
                            Não tem uma conta?
                        </Text>
                        <TouchableOpacity>
                        <Text className="text-base text-[#0097E2] font-montserratRegular">
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>



            </View>
        </SafeAreaView>

    );
}

export default Login