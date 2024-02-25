
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './AuthNavigator';
import HomeScreen from '../components/Home';
import Register from '../components/Register'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Auth" component={AuthNavigator} options={{
        tabBarLabel: "Se connecter",
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Register" component={Register} options={{
        tabBarLabel: "Register",
        tabBarIcon: ({ color, size }) => (
          <Icon name="Register" color={color} size={size} />
        ),
      }}/>


    </Tab.Navigator>
  );
};

export default AppNavigator;