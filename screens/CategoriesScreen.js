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

  const handleElectionPress = () => {
    navigation.navigate('Election'); // Navigate to Aviation screen
  };

  const handleAfricaPress = () => {
    navigation.navigate('Africa'); // Navigate to Aviation screen
  };

  const handleBreakingPress = () => {
    navigation.navigate('Breaking'); // Navigate to Aviation screen
  };

  const handleCelebrityPress = () => {
    navigation.navigate('Celebrity'); // Navigate to Aviation screen
  };

  const handleCoverPress = () => {
    navigation.navigate('Cover'); // Navigate to Aviation screen
  };

  const handleCrimePress = () => {
    navigation.navigate('Crime'); // Navigate to Aviation screen
  };

  const handleCulturePress = () => {
    navigation.navigate('Culture'); // Navigate to Aviation screen
  };

  const handleAgriculturePress = () => {
    navigation.navigate('Agriculture'); // Navigate to Aviation screen
  };

  return (
    <View style={localStyles.container}>
      {/* Manual container for Aviation category */}
      <TouchableOpacity onPress={handleAviationPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="plane" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Aviation</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBusinessPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="briefcase" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Business</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleElectionPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="vcard" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>2023 Election</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAfricaPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="globe" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Africa</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBreakingPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="newspaper-o" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Breaking News</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCelebrityPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="trophy" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Celebrity News</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCoverPress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="book" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Cover Stories</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCrimePress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="user-secret" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Crime News</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCulturePress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="globe" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Culture News</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAgriculturePress}>
        <View style={localStyles.categoryItem}>
          <FontAwesomeIcon name="pagelines" size={32} color="#c4302b" style={localStyles.icon} />
          <Text style={localStyles.categoryText}>Agriculture News</Text>
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
    flexBasis: '20%', // Adjust as needed based on your design
    aspectRatio: 1, // This ensures the width and height are the same
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: '#fff', // Change the background color as needed
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1, // For Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    marginBottom: 12,
    height: 32,
    top: 5,
  },
  categoryText: {
    fontSize: 13, // Adjust as needed
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    // top: 21,
  },
});

export default CategoriesScreen;
