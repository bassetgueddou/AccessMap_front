import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../components/Login';
import RegisterScreen from '../components/Register';
import ForgotPasswordScreen from '../components/Forgotpassword'
import VerificationCodeScreen from '../components/Verificationcode'
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerificationCodeScreen" component={VerificationCodeScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;