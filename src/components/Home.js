import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleProfil = async () => {
        try {
            const response = await fetch('https://bdd3-2a02-8440-a129-acc5-5964-3481-6d3-ad2e.ngrok-free.app/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Supposons que data contienne un token que vous stockerez
                await AsyncStorage.setItem('userToken', data.token);
                navigation.navigate('/profile');
            } else {
                Alert.alert('Erreur', data.message || 'Une erreur est survenue lors de la tentative de connexion.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Je suis dans la page de profil</Text>
          <Image
              source={{
                  uri: "https://media.giphy.com/media/tJqyalvo9ahykfykAj/giphy.gif"
              }}
              style={{ width: 200, height: 200 }} // Ajustez selon vos besoins
          />
      </View>
  );
}