import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./pages/routes";

function App(): React.JSX.Element {
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

export default App;

/*

<View style={styles.Container}>
      <Image 
      source={require('./imgs/checkpoint.png')}
      style={styles.Logo}
      />
    </View>
*/