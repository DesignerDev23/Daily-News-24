import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

const ContactUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
     <Text style={styles.title}>Corporate Address</Text>
      <Text style={styles.summary}>
      New Gandu Layout, Behind Trade Fair Ground, Zoo Road, Kano State, Nigeria.
      </Text>
      <Text style={styles.website}>
      Emails: dn24newsroom@gmail.com, ayrahmedia@gmail.com
      </Text>
      <Text style={styles.website}>
      Phone: +23480 800 80 220
      </Text>
 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 16,
  },
  line: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 56,
    marginTop: 16,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
    color: '#333',
  },
  summary: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 24,
    color: '#333',
  },
  image: {
    width: '100%',  // Adjust the width as needed
    height: 200,    // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 16,
  },
  map: {
    flex: 1,
    height: 200,  // Adjust the height as needed
    borderRadius: 50,
    marginBottom: 16,
  },
  website: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#333',
  },
});

export default ContactUsScreen;
