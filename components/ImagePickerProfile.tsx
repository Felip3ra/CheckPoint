import React, { useState } from "react";
import { View, Button, Image, Alert} from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerProfile: React.FC = () => {
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
      <Button title="Selecionar Imagem" onPress={pickImage} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{width: 200, height: 200, borderRadius: 100,}} resizeMode="cover"/>}
    </View>
    )
  }

export default ImagePickerProfile