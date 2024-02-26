import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const reports = [
    {
      id: '1',
      title: 'Ascenseur en panne à Gare de Lyon - Métro 14',
      profile: 'Profil 1234',
      accessibility: '1/5',
    },
 
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Rapport</Text>
        <Text style={styles.nameText}>Rapport</Text>
      </View>
      <Button
        title="Commencez à utiliser AccessMap"
        onPress={() => {}}
        color="#6200ee"
      />
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>{item.title}</Title>
              <Paragraph>{item.profile}</Paragraph>
              <Paragraph>Niveau d'accessibilité {item.accessibility}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
      <View style={styles.navBar}>
        <Icon name="home-outline" size={30} color="#6200ee" />
        <Icon name="alert-circle-outline" size={30} color="#6200ee" />
        <Icon name="file-document-outline" size={30} color="#6200ee" />
        <Icon name="account-outline" size={30} color="#6200ee" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 18,
    color: '#6200ee',
  },
  card: {
    margin: 10,
    borderRadius: 8,
  },
  cardTitle: {
    color: '#6200ee',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default HomeScreen;
