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
                    <Text className="text-base mt-14 mb-1.5 font-montserratRegular">
                        Email
                    </Text>
                    <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} />


                    <Text style={styles.LabelSenha} className="text-base mt-2 mb-1.5">
                        Senha
                    </Text>
                    <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword={true} />


                    <Text style={styles.LabelConfirmeSenha}>
                        Confirme a senha
                    </Text>
                    <StyledTextInput Iconname="lock" placeholder="Confirme sua senha..." ispassword={true} />

                    <Acessar tipo="Cadastrar"/>

                    <View style={{flexDirection: "row",justifyContent: "center", alignItems: "flex-end",flex:1, marginBottom: 50, width: 180,alignSelf: "center"}}>
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
        </SafeAreaView>

    );
}

export default Cadastrar