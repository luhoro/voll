import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "react-native-vector-icons"

import Principal from "./Principal"
import Consultas from "./Consultas"

const Tab = createBottomTabNavigator()

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home" />,
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={Consultas}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="calendar" />,
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
