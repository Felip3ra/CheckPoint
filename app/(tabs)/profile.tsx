import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Acessar from "@/components/Acessar";
import StyledTextInput from "@/components/StyledTextInput";
import ImagePickerProfile from "@/components/ImagePickerProfile";
import { theme } from "@/styles/theme";

export default function Profile(): React.JSX.Element {
    return (
        <SafeAreaView style={profileStyles.screen}>
            <ScrollView contentContainerStyle={profileStyles.container} showsVerticalScrollIndicator={false}>
                <ImagePickerProfile />
                <Text style={profileStyles.name}>Felipe Santana Santos</Text>
                <View style={profileStyles.form}>
                    <Text style={profileStyles.label}>Email</Text>
                    <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} />

                    <Text style={profileStyles.label}>Senha</Text>
                    <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword />

                    <View style={{ marginTop: theme.spacing.lg }}>
                        <Acessar tipo="Salvar" />
                    </View>

                    <View style={profileStyles.footer}>
                        <TouchableOpacity>
                            <Text style={profileStyles.link}>Política de privacidade</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const profileStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    container: {
        padding: theme.spacing.lg,
    },
    name: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 22,
        marginTop: theme.spacing.md,
        textAlign: "center",
        color: theme.colors.text,
    },
    form: {
        marginTop: theme.spacing.lg,
        gap: theme.spacing.sm,
    },
    label: {
        fontFamily: theme.fontFamily.regular,
        marginTop: theme.spacing.sm,
        marginBottom: theme.spacing.xs,
        fontSize: 16,
        color: theme.colors.text,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl,
    },
    link: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 15,
        color: theme.colors.primary,
    },
});
