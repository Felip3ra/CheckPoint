import Mapa from "components/maps";
import React from "react";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Mapa />
    </SafeAreaView>
  );
}
