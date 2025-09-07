
import { Card, ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import { styles } from "../styles/styles";
import "../../global.css";
import { useCustomFonts } from "@/hooks/useFonts";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView } from "react-native";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DataPickerSelect from '@/components/DataPickerSelect';
import CardHorasTrabalhadas from '@/components/CardHorasTrabalhadas';
import StatisticDaySelect from '@/components/StatisticDaySelect';
export default function statistics() : React.JSX.Element  {
    const [selectedDate, setSelectedDate] = useState("18/12/2024");
    return (
    <View className='m-3 flex-1 gap-2'>
      <DataPickerSelect/>
      <Text className='font-montserratRegular text-xl'>Suas Estatísticas</Text>
      <View className='flex-row'>
        <CardHorasTrabalhadas/>
        <CardHorasTrabalhadas/>
      </View>
      <View className='flex-row'>
        <CardHorasTrabalhadas/>
        <CardHorasTrabalhadas/>
      </View>
      <Text className='font-montserratRegular text-xl'>Dia a ser visualizado</Text>
      <StatisticDaySelect/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },

  header: { backgroundColor: "#00aaff", padding: 16 },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "bold" },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: { fontWeight: "bold", fontSize: 14, marginBottom: 8 },
  cardSubtitle: { color: "#333" },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },

  sectionTitle: { marginLeft: 16, marginTop: 8, fontWeight: "bold", fontSize: 15 },

  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" },
  statCard: {
    backgroundColor: "#fff",
    width: "42%",
    padding: 16,
    margin: 8,
    borderRadius: 12,
    alignItems: "center",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  statLabel: { marginTop: 6, fontSize: 13, textAlign: "center" },
  statValue: { fontWeight: "bold", fontSize: 16, marginTop: 4 },

  dayCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  arrowBtn: { padding: 6 },
  dayInfo: { alignItems: "center" },
  dayText: { fontWeight: "bold", fontSize: 15 },
  dateText: { color: "#333", marginBottom: 4 },
  smallText: { fontSize: 12, color: "#666" },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  centerBtn: {
    backgroundColor: "#00aaff",
    padding: 12,
    borderRadius: 40,
    marginTop: -20,
  },
});
