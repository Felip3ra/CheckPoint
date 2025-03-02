
import { View, TextInput,TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type TextInputProps = {
    Iconname: string;
    placeholder: string;
    ispassword: boolean;
}
 const StyledTextInput: React.FC<TextInputProps> = ({Iconname,placeholder,ispassword}) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: '#EDEDED', height: 50, borderRadius: 8, paddingHorizontal: 8, width: 319 }}>
            <Icon
                name={Iconname}
                size={25}
            />
            <TextInput
                placeholder={placeholder}
                style={styles.TextBox}


            />
            {ispassword && (
        <TouchableOpacity  style={{ marginLeft: 50 }}>
          <Icon name={"eye"} size={25} />
        </TouchableOpacity>
      )}
        </View>
    );
}

export default StyledTextInput