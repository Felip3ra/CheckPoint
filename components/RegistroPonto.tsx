import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "../global.css";
import { theme } from "@/styles/theme";

type RegistroPontoProps = {
    ponto: string;
    horario: string;
};

const iconMap: Record<string, { icon: keyof typeof MaterialCommunityIcons.glyphMap; color: string }> = {
    Entrada: { icon: "login", color: theme.colors.success },
    Almoço: { icon: "food", color: theme.colors.warning },
    Volta: { icon: "desk", color: theme.colors.success },
    Saída: { icon: "logout", color: theme.colors.danger },
};

const RegistroPonto = ({ ponto, horario }: RegistroPontoProps): React.JSX.Element => {
    const iconConfig = iconMap[ponto] || { icon: "clock-outline", color: theme.colors.muted };

    return (
        <View className="flex-row justify-around border border-[#D6D6D6] py-2 mt-3 items-center gap-20 rounded-lg">
            <MaterialCommunityIcons name={iconConfig.icon} size={25} color={iconConfig.color} />
            <View className="gap-1.5 items-center">
                <Text className="font-montserratSemiBold text-base">{ponto}</Text>
                <Text className="font-montserratRegular text-base">{horario}</Text>
            </View>
            <MaterialCommunityIcons name="file-document-outline" size={25} />
        </View>
    );
};

export default RegistroPonto;
