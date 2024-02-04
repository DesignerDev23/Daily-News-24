// Sidebar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Sidebar = ({ navigation }) => {
  const handleSidebarItemPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={() => handleSidebarItemPress('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSidebarItemPress('About')}>
        <Text>About</Text>
      </TouchableOpacity>
      {/* Add more items as needed */}
    </View>
  );
};

export default Sidebar;
