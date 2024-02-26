import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Home';
import Signaler from '../components/Signaler';
import Rapport from '../components/Rapport';
import Profil from '../components/Profil';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigationBar } from '../context/NavigationContext';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { isNavigationBarVisible } = useNavigationBar();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: isNavigationBarVisible ? 'flex' : 'none' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Signaler"
        component={Signaler}
        options={{
          tabBarLabel: "Signaler",
          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamation-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rapport"
        component={Rapport}
        options={{
          tabBarLabel: "Rapport",
          tabBarIcon: ({ color, size }) => (
            <Icon name="bar-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;