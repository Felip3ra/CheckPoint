import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const pointStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    wrapper: {
        marginHorizontal: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xxl,
        gap: theme.spacing.md,
    },
    title: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 20,
        color: theme.colors.text,
    },
    subtitle: {
        fontFamily: theme.fontFamily.regular,
        fontSize: 18,
        color: theme.colors.text,
        marginTop: theme.spacing.sm,
        marginBottom: theme.spacing.xs,
    },
    pickerWrapper: {
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.surfaceMuted,
    },
    addressBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.xl,
        paddingVertical: theme.spacing.lg,
        paddingLeft: theme.spacing.lg,
        borderColor: theme.colors.border,
        borderWidth: 1,
        borderRadius: theme.radius.md,
    },
    mapArea: {
        height: 280,
        flexDirection: "row",
        marginTop: theme.spacing.lg,
    },
    modalTitle: {
        textAlign: "center",
        marginTop: theme.spacing.lg,
        fontFamily: theme.fontFamily.bold,
        fontSize: 22,
    },
    modalBox: {
        marginHorizontal: theme.spacing.xl,
    },
    modalDate: {
        marginTop: theme.spacing.lg,
        fontFamily: theme.fontFamily.medium,
        fontSize: 14,
    },
    modalSectionTitle: {
        textAlign: "center",
        marginTop: theme.spacing.lg,
        fontFamily: theme.fontFamily.bold,
        fontSize: 20,
    },
    modalRow: {
        gap: theme.spacing.md,
        marginTop: theme.spacing.lg,
    },
    modalText: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 14,
        color: theme.colors.text,
    },
});
