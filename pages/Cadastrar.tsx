import React from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

import StyledTextInput from "../components/StyledTextInput";
import Acessar from "../components/Acessar";
function Cadastrar(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.ContainerLogin}>
            <View style={styles.ContainerLogo}>
                <Image
                    source={require('../imgs/checkpoint.png')}
                    style={styles.LogoLogin}
                />
            </View>
            <View style={styles.ContainerBackground}>
                <View style={styles.ContainerInput}>
                    <Text style={styles.LabelEmail}>
                        Email
                    </Text>
                    <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} />


                    <Text style={styles.LabelSenha}>
                        Senha
                    </Text>
                    <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword={true} />


                    <Text style={styles.LabelConfirmeSenha}>
                        Confirme a senha
                    </Text>
                    <StyledTextInput Iconname="lock" placeholder="Confirme sua senha..." ispassword={true} />


                    <TouchableOpacity style={styles.BtnEsqueciSenha}>
                        <Text style={styles.BtnTextEsqueciSenha}>
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>

                    <Acessar tipo="Cadastrar"/>

                    <View style={{flexDirection: "row",justifyContent: "center", alignItems: "flex-end",flex:1, marginBottom: 50, width: 180,alignSelf: "center"}}>
                        <Text style={{marginRight: 5,fontSize: 16}}>
                            Já possui uma conta?
                        </Text>
                        <TouchableOpacity>
                        <Text style={styles.BtnTextCadastro}>
                            Acesse aqui
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>



            </View>
        </SafeAreaView>

    );
}

export default Cadastrar