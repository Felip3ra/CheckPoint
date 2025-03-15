import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Mapa = () => {
  const [location, setLocation] = useState<null | Location.LocationObject>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);
    setErrorMsg(null);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permissão de localização negada.");
      setLoading(false);
      return;
    }

    try {
      let newLocation = await Location.getCurrentPositionAsync({});
      setLocation(newLocation);

      // 📍 Obtém o endereço a partir da localização
      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        let { street, streetNumber, city, region, postalCode, country } = reverseGeocode[0];

        // 🏡 Formata o endereço
        let fullAddress = `${street || "Rua desconhecida"} ${streetNumber || ""}, ${city || ""} - ${region || ""}, ${postalCode || "CEP não encontrado"}, ${country || ""}`;
        setAddress(fullAddress);
      } else {
        setAddress("Endereço não encontrado");
      }
    } catch (error) {
      setErrorMsg("Erro ao obter localização.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
            : undefined
        }
        showsUserLocation
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Minha Localização"
          />
        )}
      </MapView>

      {/* 📌 Exibir informações de localização */}
      <View style={{ position: "absolute", top: 40, left: 10, backgroundColor: "white", padding: 10, borderRadius: 5 }}>
        {location ? (
          <>
            <Text>Latitude: {location.coords.latitude.toFixed(6)}</Text>
            <Text>Longitude: {location.coords.longitude.toFixed(6)}</Text>
            {address ? <Text>Endereço: {address}</Text> : <ActivityIndicator size="small" color="blue" />}
          </>
        ) : (
          <Text>Pressione o botão para capturar a localização</Text>
        )}
      </View>

      {/* 📍 Botão para capturar a localização */}
      <TouchableOpacity
        onPress={getLocation}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          marginLeft: -75,
          backgroundColor: "#007AFF",
          padding: 12,
          borderRadius: 10,
          alignItems: "center",
          width: 150,
        }}
      >
        {loading ? <ActivityIndicator color="white" /> : <Text style={{ color: "white", fontWeight: "bold" }}>Capturar Localização</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Mapa;
