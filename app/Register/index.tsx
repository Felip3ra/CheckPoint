import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import StyledTextInput from "@/components/StyledTextInput";
import Acessar from "@/components/Acessar";
import { router } from "expo-router";
import { authStyles } from "@/styles/authStyles";
import { cadastrarFuncionario } from "@/services/authService";
import { theme } from "@/styles/theme";

function Cadastrar(): React.JSX.Element {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleCreateUser = async () => {
        try {
            setLoading(true);
            await cadastrarFuncionario({ nome, email, senha });
            Alert.alert("Sucesso", "Usuário criado com sucesso!");
            router.replace("../Login");
        } catch (error: any) {
            console.error("Erro ao criar usuário:", error.message);
            Alert.alert("Erro", error.message || "Ocorreu um erro ao criar o usuário.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={authStyles.container}
        >
            <View style={authStyles.logoWrapper}>
                <Image source={require("../../imgs/checkpoint.png")} style={authStyles.logo} />
            </View>
            <View style={authStyles.content}>
                <View style={authStyles.form}>
                    <Text style={[authStyles.label, { marginTop: theme.spacing.xl }]}>Nome</Text>
                    <StyledTextInput Iconname="account" placeholder="Digite seu nome..." ispassword={false} onChangeText={setNome} />

                    <Text style={authStyles.label}>Email</Text>
                    <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} onChangeText={setEmail} />

                    <Text style={authStyles.label}>Senha</Text>
                    <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword onChangeText={setSenha} />

                    <View style={[authStyles.cta, { marginTop: theme.spacing.xl }]}>
                        <Acessar tipo="Cadastrar" onPress={handleCreateUser} loading={loading} />
                    </View>

                    <View style={authStyles.footer}>
                        <Text style={authStyles.footerText}>Já possui uma conta?</Text>
                        <TouchableOpacity onPress={() => router.replace("../Login")}>
                            <Text style={[authStyles.footerLink, { marginLeft: theme.spacing.sm }]}>Acesse aqui</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Cadastrar;
