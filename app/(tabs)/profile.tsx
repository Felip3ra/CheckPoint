import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "@/styles/styles";
import Acessar from "@/components/Acessar";
import StyledTextInput from "@/components/StyledTextInput";
import ImagePickerProfile from "@/components/ImagePickerProfile";

export default function Profile(): React.JSX.Element {
    return (
        <ScrollView>
            <View className="flex-1">
                <ImagePickerProfile />
                <Text className="font-montserratMedium text-2xl mt-5 text-center">
                    Felipe Santana Santos
                </Text>
                <View style={styles.ContainerInput}>
                    <Text className="font-montserratRegular mt-4 text-lg mb-1">Email</Text>
                    <StyledTextInput
                        Iconname="email"
                        placeholder="Digite seu email..."
                        ispassword={false}
                    />

                    <Text className="font-montserratRegular text-lg mt-4 mb-1">Senha</Text>
                    <StyledTextInput
                        Iconname="lock"
                        placeholder="Digite sua senha..."
                        ispassword={true}
                    />

                    <Acessar tipo="Acessar" />

                    <View className="flex-row justify-center items-end flex-1 mb-14 self-center w-41 mt-12">
                        <TouchableOpacity>
                            <Text className="text-base text-[#0097E2] font-montserratRegular">
                                Politica de privacidade
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}


