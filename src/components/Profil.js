import React from 'react';
import { View, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profil = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    
    Alert.alert('Déconnexion', 'Vous avez été déconnecté.');
    
    navigation.navigate('Login');
  };

  return (
    
    <View>
    
      
        <Text onPress={handleLogout}>Déconnexion</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Profil;
