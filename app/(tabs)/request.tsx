import React from "react";
import { SafeAreaView, View, Text, FlatList, ListRenderItem } from "react-native";
import Item from "@/components/SolicitacaoItem";
import ButtonNewRequest from "@/components/ButtonNewRequest";

// Define a interface para os ajustes
interface Ajuste {
    id: string;
    titulo: string;
    status: string;
    motivo: string;
}

// Dados de exemplo tipados
const ajustes: Ajuste[] = [
    { id: "1", titulo: "Ajuste de Ponto", status: "Pendente", motivo: "Consulta médica." },
    { id: "2", titulo: "Ajuste de Ponto", status: "Reprovado", motivo: "Esqueci o crachá." },
    { id: "3", titulo: "Ajuste de Ponto", status: "Aprovado", motivo: "Elevador quebrado." },
    { id: "4", titulo: "Ajuste de Ponto", status: "Pendente", motivo: "Consulta médica." },
    { id: "5", titulo: "Ajuste de Ponto", status: "Reprovado", motivo: "Esqueci o crachá." },
    { id: "6", titulo: "Ajuste de Ponto", status: "Aprovado", motivo: "Elevador quebrado." },
];

function Request(): React.JSX.Element {
    // Função para renderizar os itens da lista
    const renderItem: ListRenderItem<Ajuste> = ({ item }) => (
        <Item
            titulo={item.titulo}
            status={item.status}
            motivo={item.motivo}
            onPress={() => console.log("Clicou em", item.titulo)}
        />
    );

    return (
        <View className="flex-1 bg-[#FBF7F4]">
            <View className="mx-3 flex-1 bg-[#FBF7F4]">
                <Text className="text-xl py-4 font-montserratRegular">Suas Solicitacões</Text>
                <FlatList
                    data={ajustes}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
                <ButtonNewRequest />
            </View>
        </View>
    );
}

export default Request;