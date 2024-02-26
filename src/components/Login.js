import React, { useState, useEffect } from 'react';
import { StatusBar, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import styles from '../styles/LoginStyles';
import arobaseImage from '../../assets/arobase.png';
import cadenasImage from '../../assets/cadenas.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigationBar } from '../context/NavigationContext';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setNavigationBarVisible } = useNavigationBar();

  useEffect(() => {
    
    const unsubscribeFocus = navigation.addListener('focus', () => {
      setNavigationBarVisible(false);
    });

    
    const unsubscribeBlur = navigation.addListener('blur', () => {
      setNavigationBarVisible(true);
    });

    return () => {
      
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('userToken', data.token);
        navigation.navigate('Home');
      } else {
        Alert.alert('Erreur', data.message || 'Une erreur est survenue lors de la tentative de connexion.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert("Erreur", "Un problème est survenu lors de la connexion.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.connect}>Se connecter</Text>
      <Text>Connectez-vous maintenant pour{"\n"}accéder votre profil !</Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <Image source={arobaseImage} style={styles.imgInput}/>
        <TextInput
          style={styles.formInput}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          placeholder="Ex: condiem@example.com"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View>
        <Text style={styles.emailLabel}>Mot de Passe</Text>
        <Image source={cadenasImage} style={styles.imgInput}/>
        <TextInput
          style={styles.formInput}
          secureTextEntry
          autoCapitalize="none"
          placeholder="................"
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.formButton} onPress={handleLogin}>
        <Text style={styles.textButton}>Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Text style={styles.login} onPress={() => navigation.navigate('ForgotPasswordScreen')}>Mot de passe oublié?</Text>
        <Text>Vous n'avez pas de compte ? </Text>
        <Text style={styles.login} onPress={() => navigation.navigate("Register")}>S’inscrire</Text>
      </View>
    </View>
  );
}