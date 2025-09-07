
import { View, TextInput,TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "../global.css";
import { useCustomFonts } from "@/hooks/useFonts";
import { useState } from "react";

type TextInputProps = {
    Iconname: string;
    placeholder: string;
    ispassword: boolean;
    onChangeText: (text: string) => void;
}
 const StyledTextInput: React.FC<TextInputProps> = ({Iconname,placeholder,ispassword,onChangeText}) => {
    const fontsLoaded = useCustomFonts();
    const [IsPSWD,setIsPSWD] = useState(false);
    const MudarSenha = () => setIsPSWD(!IsPSWD);
    return (
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: '#EDEDED', height: 50, borderRadius: 8, paddingHorizontal: 8, width: 319 }}>
            <MaterialCommunityIcons
                name={Iconname}
                size={25}
            />
            <TextInput
                placeholder={placeholder}
                style={styles.TextBox}
                className="font-montserratRegular flex-1"
                onChangeText={onChangeText}
                secureTextEntry={ispassword && !IsPSWD}
                
                
            />
            {ispassword && (
        <TouchableOpacity  className="ml-12" onPress={MudarSenha}>
          <MaterialCommunityIcons name={IsPSWD ? "eye-off" : "eye"} size={25} />
        </TouchableOpacity>
      )}
        </View>
    );
}

export default StyledTextInput