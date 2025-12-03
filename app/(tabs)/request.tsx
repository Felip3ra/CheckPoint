import React from "react";
import { SafeAreaView, View, Text, FlatList, ListRenderItem, StyleSheet } from "react-native";
import Item from "@/components/SolicitacaoItem";
import ButtonNewRequest from "@/components/ButtonNewRequest";
import { theme } from "@/styles/theme";

interface Ajuste {
    id: string;
    titulo: string;
    status: string;
    motivo: string;
}

const ajustes: Ajuste[] = [
    { id: "1", titulo: "Ajuste de Ponto", status: "Pendente", motivo: "Consulta médica." },
    { id: "2", titulo: "Ajuste de Ponto", status: "Reprovado", motivo: "Esqueci o crachá." },
    { id: "3", titulo: "Ajuste de Ponto", status: "Aprovado", motivo: "Elevador quebrado." },
    { id: "4", titulo: "Ajuste de Ponto", status: "Pendente", motivo: "Consulta médica." },
    { id: "5", titulo: "Ajuste de Ponto", status: "Reprovado", motivo: "Esqueci o crachá." },
    { id: "6", titulo: "Ajuste de Ponto", status: "Aprovado", motivo: "Elevador quebrado." },
];

function Request(): React.JSX.Element {
    const renderItem: ListRenderItem<Ajuste> = ({ item }) => (
        <Item
            titulo={item.titulo}
            status={item.status}
            motivo={item.motivo}
            onPress={() => console.log("Clicou em", item.titulo)}
        />
    );

    return (
        <SafeAreaView style={requestStyles.screen}>
            <View style={requestStyles.content}>
                <Text style={requestStyles.title}>Suas Solicitações</Text>
                <FlatList
                    data={ajustes}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: theme.spacing.sm,
                        paddingBottom: theme.spacing.xxl * 3,
                        paddingTop: theme.spacing.xs,
                    }}
                />
                <ButtonNewRequest />
            </View>
        </SafeAreaView>
    );
}

export default Request;

const requestStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        flex: 1,
        padding: theme.spacing.lg,
        gap: theme.spacing.md,
        paddingBottom: theme.spacing.xxl * 2,
    },
    title: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 18,
        color: theme.colors.text,
        paddingVertical: theme.spacing.sm,
    },
});
