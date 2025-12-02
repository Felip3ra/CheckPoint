import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "../global.css";
import { theme } from "@/styles/theme";

type ButtonPontoProps = {
    size: number;
    focused: boolean;
};

const ButtonPonto: React.FC<ButtonPontoProps> = ({ focused, size }) => {
    return (
        <View
            style={{
                width: 60,
                height: 60,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 40,
                backgroundColor: focused ? theme.colors.primary : theme.colors.primarySoft,
            }}
        >
            <MaterialCommunityIcons name="alarm" size={size} color={focused ? "#fff" : "#F8F8F8"} />
        </View>
    );
};

export default ButtonPonto;
