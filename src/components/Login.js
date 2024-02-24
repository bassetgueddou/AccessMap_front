import React, { useState } from 'react';
import { StatusBar, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/LoginStyles';
import arobaseImage from '../../assets/arobase.png';
import cadenasImage from '../../assets/cadenas.png';
import googleImage from '../../assets/google.png';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
       
        navigation.navigate('Profil'); 
      } else {
      
        Alert.alert('Erreur', data.message || 'Une erreur est survenue lors de la tentative de connexion.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Erreur', 'Impossible de se connecter au serveur.');
    }
  };
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.connect}>Se connecter</Text>
      <Text style={styles.connectYou}>Connectez-vous maintenant pour{"\n"}accéder votre profil !</Text>
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
      <Text style={styles.forgot}>Mot de passe oublié?</Text>
      <TouchableOpacity style={styles.formButton} onPress={handleLogin}>
        <Text style={styles.textButton}>Se connecter</Text>
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.marginBottom}>
        _____________________________________________
      </Text>
      <View style={styles.flexRow}>
        <Text>Vous n'avez pas de compte ? </Text>
        <Text style={styles.login} onPress={() => navigation.navigate("Register")}>S’inscrire</Text>
      </View>
    </View>
  );
}