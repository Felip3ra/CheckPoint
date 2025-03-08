import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, ProgressBar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";

export default function CardAtual() {
    return (
        <View style={styles.containerCard}>
            {/* Card 1 - Progresso */}
            <Card style={styles.card}>
                <Card.Content>
                    <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold',fontFamily: 'Montserrat-Regular'}}>Seu dia hoje</Text>
                    <MaterialCommunityIcons
                        name="reload"
                        size={20}
                        color='black'
                    />
                    <View style={styles.LabelCard}>
                        <View style={{alignItems: "center"}}>
                            <Text style={{fontSize: 14, fontWeight: 'bold',fontFamily: 'Montserrat-Regular'}}>
                                Progresso
                            </Text>
                            <Text>
                                0%
                            </Text>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <Text>
                                Saída Prevista
                            </Text>
                            <Text>
                                16:00H
                            </Text>
                        </View>
                        
                    </View>
                    <ProgressBar progress={0.0} color='#6200ee' style={styles.ProgressBar}/>
                    </View>
                </Card.Content>
            </Card>


        </View>
    );
}


