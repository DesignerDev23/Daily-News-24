// CategoriesScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const CategoriesScreen = ({ navigation }) => {
  const handleAviationPress = () => {
    navigation.navigate('Aviation'); // Navigate to Aviation screen
  };

  const handleBusinessPress = () => {
    navigation.navigate('Business'); // Navigate to Aviation screen
  };

  return (
    <View style={localStyles.container}>
      {/* Manual container for Aviation category */}
      <TouchableOpacity onPress={handleAviationPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="compass" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Aviation</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBusinessPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="compass" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Business</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    paddingTop: 90,
    justifyContent: 'space-between',
  },
  categoryItem: {
    flexBasis: '18%', // Adjust as needed based on your design
    aspectRatio: 1, // This ensures the width and height are the same
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff', // Change the background color as needed
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1, // For Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    // marginBottom: 12,
    height: 32,
    position: 'absolute',
    top: 10,
  },
  categoryText: {
    fontSize: 14, // Adjust as needed
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    top: 21,
  },
});

export default CategoriesScreen;
