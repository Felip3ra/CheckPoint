import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "../global.css";
import { theme } from "@/styles/theme";

export default function CardHorasTrabalhadas(): React.JSX.Element {
    return (
        <View style={cardStyles.wrapper}>
            <Card style={cardStyles.card}>
                <Card.Content>
                    <View style={cardStyles.content}>
                        <Text style={cardStyles.title}>Horas Trabalhadas</Text>
                        <MaterialCommunityIcons name="lightning-bolt" size={25} color={theme.colors.primary} />
                        <Text style={cardStyles.value}>00:00H</Text>
                    </View>
                </Card.Content>
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
    content: {
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    title: {
        fontSize: 14,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.text,
    },
    value: {
        fontSize: 16,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.text,
    },
});
