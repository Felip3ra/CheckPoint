import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from "react-native";
import Item from "../components/SolicitacaoItem";


const ajustes = [
    { id: "1", titulo: "Ajuste de Ponto", status: "Pendente", motivo: "Consulta médica." },
    { id: "2", titulo: "Ajuste de Ponto", status: "Reprovado", motivo: "Esqueci o crachá." },
    { id: "3", titulo: "Ajuste de Ponto", status: "Aprovado", motivo: "Elevador quebrado." },
  ];
function Solicitacao(): React.JSX.Element {
    return(
        <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 20,}}>
                Suas Solicitacoes
            </Text>
            <FlatList
        data={ajustes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            titulo={item.titulo}
            status={item.status}
            motivo={item.motivo}
            onPress={() => console.log("Clicou em", item.titulo)}
          />
        )}
      />

            
        </View>
    );
}

export default Solicitacao