// CustomHeader.js
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ navigation, title }) => {
  return {
    headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 78, }}>
        {/* Drawer Toggle Icon */}
        {/* <TouchableOpacity
          style={{  }}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={24} color="#c4302b" />
        </TouchableOpacity> */}

        {/* Logo (Replace 'YourLogo' with your actual logo component or image) */}
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 155, height: 40, borderRadius: 20,  marginLeft: 20,}}
        />

        {/* Bell Icon */}
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => {
            // Add your logic for bell icon press
          }}
        >
          <FontAwesomeIcon name="bell-o" size={20} color="#c4302b" />
        </TouchableOpacity>
      </View>
    ),
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#c4302b',
    },
  };
};

export default CustomHeader;
