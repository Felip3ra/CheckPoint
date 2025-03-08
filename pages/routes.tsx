import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonPonto from "../components/ButtonPonto";
import Solicitacao from "./Solicitacao";
const Tab = createBottomTabNavigator();


export default function Routes(): React.JSX.Element{
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    
                    paddingBottom: 5,
                    paddingTop: 5,
                    
                },
                tabBarActiveTintColor: '#0097E2',
                
            }}
        >
           <Tab.Screen
           name="Home"
           component={Home}
           options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="home" size={size} color={color}/>
            )
           }}
           />
           <Tab.Screen
           name="Solicitacao"
           component={Solicitacao}
           options={{
            tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="hand-wave-outline" size={size} color={color}/>
            )
           }}
           />
           <Tab.Screen
           name="Ponto"
           component={Home}
           options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, size}) => (
                <ButtonPonto size={size} focused={focused}/>
            )
           }}
           />  
           <Tab.Screen
           name="Estatistica"
           component={Home}
           options={{
            tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="chart-box-plus-outline" size={size} color={color}/>
            )
           }}
           /> 
           <Tab.Screen
           name="Perfil"
           component={Home}
           options={{
            tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="account" size={size} color={color}/>
            )
           }}
           />  
        </Tab.Navigator>
    );
}
