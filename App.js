// App.js
import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import { Icon } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from '@expo-google-fonts/poppins';
import appStyles from './appStyles';

const Stack = createStackNavigator();

const roundedAppIcon = require('./assets/head.png');

const App = () => {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Render loading indicator or empty screen until fonts are loaded
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feeds">
        <Stack.Screen
          name="Feeds"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
              height: 100,
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            },
            headerTitleStyle: {
              color: '#c4302b',
              fontSize: 30,
              fontFamily: 'poppins-bold',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log('Menu pressed')}>
                <Image source={roundedAppIcon} style={{ width: 35, height: 35, borderRadius: 25, marginLeft: 10, marginRight: 90, ...appStyles.customFont }} />
              </TouchableOpacity>
            ),
            headerTitleContainerStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            },
            headerCenter: () => (
              <Text style={{ color: '#c4302b', fontSize: 20, fontFamily: 'poppins-bold' }}>Feeds</Text>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('Bell pressed')}>
                <FontAwesomeIcon name="bell-o" color="#000" size={20} style={{ marginRight: 20, ...appStyles.customFont }} />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
              height: 100,
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            },
            headerTitleStyle: {
              color: '#c4302b',
              fontSize: 30,
              fontFamily: 'poppins-bold',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log('Menu pressed')}>
                <Image source={roundedAppIcon} style={{ width: 35, height: 35, borderRadius: 25, marginLeft: 10, marginRight: 90, ...appStyles.customFont }} />
              </TouchableOpacity>
            ),
            headerTitleContainerStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            },
            headerCenter: () => (
              <Text style={{ color: '#c4302b', fontSize: 20, fontFamily: 'poppins-bold' }}>Feeds</Text>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('Bell pressed')}>
                <FontAwesomeIcon name="bell-o" color="#000" size={20} style={{ marginRight: 20, ...appStyles.customFont }} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
