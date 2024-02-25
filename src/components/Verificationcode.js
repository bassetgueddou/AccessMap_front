import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import styles from '../styles/VerificationcodeStyle';

export default function VerificationCode({ navigation }) {
  const [code, setCode] = useState('');

  const handleVerifyCode = async () => {
    if (code.length !== 6) {
      Alert.alert("Erreur", "Le code de vérification doit contenir 6 chiffres.");
      return;}
    try {
      const response = await fetch('http://localhost:5000/api/users/verifycode', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        navigation.navigate('NewPassword', { verificationCode: code }); 
      } else {
        Alert.alert("Erreur", data.message || "Le code de vérification est incorrect ou a expiré.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Un problème est survenu lors de la vérification du code.");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.connect}>Mot de passe oublié?</Text>
      <Text style={styles.connectYou}>Nous avons envoyé un e-mail à votre compte de messagerie avec un code de vérification !</Text>
      <View>
        <Text aria-label="Mot de Passe" style={styles.label}>Code de vérification</Text>
        <Image source={require('../../assets/cadenas.png')} style={styles.imgInput}/>
        <TextInput
          style={styles.formInput}
          onChangeText={setCode}
          value={code}
          keyboardType="number-pad"
          placeholder="EX: 123456"
        />
      </View>
      <TouchableOpacity style={styles.formButton} onPress={handleVerifyCode}>
        <Text style={styles.textButton}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
}