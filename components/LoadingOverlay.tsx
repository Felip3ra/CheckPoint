import React, { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { theme } from "@/styles/theme";

type LoadingOverlayProps = {
    label?: string;
    fullScreen?: boolean;
};

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ label = "Carregando...", fullScreen = true }) => {
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(scale, {
                    toValue: 1.1,
                    duration: 600,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(scale, {
                    toValue: 1,
                    duration: 600,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        );

        animation.start();

        return () => {
            animation.stop();
        };
    }, [scale]);

    return (
        <View
            style={{
                flex: fullScreen ? 1 : undefined,
                justifyContent: "center",
                alignItems: "center",
                padding: theme.spacing.lg,
            }}
        >
            <Animated.View
                style={{
                    width: 64,
                    height: 64,
                    borderRadius: theme.radius.pill,
                    backgroundColor: theme.colors.primary,
                    opacity: 0.18,
                    transform: [{ scale }],
                }}
            />
            <Text
                style={{
                    marginTop: theme.spacing.md,
                    fontFamily: theme.fontFamily.medium,
                    color: theme.colors.text,
                }}
            >
                {label}
            </Text>
        </View>
    );
};

export default LoadingOverlay;
