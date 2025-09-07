import React, { useEffect, useState } from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
export default function StatisticDaySelect(): React.JSX.Element {
    const [selectedDate, setSelectedDate] = useState("18/12/2024");
    
    return(
        <View className="flex-row items-center justify-between m-4 bg-white rounded-xl p-3" style={{shadowOpacity: 0.1,elevation: 2}}>
                <TouchableOpacity  className="p-1.5">
                  <Ionicons name="chevron-back" size={22} color="#007bff" />
                </TouchableOpacity>
        
                <View className="items-center">
                  <Text className="font-montserratBold text-base">QUA</Text>
                  <Text  className="font-montserratBold text-base">{selectedDate}</Text>
                  <Text className="font-montserratMedium text-base">Trabalhado: 00:00H</Text>
                  
                </View>
        
                <TouchableOpacity className="p-1.5">
                  <Ionicons name="chevron-forward" size={22} color="#007bff" />
                </TouchableOpacity>
              </View>
    );
}

