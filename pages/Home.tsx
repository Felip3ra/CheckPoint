import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";


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
                <Text>{dataExtenso}</Text>
            </View>
            <View style={styles.ContainerLista}>


            

            </View>
        </SafeAreaView>

    );
}

export default Home