import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import styles from '../styles/NewpasswordStyle'; 
import { useNavigationBar } from '../context/NavigationContext';

export default function NewPassword({ navigation, route }) {
  const [newPassword, setNewPassword] = useState('');
  const { verificationCode } = route.params; 
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


  const handleSetNewPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/newpassword', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: verificationCode,
          newPassword: newPassword,
        }),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        Alert.alert("Succès", "Votre mot de passe a été réinitialisé avec succès.");
        navigation.navigate('Login'); 
      } else {
        Alert.alert("Erreur", data.message || "Une erreur est survenue lors de la réinitialisation du mot de passe.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Impossible de communiquer avec le serveur pour réinitialiser le mot de passe.");
    }
  };
  

  return (
    <View style={styles.container}>
        <Text style={styles.connect}>Mot de passe oublié?</Text>
        <Text style={styles.connectYou}>Définissez votre nouveau mot de passe pour vous connecter à votre compte !</Text>
        <View>
            <Text aria-label="Mot de Passe" style={styles.label}>Entrez un nouveau mot de passe</Text>
            <Image source={require('../cadenas.png')} style={styles.imgInput}/>
            <TextInput
            style={styles.formInput}
            onChangeText={setNewPassword}
            value={newPassword}
            secureTextEntry
            placeholder="................"
            />
        </View>
      <TouchableOpacity style={styles.formButton} onPress={handleSetNewPassword}>
        <Text style={styles.textButton}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
}