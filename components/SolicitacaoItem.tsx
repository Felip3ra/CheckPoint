import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { componentStyles } from "@/styles/componentStyles";
import { theme } from "@/styles/theme";

type ItemProps = {
    titulo: string;
    onPress: () => void;
    status: string;
    motivo: string;
};

const statusConfig = {
    Aprovado: { bg: "#ACFFD6", color: "#0C4E2D", icon: "thumb-up-outline" },
    Pendente: { bg: "#FBFBA6", color: "#4A4A0F", icon: "clock-outline" },
    Reprovado: { bg: "#FBA6A8", color: "#591B1C", icon: "thumb-down-outline" },
};

const Item = ({ titulo, onPress, status, motivo }: ItemProps): React.JSX.Element => {
    const current = statusConfig[status as keyof typeof statusConfig] || statusConfig.Reprovado;

    return (
        <TouchableOpacity onPress={onPress} style={componentStyles.listItem}>
            <Text style={styles.title}>{titulo}</Text>
            <View style={[componentStyles.chip, { backgroundColor: current.bg, borderColor: "transparent" }]}>
                <MaterialCommunityIcons name={current.icon as any} size={22} color={current.color} />
                <Text style={[styles.status, { color: current.color }]}>{status}</Text>
            </View>
            <Text style={styles.motive}>Motivo: {motivo}</Text>
            <Text style={styles.date}>18 de Dezembro de 2024</Text>
        </TouchableOpacity>
    );
};

export default Item;

const styles = StyleSheet.create({
    title: {
        fontFamily: theme.fontFamily.semiBold,
        fontSize: 16,
        color: theme.colors.text,
        textAlign: "center",
    },
    status: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 14,
    },
    motive: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 14,
        color: theme.colors.text,
        textAlign: "center",
    },
    date: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 13,
        color: theme.colors.muted,
        textAlign: "center",
    },
});
