import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link,useRouter } from "expo-router";
import "../global.css";
import { useCustomFonts } from "@/hooks/useFonts";
const ButtonNewRequest = () =>{
    const fontsLoaded = useCustomFonts();
    return(
        
        <Link href='/NewRequest' asChild>
        
        <TouchableOpacity className="absolute bg-[#0097E2] rounded-lg p-4 bottom-5 right-0">
            <MaterialCommunityIcons name="plus" size={25}/>
        </TouchableOpacity>
        </Link>
    );
}

export default ButtonNewRequest;