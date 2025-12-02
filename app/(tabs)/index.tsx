import React, { useCallback, useRef, useState } from "react";
import { Dimensions, FlatList, ListRenderItem, SafeAreaView, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { useSharedValue, withSpring } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import CardAtual from "@/components/CardAtual";
import CardHorasTrabalhadas from "@/components/CardHorasTrabalhadas";
import RegistroPonto from "@/components/RegistroPonto";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useAuth } from "@/hooks/AuthContext";
import { listarPontosHoje, PontoUIModel } from "@/services/pontoService";
import { homeStyles } from "@/styles/homeStyles";
import { theme } from "@/styles/theme";

interface Card {
    id: string;
    component: JSX.Element;
}

function Home(): React.JSX.Element {
    const { user } = useAuth();
    const [pontos, setPontos] = useState<PontoUIModel[]>([]);
    const [loadingPoints, setLoadingPoints] = useState<boolean>(true);

    const progress = useSharedValue<number>(0);
    const ref = useRef<ICarouselInstance>(null);

    const cards: Card[][] = [
        [
            { id: "1", component: <CardAtual /> },
            { id: "2", component: <CardHorasTrabalhadas /> },
        ],
        [
            { id: "3", component: <CardAtual /> },
            { id: "4", component: <CardHorasTrabalhadas /> },
        ],
    ];

    const larguraTela = Dimensions.get("window").width;

    const handleCarouselChange = (index: number): void => {
        progress.value = withSpring(index);
    };

    const onPressPagination = (index: number): void => {
        ref.current?.scrollTo({ index, animated: true });
    };

    const fetchPontos = useCallback(async (): Promise<void> => {
        if (!user?.id) return;
        try {
            setLoadingPoints(true);
            const pontosFormatados = await listarPontosHoje(user.id);
            setPontos(pontosFormatados);
        } catch (error) {
            console.error("Erro ao buscar ponto:", error);
        } finally {
            setLoadingPoints(false);
        }
    }, [user?.id]);

    useFocusEffect(
        useCallback(() => {
            fetchPontos();
        }, [fetchPontos])
    );

    const hoje = new Date();
    const dataExtenso = hoje.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const renderPonto: ListRenderItem<PontoUIModel> = ({ item }) => (
        <RegistroPonto ponto={item.ponto} horario={item.horario} />
    );

    return (
        <SafeAreaView style={homeStyles.screen}>
            <View style={homeStyles.header}>
                <Text style={homeStyles.date}>{dataExtenso}</Text>
                <View style={homeStyles.headerRow}>
                    <Text style={homeStyles.hello}>Olá, {user?.nome || ""}</Text>
                    <MaterialCommunityIcons name="bell-outline" size={25} color={theme.colors.background} />
                </View>

                <View style={homeStyles.cardsWrapper}>
                    <Carousel
                        loop={false}
                        data={cards}
                        width={larguraTela}
                        ref={ref}
                        height={200}
                        snapEnabled
                        pagingEnabled
                        mode="parallax"
                        modeConfig={{
                            parallaxScrollingScale: 0.95,
                            parallaxScrollingOffset: 5,
                        }}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
                                {item.map((card) => (
                                    <View key={card.id} style={{ width: larguraTela * 0.5, marginRight: 10 }}>
                                        {card.component}
                                    </View>
                                ))}
                            </View>
                        )}
                        onSnapToItem={handleCarouselChange}
                    />

                    <Pagination.Basic
                        progress={progress}
                        data={cards}
                        size={20}
                        dotStyle={{
                            borderRadius: 100,
                            backgroundColor: "#f1f1f1",
                            width: 10,
                            height: 10,
                        }}
                        activeDotStyle={{
                            borderRadius: 100,
                            backgroundColor: theme.colors.primary,
                            width: 10,
                            height: 10,
                        }}
                        containerStyle={homeStyles.pagination}
                        horizontal
                        onPress={onPressPagination}
                    />
                </View>
            </View>

            <View style={homeStyles.listContainer}>
                {loadingPoints ? (
                    <LoadingOverlay label="Carregando pontos..." fullScreen={false} />
                ) : (
                    <FlatList
                        data={pontos}
                        keyExtractor={(item, index) => `${item.ponto}-${index}`}
                        renderItem={renderPonto}
                        ListEmptyComponent={<Text style={homeStyles.empty}>Nenhum ponto registrado.</Text>}
                        contentContainerStyle={{ paddingVertical: 8 }}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

export default Home;
