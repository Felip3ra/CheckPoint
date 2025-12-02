import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Acessar from "@/components/Acessar";
import StyledTextInput from "@/components/StyledTextInput";
import ImagePickerProfile from "@/components/ImagePickerProfile";
import { theme } from "@/styles/theme";

export default function Profile(): React.JSX.Element {
    return (
        <ScrollView contentContainerStyle={profileStyles.container}>
            <ImagePickerProfile />
            <Text className="font-montserratMedium text-2xl mt-5 text-center" style={{ color: theme.colors.text }}>
                Felipe Santana Santos
            </Text>
            <View style={profileStyles.form}>
                <Text className="font-montserratRegular mt-4 text-lg mb-1" style={{ color: theme.colors.text }}>
                    Email
                </Text>
                <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} />

                <Text className="font-montserratRegular text-lg mt-4 mb-1" style={{ color: theme.colors.text }}>
                    Senha
                </Text>
                <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword />

                <View style={{ marginTop: theme.spacing.lg }}>
                    <Acessar tipo="Salvar" />
                </View>

                <View style={profileStyles.footer}>
                    <TouchableOpacity>
                        <Text className="text-base font-montserratRegular" style={{ color: theme.colors.primary }}>
                            Política de privacidade
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const profileStyles = StyleSheet.create({
    container: {
        padding: theme.spacing.lg,
    },
    form: {
        marginTop: theme.spacing.lg,
        gap: theme.spacing.sm,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl,
    },
});


