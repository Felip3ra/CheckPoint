import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const homeStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        flex: 2,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: theme.spacing.lg,
        paddingTop: theme.spacing.xl,
    },
    date: {
        fontFamily: theme.fontFamily.semiBold,
        fontSize: 18,
        color: theme.colors.background,
        textTransform: "capitalize",
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: theme.spacing.lg,
        width: "100%",
        justifyContent: "space-between",
    },
    hello: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 22,
        color: theme.colors.background,
        flex: 1,
    },
    cardsWrapper: {
        width: "100%",
        marginTop: theme.spacing.lg,
    },
    pagination: {
        gap: 6,
        marginBottom: theme.spacing.lg,
    },
    listContainer: {
        flex: 2,
        backgroundColor: theme.colors.background,
        marginHorizontal: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
    },
    empty: {
        marginTop: theme.spacing.lg,
        textAlign: "center",
        color: theme.colors.muted,
        fontFamily: theme.fontFamily.medium,
    },
});
