import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    logoWrapper: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 324,
        height: 243,
    },
    content: {
        flex: 2,
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        paddingHorizontal: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
    },
    form: {
        flex: 1,
    },
    label: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 16,
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.xs,
        color: theme.colors.text,
    },
    forgotWrapper: {
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: theme.spacing.sm,
    },
    forgotText: {
        fontSize: 14,
        color: theme.colors.primary,
        fontFamily: theme.fontFamily.medium,
    },
    cta: {
        marginTop: theme.spacing.xl,
    },
    footer: {
        marginBottom: theme.spacing.xl,
        paddingVertical: theme.spacing.lg,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    footerText: {
        fontSize: 14,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.text,
    },
    footerLink: {
        fontSize: 14,
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.primary,
    },
});
