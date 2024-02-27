import React, { useState, useContext } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Pour stocker/lire l'ID utilisateur
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Composant pour la sélection de la localisation sur la carte
function LocationPicker({ onLocationSelected }) {
  useMapEvents({
    click(e) {
      onLocationSelected(e.latlng);
    },
  });

  return null;
}

const Signaler = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  // Omit image handling for simplicity, add it according to your project's needs

  const handleSubmit = async () => {
    const userId = await AsyncStorage.getItem('userId'); // Assurez-vous que l'ID utilisateur est stocké lors de la connexion
    if (!title || !description || !location) {
      Alert.alert("Erreur", "Tous les champs sont obligatoires.");
      return;
    }

    // Création de l'objet FormData pour l'envoi
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', JSON.stringify({
      type: 'Point',
      coordinates: [location.lng, location.lat], // Notez l'ordre lng, lat pour GeoJSON
    }));
    // Omettre la gestion de l'image pour simplifier
    formData.append('createdBy', userId);

    try {
      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseData = await response.json();
      if (!response.ok) throw new Error(responseData.message);
      Alert.alert("Succès", "Le signalement a été envoyé avec succès.");
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Un problème est survenu lors de l'envoi du signalement.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titre:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Description:</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} multiline />
      <View style={styles.mapContainer}>
        <MapContainer center={[45.4215, -75.6972]} zoom={12} style={styles.map}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationPicker onLocationSelected={setLocation} />
        </MapContainer>
      </View>
      <Button title="Signaler" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  mapContainer: {
    height: 300,
    width: '100%',
    marginBottom: 20,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});

export default Signaler;