import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, ProgressBar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "../global.css";
import { theme } from "@/styles/theme";

export default function CardAtual(): React.JSX.Element {
    return (
        <View style={cardStyles.wrapper}>
            <Card style={cardStyles.card}>
                <Card.Content>
                    <View style={cardStyles.header}>
                        <Text style={cardStyles.title}>Seu dia hoje</Text>
                        <MaterialCommunityIcons name="reload" size={20} color={theme.colors.text} />
                    </View>
                    <View style={cardStyles.row}>
                        <View style={cardStyles.center}>
                            <Text style={cardStyles.label}>Progresso</Text>
                            <Text style={cardStyles.value}>0%</Text>
                        </View>
                        <View style={cardStyles.center}>
                            <Text style={cardStyles.label}>Saída Prevista</Text>
                            <Text style={cardStyles.value}>16:00H</Text>
                        </View>
                    </View>
                    <ProgressBar progress={0.0} color={theme.colors.primary} style={cardStyles.progress} />
                </View>
            </Card>
        </View>
    );
}

const cardStyles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "center",
    },
    card: {
        width: "100%",
        paddingVertical: 4,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 6,
    },
    title: {
        fontSize: 16,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.text,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
        marginBottom: 8,
    },
    center: {
        alignItems: "center",
        flex: 1,
    },
    label: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 13,
        color: theme.colors.muted,
    },
    value: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 14,
        color: theme.colors.text,
    },
    progress: {
        height: 10,
        borderRadius: theme.radius.lg,
    },
});
