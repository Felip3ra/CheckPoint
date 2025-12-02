import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "../global.css";
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
        <TouchableOpacity onPress={onPress} style={[componentStyles.listItem, { alignItems: "flex-start" }]}>
            <Text className="text-xl font-montserratSemiBold px-5">{titulo}</Text>
            <View
                style={[
                    componentStyles.chip,
                    { backgroundColor: current.bg, borderColor: "transparent" },
                ]}
            >
                <MaterialCommunityIcons name={current.icon as any} size={25} color={current.color} />
                <Text className="text-base font-montserratMedium px-1" style={{ color: current.color }}>
                    {status}
                </Text>
            </View>
            <Text className="font-montserratMedium text-base px-4" style={{ color: theme.colors.text }}>
                Motivo: {motivo}
            </Text>
            <Text className="text-base font-montserratRegular px-4" style={{ color: theme.colors.muted }}>
                18 de Dezembro de 2024
            </Text>
        </TouchableOpacity>
    );
};

export default Item;
