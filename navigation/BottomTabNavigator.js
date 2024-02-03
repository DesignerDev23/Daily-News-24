// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LikedNewsScreen from '../screens/LikedNewsScreen'; // You'll need to create this screen
import SettingsScreen from '../screens/SettingsScreen'; // You'll need to create this screen
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#c4302b',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          paddingBottom: 15,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 15, // Add rounded corners
          elevation: 10, // Add elevation
        },
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LikedNews"
        component={LikedNewsScreen}
        options={{
          tabBarLabel: 'Liked News',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
