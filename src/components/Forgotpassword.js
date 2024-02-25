import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import styles from '../styles/ForgotpasswordStyle';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSendCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/forgotpassword', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
  
      const data = await response.json();
    
      if (response.ok) {
        navigation.navigate('VerificationCodeScreen');
      } else {
        Alert.alert("Erreur", data.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Impossible de contacter le serveur");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.connect}>Mot de passe oublié?</Text>
      <Text style={styles.connectYou}>Tapez votre email afin d'obtenir un code de vérification !</Text>
      <View>
        <Text aria-label="Email" style={styles.label}>Email</Text>
        <Image source={require('../../assets/arobase.png')} style={styles.imgInput}/>
        <TextInput
          style={styles.formInput}
          keyboardType="email-address" 
          autoCapitalize="none"
          autoComplete='email'
          placeholder="Ex: condiem@example.com"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <TouchableOpacity style={styles.formButton} onPress={handleSendCode}>
        <Text style={styles.textButton} onPress={() => navigation.navigate('VerificationCodeScreen')}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}
