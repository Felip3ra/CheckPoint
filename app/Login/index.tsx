import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Stack, router } from "expo-router";
import StyledTextInput from "@/components/StyledTextInput";
import Acessar from "@/components/Acessar";
import { useAuth } from "@/hooks/AuthContext";
import { authStyles } from "@/styles/authStyles";
import { loginFuncionario } from "@/services/authService";
import { theme } from "@/styles/theme";

function Login(): React.JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { login } = useAuth();

    const handleAutenticateUser = async (): Promise<void> => {
        try {
            setLoading(true);
            const user = await loginFuncionario({ email, senha });
            login(user);
            router.replace("../(tabs)");
        } catch (error: any) {
            console.error("Erro ao fazer login:", error.message);
            Alert.alert("Erro", error.message || "Ocorreu um erro ao fazer login.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 32}
            style={authStyles.container}
        >
            <Stack.Screen options={{ headerShown: false }} />
            <ScrollView contentContainerStyle={authStyles.scrollContent} keyboardShouldPersistTaps="handled">
                <View style={authStyles.logoWrapper}>
                    <Image source={require("../../imgs/checkpoint.png")} style={authStyles.logo} />
                </View>
                <View style={authStyles.content}>
                    <View style={authStyles.form}>
                        <Text style={authStyles.label}>Email</Text>
                        <StyledTextInput
                            Iconname="email"
                            placeholder="Digite seu email..."
                            ispassword={false}
                            onChangeText={setEmail}
                        />

                        <Text style={authStyles.label}>Senha</Text>
                        <StyledTextInput
                            Iconname="lock"
                            placeholder="Digite sua senha..."
                            ispassword
                            onChangeText={setSenha}
                        />

                        <TouchableOpacity style={authStyles.forgotWrapper}>
                            <Text style={authStyles.forgotText}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                        <View style={authStyles.cta}>
                            <Acessar tipo="Acessar" onPress={handleAutenticateUser} loading={loading} />
                        </View>

                        <View style={authStyles.footer}>
                            <Text style={authStyles.footerText}>Não tem uma conta?</Text>
                            <TouchableOpacity onPress={() => router.push("../Register")}>
                                <Text style={[authStyles.footerLink, { marginLeft: theme.spacing.sm }]}>
                                    Cadastre-se
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Login;
