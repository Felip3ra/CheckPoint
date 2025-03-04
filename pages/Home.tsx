import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import CardAtual from "../components/CardAtual";
import CardHorasTrabalhadas from "../components/CardHorasTrabalhadas";

function Home(): React.JSX.Element {
    

    let hoje = new Date();

    let dataExtenso = hoje.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    return (
        <SafeAreaView style={styles.ContainerPrincipalHome}>
            <View style={styles.ContainerSuperiorHome}>
                <Text style={styles.LabelData}>{dataExtenso}</Text>
                <View style={styles.ContainerLabelRing}>
                    <Text style={styles.LabelNome}>Olá, Felipe Santana</Text>
                    <Icon
                    name="bell-outline"
                    size={25}
                    />
                </View>
                <CardAtual/>
                <CardHorasTrabalhadas/>
            </View>
            <View style={styles.ContainerLista}>


            

            </View>
        </SafeAreaView>

    );
}

export default Home