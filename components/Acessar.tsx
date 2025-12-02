import React from "react";
import { ActivityIndicator, TouchableOpacity, Text } from "react-native";
import "../global.css";
import { componentStyles } from "@/styles/componentStyles";
import { theme } from "@/styles/theme";

type BtnAcessar = {
    tipo: string;
    onPress?: () => void;
    disabled?: boolean;
    loading?: boolean;
};

const Acessar: React.FC<BtnAcessar> = ({ tipo, onPress, disabled = false, loading = false }) => {
    return (
        <TouchableOpacity
            style={[
                componentStyles.primaryButton,
                disabled || loading ? { opacity: 0.7 } : undefined,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={theme.colors.background} />
            ) : (
                <Text style={componentStyles.primaryButtonText}>{tipo}</Text>
            )}
        </TouchableOpacity>
    );
};

export default Acessar;
