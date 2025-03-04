import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../styles/styles";

export default function CardHorasTrabalhadas(): React.JSX.Element {
    return(
        <View style={styles.containerCard}>
            <Card>
                <Card.Content>
                    <View style={{justifyContent: 'space-between', alignItems: 'center', height: 70}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                        Horas Trabalhadas
                    </Text>
                    <Icon
                    name="lightning-bolt"
                    size={25}
                    />
                    <Text style={{fontSize: 14, fontWeight: 'bold', fontFamily: 'Montserrat-Regular'}}>
                        00:00H
                    </Text>
                    </View>
                    
                </Card.Content>
            </Card>
        </View>
    );
}