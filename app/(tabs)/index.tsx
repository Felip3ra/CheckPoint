import React, { useState } from "react";
import { SafeAreaView, View, Text, Animated } from "react-native";
import { styles } from "../../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardAtual from "../../components/CardAtual";
import CardHorasTrabalhadas from "../../components/CardHorasTrabalhadas";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";

import {
    Extrapolation,
    interpolate,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
function Home(): React.JSX.Element {
    const progress = useSharedValue<number>(0);
    const ref = React.useRef<ICarouselInstance>(null);
    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({

            index,
            animated: true,
        });
    };
    const cards = [
        [{ id: "1", component: <CardAtual /> }, { id: "2", component: <CardHorasTrabalhadas /> }],
        [{ id: "3", component: <CardAtual /> }, { id: "4", component: <CardHorasTrabalhadas /> }]
    ];
    const [paginaAtiva, setPaginaAtiva] = useState(0);
    const larguraTela = Dimensions.get("window").width;
    const handleCarouselChange = (index: number) => {
        progress.value = withSpring(index); // Atualiza o progresso com animação
        setPaginaAtiva(index); // Atualiza a página ativa
    };
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
                    <MaterialCommunityIcons
                        name="bell-outline"
                        size={25}
                    />
                </View>
                <Carousel
                    loop={false}
                    data={cards}
                    width={larguraTela}
                    ref={ref}
                    height={200}
                    snapEnabled={true}
                    pagingEnabled={true}

                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.95,
                        parallaxScrollingOffset: 5,
                    }}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
                            {item.map((card) => (
                                <View key={card.id} style={{ width: larguraTela * 0.5, marginRight: 10, }}>
                                    {card.component}
                                </View>
                            ))}
                        </View>
                    )}
                    onSnapToItem={handleCarouselChange}
                />



                <Pagination.Basic
                    progress={progress}
                    data={cards} // Passando diretamente os dados dos cartões
                    size={20}
                    dotStyle={{
                        borderRadius: 100,
                        backgroundColor: interpolate(progress.value, [0, 1], ["#f1f1f1", "#3b5998"]) as any,
                    }}
                    activeDotStyle={{
                        borderRadius: 100,
                        overflow: "hidden",
                        backgroundColor: "#f1f1f1",
                    }}
                    containerStyle={{
                        gap: 5,
                        marginBottom: 10,
                    }}
                    horizontal
                    onPress={onPressPagination} // Função de navegação ao clicar no ponto
                />

            </View>
            <View style={styles.ContainerLista}>




            </View>
        </SafeAreaView>

    );
}

export default Home