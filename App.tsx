import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./pages/routes";
import './global.css';
import Login from "pages/Login";

function App(): React.JSX.Element {
  return(
    
    //<NavigationContainer>
      //<Routes/>
    //</NavigationContainer>
    <Login/>
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