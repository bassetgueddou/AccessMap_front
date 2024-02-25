import React, { useState } from 'react';
import { StatusBar, Text, TextInput, View, TouchableOpacity, Image, Picker } from 'react-native';
import arobaseImage from '../../assets/arobase.png';
import cadenasImage from '../../assets/cadenas.png';
import styles from '../styles/RegisterStyles';

export default function Register({ navigation }) {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [handicapType, setHandicapType] = useState('');

  const handleRegister = () => {
    fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: nom,
        email,
        password,
        handicapType, // Ajout du champ handicapType dans la requête
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      navigation.navigate('Home');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.connect}>S'inscrire</Text>
      <Text style={styles.connectYou}>Créez un compte pour accéder à{"\n"}toutes les fonctionnalités AccessMap !</Text>
      <View style={styles.viewNom}>
        <Text style={styles.label}>Nom</Text>
        <Image source={arobaseImage} style={styles.imgInput}/>
        <TextInput
          style={styles.formInput}
          autoCapitalize="words"
          placeholder="Ex: Ramirez"
          onChangeText={setNom}
          value={nom}
        />
      </View>
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
      <View style={styles.viewPassword}>
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
      <View style={styles.picker}>
        <Text style={styles.labelHandicap}>Type de Handicap</Text>
        <Picker
          selectedValue={handicapType}
          onValueChange={(itemValue, itemIndex) => setHandicapType(itemValue)}
          style={{ height: 50, width: 350 }}>
          <Picker.Item label="Aucun" value="" />
          <Picker.Item label="Moteur" value="moteur" />
          <Picker.Item label="Visuel" value="visuel" />
          <Picker.Item label="Auditif" value="auditif" />
          <Picker.Item label="Cognitif" value="cognitif" />
          <Picker.Item label="Autre" value="autre" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.formButton} onPress={handleRegister}>
        <Text style={styles.textButton}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Text>Vous avez déjà un compte? </Text>
        <Text style={styles.login} onPress={() => navigation.navigate("WelcomePage")}>Se connecter</Text>
      </View>
    </View>
  );
}