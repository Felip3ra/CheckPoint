
import { View, TextInput,TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TextInputProps = {
    Iconname: string;
    placeholder: string;
    ispassword: boolean;
}
 const StyledTextInput: React.FC<TextInputProps> = ({Iconname,placeholder,ispassword}) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: '#EDEDED', height: 50, borderRadius: 8, paddingHorizontal: 8, width: 319 }}>
            <MaterialCommunityIcons
                name={Iconname}
                size={25}
            />
            <TextInput
                placeholder={placeholder}
                style={styles.TextBox}
                className="font-montserratRegular"

            />
            {ispassword && (
        <TouchableOpacity  className="ml-12">
          <MaterialCommunityIcons name={"eye"} size={25} />
        </TouchableOpacity>
      )}
        </View>
    );
}

export default StyledTextInput