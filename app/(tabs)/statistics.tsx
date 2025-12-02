import "../../global.css";
import React from "react";
import { View, Text } from "react-native";
import DataPickerSelect from "@/components/DataPickerSelect";
import CardHorasTrabalhadas from "@/components/CardHorasTrabalhadas";
import StatisticDaySelect from "@/components/StatisticDaySelect";
import { theme } from "@/styles/theme";

export default function Statistics(): React.JSX.Element {
    return (
        <View className="m-3 flex-1 gap-3">
            <DataPickerSelect />
            <Text className="font-montserratRegular text-xl" style={{ color: theme.colors.text }}>
                Suas Estatísticas
            </Text>
            <View className="flex-row" style={{ gap: theme.spacing.md }}>
                <CardHorasTrabalhadas />
                <CardHorasTrabalhadas />
            </View>
            <View className="flex-row" style={{ gap: theme.spacing.md }}>
                <CardHorasTrabalhadas />
                <CardHorasTrabalhadas />
            </View>
            <Text className="font-montserratRegular text-xl" style={{ color: theme.colors.text }}>
                Dia a ser visualizado
            </Text>
            <StatisticDaySelect />
        </View>
    );
}
