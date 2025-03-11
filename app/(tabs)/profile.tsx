import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from "styles/styles";
import Acessar from 'components/Acessar';
import StyledTextInput from 'components/StyledTextInput';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import ImagePickerProfile from 'components/ImagePickerProfile';
export default function Profile() {
  
  return (
    <View>
      <ImagePickerProfile/>
      <Text className='font-montserratMedium text-2xl pt-5'>Felipe Santana Santos</Text>
      <View style={styles.ContainerInput}>
                    <Text className="font-montserratRegular mt-14">
                        Email
                    </Text>
                    <StyledTextInput Iconname="email" placeholder="Digite seu email..." ispassword={false} />


                    <Text style={styles.LabelSenha} className="font-montserratRegular">
                        Senha
                    </Text>
                    <StyledTextInput Iconname="lock" placeholder="Digite sua senha..." ispassword={true} />

                    <Acessar tipo="Acessar"/>

                    <View style={{flexDirection: "row",justifyContent: "center", alignItems: "flex-end",flex:1, marginBottom: 50, width: 160,alignSelf: "center"}}>
                  
                        <TouchableOpacity>
                        <Text className="text-base text-[#0097E2] font-montserratRegular">
                            Politica de privacidade
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>
    </View>
  );
}


