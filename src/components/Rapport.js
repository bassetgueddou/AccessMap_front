import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RapportMap from './RapportMap';
import ListeRapports from './ListeRapports';


const Rapport = () => {
  const [view, setView] = useState('map'); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signalements d'Anomalies</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Carte" onPress={() => setView('map')} />
        <Button title="Liste" onPress={() => setView('list')} />
      </View>
      {view === 'map' ? <RapportMap /> : <ListeRapports />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 22,
    margin: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default Rapport;