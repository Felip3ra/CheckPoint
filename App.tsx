import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles/styles";

function App(): React.JSX.Element {
  return(
    <View style={styles.Container}>
      <Image 
      source={require('./imgs/checkpoint.png')}
      style={styles.Logo}
      />
    </View>
  );
}

export default App;