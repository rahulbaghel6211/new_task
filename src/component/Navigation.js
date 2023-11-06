import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import LoginScreen from "../Screen/LoginScreen";
import HomeScreen from "../Screen/HomeScreen";
import TicketScreen from "../Screen/TicketScreen";
import MobileScreen from "../Screen/MobileScreen";
import OtpScreen from "../Screen/OtpScreen";
import CalendarScreen from "../Screen/Calander";
import BusTicketScreen from "../Screen/BusScreen";
import Boarding from "../Screen/Boarding";
import DeatilsScreen from "../Screen/Details";
import ConfirmDetailsScreen from "../Screen/ConfirmDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Ticket"
      component={TicketScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="filetext1" size={size} color={color} />
        ),
      }}
    />
     <Tab.Screen
      name="Help"
      component={TicketScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="questioncircleo" size={size} color={color} />
        ),
      }}
    />
     <Tab.Screen
      name="Account"
      component={TicketScreen}
      options={{
        //headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="User"
          component={HomeTab} // Use the HomeTab component as a screen
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mobile"
          component={MobileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Bus Seats"
          component={BusTicketScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Boarding"
          component={Boarding}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Details"
          component={DeatilsScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ConfirmDetails"
          component={ConfirmDetailsScreen}
          options={{ headerShown: false }}
        />
      <Stack.Screen
  name="Select Date of Journey"
  component={CalendarScreen}
  options={{
    headerStyle: {
      backgroundColor: '#0f214c', // Background color set to red
    },
    headerTitleStyle: {
      color: 'white', // Text color set to white
    },
    headerTintColor: 'white', // Back button color set to white
  }}
/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
