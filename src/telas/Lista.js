import React from "react";
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Primeira from "./Primeira";
import Segunda from "./Segunda";





export default function Lista(){
const Tab = createBottomTabNavigator();
const route = useRoute()

   return <>
   <Tab.Navigator
   screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Primeira') {
        iconName = focused
          ? 'book-outline'
          : 'book-outline';
      } else if (route.name === 'Segunda') {
        iconName = focused ? 'clipboard-outline' : 'clipboard-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#77b885',
    tabBarInactiveTintColor: 'gray',
  })}
   >
        <Tab.Screen options={{headerShown: false}} name="Primeira" children={() => <Primeira/>} />
        <Tab.Screen options={{headerShown: false}} name="Segunda" children={() => <Segunda/>} />
    </Tab.Navigator>
    </>
}