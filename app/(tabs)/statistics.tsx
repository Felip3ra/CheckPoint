import Mapa from "components/maps";
import React from "react";
import { SafeAreaView,View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{width: 200, height: 200}}>
      <Mapa />
      </View>
    </SafeAreaView>
  );
}
