<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
=======
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Animated, FlatList, ListRenderItem } from "react-native";
>>>>>>> 4b44011caa73371b359958c8f98baddd67ba0930
import { styles } from "../../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardAtual from "../../components/CardAtual";
import CardHorasTrabalhadas from "../../components/CardHorasTrabalhadas";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import { useSharedValue, withSpring } from "react-native-reanimated";
import RegistroPonto from "@/components/RegistroPonto";
import { useAuth } from "@/hooks/AuthContext";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

// Define a tipagem para o ponto
interface Ponto {
    ponto: string;
    horario: string;
}

<<<<<<< HEAD
function Home(): React.JSX.Element {
    const { user } = useAuth(); // ✅ Pega o usuário logado
    const [ponto, setPonto] = useState<Ponto[]>([]);

    useFocusEffect(
  useCallback(() => {
    const fetchPonto = async () => {
      if (!user) return;
      try {
        const API_URL = `http://192.168.15.116:3000/pontos/listaPontos`;
        const response = await axios.post(API_URL, { PON_CD_USUARIO: user.id });
        const pontosFormatados = response.data.map((p: any) => ({
        ponto: p.PON_NM_PONTO,
        horario: new Date(p.PON_DT_PONTO).toLocaleTimeString("pt-BR"),
      }));
      setPonto(pontosFormatados);
      } catch (error) {
        console.error("Erro ao buscar ponto:", error);
      }
    };

    fetchPonto();
  }, [user?.id])
);

    const progress = useSharedValue<number>(0);
    const ref = React.useRef<ICarouselInstance>(null);
    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({ index, animated: true });
    };

    const cards = [
=======
// Define a tipagem para os cartões
interface Card {
    id: string;
    component: JSX.Element;
}

function Home(): React.JSX.Element {
    const { user } = useAuth();
    const [id, setId] = useState<number | null>(user?.id || null);
    const [ponto, setPonto] = useState<Ponto[]>([]);

    useEffect(() => {
        const fetchPonto = async (): Promise<void> => {
            try {
                if (!id) return; // Certifique-se de que o ID está definido
                const API_URL = `http://192.168.15.116:3000/api/GetPoint/${id}`;
                const response = await axios.get<{ pontos: Ponto[] }>(API_URL); // Tipagem da resposta
                setPonto(response.data.pontos);
            } catch (error) {
                console.error("Erro ao buscar ponto:", error);
            }
        };

        fetchPonto();
    }, [id]); // Adicione `id` como dependência para reexecutar quando o ID mudar

    console.log(user?.email);

    const progress = useSharedValue<number>(0);
    const ref = React.useRef<ICarouselInstance>(null);

    const onPressPagination = (index: number): void => {
        ref.current?.scrollTo({
            index,
            animated: true,
        });
    };

    const cards: Card[][] = [
>>>>>>> 4b44011caa73371b359958c8f98baddd67ba0930
        [{ id: "1", component: <CardAtual /> }, { id: "2", component: <CardHorasTrabalhadas /> }],
        [{ id: "3", component: <CardAtual /> }, { id: "4", component: <CardHorasTrabalhadas /> }]
    ];

    const [paginaAtiva, setPaginaAtiva] = useState<number>(0);
    const larguraTela = Dimensions.get("window").width;

    const handleCarouselChange = (index: number) => {
        progress.value = withSpring(index);
        setPaginaAtiva(index);


    

    const hoje = new Date();
    const dataExtenso = hoje.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

<<<<<<< HEAD
=======
    const renderPonto: ListRenderItem<Ponto> = ({ item }) => (
        <RegistroPonto ponto={item.ponto} horario={item.horario} />
    );

>>>>>>> 4b44011caa73371b359958c8f98baddd67ba0930
    return (
        <SafeAreaView style={styles.ContainerPrincipalHome}>
            <View style={styles.ContainerSuperiorHome}>
                <Text style={styles.LabelData}>{dataExtenso}</Text>
                <View style={styles.ContainerLabelRing}>
<<<<<<< HEAD
                    <Text style={styles.LabelNome}>Olá, {user?.nome || ""}</Text>
                    <MaterialCommunityIcons name="bell-outline" size={25} />
=======
                    <Text style={styles.LabelNome}>Olá, {user?.nome}</Text>
                    <MaterialCommunityIcons
                        name="bell-outline"
                        size={25}
                    />
>>>>>>> 4b44011caa73371b359958c8f98baddd67ba0930
                </View>

                <Carousel
                    loop={false}
                    data={cards}
                    width={larguraTela}
                    ref={ref}
                    height={200}
<<<<<<< HEAD
                    snapEnabled
                    pagingEnabled
=======
                    snapEnabled={true}
                    pagingEnabled={true}
>>>>>>> 4b44011caa73371b359958c8f98baddd67ba0930
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
<<<<<<< HEAD

=======
>>>>>>> 4b44011caa73371b359958c8f98baddd67ba0930
                <Pagination.Basic
                    progress={progress}
                    data={cards}
                    size={20}
                    dotStyle={{
                        borderRadius: 100,
<<<<<<< HEAD
                        backgroundColor: "#f1f1f1",
                        width: 10,
                        height: 10,
=======
                        backgroundColor: "#f1f1f1", // Cor padrão
                        width: 10,
                        height: 10,
                    }}
                    activeDotStyle={{
                        borderRadius: 100,
                        backgroundColor: "#3b5998", // Cor ativa
                        width: 10,
                        height: 10,
                    }}
                    containerStyle={{
                        gap: 5,
                        marginBottom: 10,
>>>>>>> 4b44011caa73371b359958c8f98baddd67ba0930
                    }}
                    activeDotStyle={{
                        borderRadius: 100,
                        backgroundColor: "#3b5998",
                        width: 10,
                        height: 10,
                    }}
                    containerStyle={{ gap: 5, marginBottom: 10 }}
                    horizontal
                    onPress={onPressPagination}
                />
            </View>

            <View style={styles.ContainerLista}>
                <FlatList
                    data={ponto}
                    keyExtractor={(item, index) => index.toString()}
<<<<<<< HEAD
                    renderItem={({ item }) => <RegistroPonto ponto={item.ponto} horario={item.horario} />}
=======
                    renderItem={renderPonto}
>>>>>>> 4b44011caa73371b359958c8f98baddd67ba0930
                    ListEmptyComponent={() => (
                        <Text className="mt-5 size-5">Nenhum ponto registrado.</Text>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;
