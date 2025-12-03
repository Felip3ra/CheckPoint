import "../../global.css";
import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import DataPickerSelect from "@/components/DataPickerSelect";
import CardHorasTrabalhadas from "@/components/CardHorasTrabalhadas";
import StatisticDaySelect from "@/components/StatisticDaySelect";
import { theme } from "@/styles/theme";

export default function Statistics(): React.JSX.Element {
    return (
        <SafeAreaView style={statsStyles.screen}>
            <ScrollView contentContainerStyle={statsStyles.container} showsVerticalScrollIndicator={false}>
                <DataPickerSelect />
                <Text style={statsStyles.title}>Suas Estatísticas</Text>
                <View style={statsStyles.cardsRow}>
                    <CardHorasTrabalhadas />
                    <CardHorasTrabalhadas />
                </View>
                <View style={statsStyles.cardsRow}>
                    <CardHorasTrabalhadas />
                    <CardHorasTrabalhadas />
                </View>
                <Text style={[statsStyles.title, { marginTop: theme.spacing.xl }]}>Dia a ser visualizado</Text>
                <StatisticDaySelect />
            </ScrollView>
        </SafeAreaView>
    );
}

const statsStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    container: {
        padding: theme.spacing.lg,
        gap: theme.spacing.md,
    },
    title: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 18,
        color: theme.colors.text,
    },
    cardsRow: {
        flexDirection: "row",
        gap: theme.spacing.md,
    },
});
