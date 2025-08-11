import React, { useState } from "react";
import { View, Button, Image, Alert, TouchableOpacity} from "react-native";
import * as ImagePicker from "expo-image-picker";
import "../global.css";
import { useCustomFonts } from "@/hooks/useFonts";
const ImagePickerProfile: React.FC = () => {
  const fontsLoaded = useCustomFonts();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const pickImage = async (): Promise<void> => {
      try {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status != "granted"){
          Alert.alert("Permissão necessária", "Precisamos da permissão para acessar suas imagens.");
          return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"],
          allowsEditing: true,
          aspect: [4,3],
          quality: 1
        });
        console.log(result);
        if(!result.canceled){
          setSelectedImage(result.assets[0].uri);
        }
      } catch (error) {
        
      }
    }
    return(
        <View className="mt-20 flex items-center">
          <TouchableOpacity onPress={pickImage} className="rounded-full w-40 h-40 bg-[#D9D9D9]">
          {selectedImage && <Image source={{ uri: selectedImage }} resizeMode="cover" className=" w-40 h-40 rounded-full"/>}
          </TouchableOpacity>
      
      
    </View>
    )
  }

export default ImagePickerProfile