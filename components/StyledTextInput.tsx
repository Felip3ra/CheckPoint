import { View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "../global.css";
import { useState } from "react";
import { componentStyles } from "@/styles/componentStyles";
import { theme } from "@/styles/theme";

type TextInputProps = {
    Iconname: string;
    placeholder: string;
    ispassword: boolean;
    onChangeText: (text: string) => void;
};

const StyledTextInput: React.FC<TextInputProps> = ({ Iconname, placeholder, ispassword, onChangeText }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePassword = (): void => setIsPasswordVisible((prev) => !prev);

    return (
        <View style={componentStyles.textInputWrapper}>
            <MaterialCommunityIcons name={Iconname} size={24} />
            <TextInput
                placeholder={placeholder}
                style={componentStyles.textInput}
                placeholderTextColor={theme.colors.muted}
                onChangeText={onChangeText}
                secureTextEntry={ispassword && !isPasswordVisible}
            />
            {ispassword && (
                <TouchableOpacity onPress={togglePassword} style={{ paddingHorizontal: 6 }}>
                    <MaterialCommunityIcons name={isPasswordVisible ? "eye-off" : "eye"} size={22} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default StyledTextInput;
