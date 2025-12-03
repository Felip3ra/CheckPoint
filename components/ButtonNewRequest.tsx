import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { theme } from "@/styles/theme";

const ButtonNewRequest = (): React.JSX.Element => {
    return (
        <Link href="/NewRequest" asChild>
            <TouchableOpacity style={styles.fab}>
                <MaterialCommunityIcons name="plus" size={24} color={theme.colors.background} />
            </TouchableOpacity>
        </Link>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        bottom: theme.spacing.xxl * 1.4,
        right: theme.spacing.xl,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.radius.pill,
        padding: theme.spacing.lg,
        elevation: 4,
    },
});

export default ButtonNewRequest;
