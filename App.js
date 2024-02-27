import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import { NavigationBarProvider } from './src/context/NavigationContext';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsAuthenticated(!!token);
    };

    checkAuthentication();
  }, []);


  if (isAuthenticated === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <NavigationBarProvider>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
      </NavigationBarProvider>
    </NavigationContainer>
  );
}