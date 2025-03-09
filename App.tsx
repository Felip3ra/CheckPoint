import React from "react";

import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import Routes from "./pages/routes";
import './global.css';
import Login from "pages/Login";
import Cadastrar from "pages/Cadastrar";

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