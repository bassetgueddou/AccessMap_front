import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationBarProvider } from './src/context/NavigationContext';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationBarProvider>
        <AppNavigator />
      </NavigationBarProvider>
    </NavigationContainer>
  );
}