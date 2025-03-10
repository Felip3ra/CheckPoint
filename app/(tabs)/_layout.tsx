import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonPonto from "components/ButtonPonto";
export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {

                    paddingVertical: 10,

                },
                tabBarActiveTintColor: '#0097E2',
                
            }}
        >
            
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="request"
                options={{
                    title: "Solicitacoes",

                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="hand-wave-outline" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
           name="Ponto"
           options={{
            title: '',
            tabBarIcon: ({focused, size}) => (
                <ButtonPonto size={size} focused={focused}/>
            )
           }}
           /> 
            <Tabs.Screen
                name="statistics"
                options={{

                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="chart-box-plus-outline" size={size} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{

                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

