// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import LikedNewsScreen from './screens/LikedNewsScreen';
import SettingsScreen from './screens/SettingsScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from '@expo-google-fonts/poppins';
import appStyles from './appStyles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const roundedAppIcon = require('./assets/head.png');

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Article"
      component={ArticleScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const LikedNewsStack = () => (
  <Stack.Navigator initialRouteName="LikedNews">
    <Stack.Screen
      name="LikedNews"
      component={LikedNewsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator initialRouteName="Settings">
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#c4302b',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="LikedNews"
          component={LikedNewsStack}
          options={{
            tabBarLabel: 'Liked',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
