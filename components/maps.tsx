import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useAddressContext, Address } from "@/hooks/AddressContext";
import * as Location from "expo-location";
import "../global.css";
import { useCustomFonts } from "@/hooks/useFonts";
const Mapa = () => {
  const fontsLoaded = useCustomFonts();
  const [location, setLocation] = useState<null | Location.LocationObject>(null);
  const {setAddress} = useAddressContext();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(getLocation,60000)

    getLocation()
    return () => clearInterval(intervalo);
  },[])
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

        const fullAddress: Address = {
          street: street || "Rua desconhecida",
          streetNumber: streetNumber || "",
          city: city || "",
          region: region || "",
          postalCode: postalCode || "CEP não encontrado",
          country: country || "",
        };

        // Atualiza o contexto com o objeto estruturado
        setAddress(fullAddress);
      } else {
        setAddress(null);
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


      
     
    </View>
  );
};

export default Mapa;
