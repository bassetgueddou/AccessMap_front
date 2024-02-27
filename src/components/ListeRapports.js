import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ListeRapports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/reports')
      .then(response => response.json())
      .then(data => {
        setReports(data);
      })
      .catch(error => console.error('Erreur lors de la récupération des signalements:', error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {reports.map((report) => (
        <View key={report._id} style={styles.reportItem}>
          <Text style={styles.reportTitle}>{report.title}</Text>
          <Text>{report.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  reportItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  reportTitle: {
    fontWeight: 'bold',
  },

});

export default ListeRapports;