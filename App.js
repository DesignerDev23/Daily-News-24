// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import LikedNewsScreen from './screens/LikedNewsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AllPostsScreen from './screens/AllPostsScreen'; // Import AllPostsScreen
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from '@expo-google-fonts/poppins';
import appStyles from './appStyles';
import { Image } from 'react-native';
import YouTubeVideosScreen from './screens/YouTubeVideosScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const roundedAppIcon = require('./assets/head.png');

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: 'Feeds',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20, // You can adjust the font size as needed
          color: '#c4302b'
        },
        headerLeft: () => (
          // Your rounded image component goes here
          <Image source={require('./assets/head.png')} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} />
        ),
        headerRight: () => (
          // Your bell icon component goes here
          <FontAwesomeIcon name="bell-o" size={20} color="#c4302b" style={{ marginRight: 20 }} />
        ),
      }}
    />
    <Stack.Screen
      name="Article"
      component={ArticleScreen}
      options={{
        headerTitle: 'Article',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20, // You can adjust the font size as needed
          color: '#c4302b'
        },
        headerLeft: () => (
          // Your rounded image component goes here
          <Image source={require('./assets/head.png')} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} />
        ),
        headerRight: () => (
          // Your bell icon component goes here
          <FontAwesomeIcon name="bell-o" size={20} color="#c4302b" style={{ marginRight: 20 }} />
        ),
      }}
    />
  </Stack.Navigator>
);

const LikedNewsStack = () => (
  <Stack.Navigator initialRouteName="YouTubeVideos">
    <Stack.Screen
      name="YouTubeVideos"
      component={YouTubeVideosScreen}
      options={{
        headerTitle: 'YouTube Videos',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#c4302b',
        },
        headerLeft: () => (
          <Image source={require('./assets/head.png')} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} />
        ),
        headerRight: () => (
          <FontAwesomeIcon name="bell-o" size={20} color="#c4302b" style={{ marginRight: 20 }} />
        ),
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
        headerTitle: 'Setting',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20, // You can adjust the font size as needed
          color: '#c4302b'
        },
        headerLeft: () => (
          // Your rounded image component goes here
          <Image source={require('./assets/head.png')} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} />
        ),
        headerRight: () => (
          // Your bell icon component goes here
          <FontAwesomeIcon name="bell-o" size={20} color="#c4302b" style={{ marginRight: 20 }} />
        ),
      }}
    />
  </Stack.Navigator>
);

const AllPostsStack = () => (
  <Stack.Navigator initialRouteName="AllPostsScreen">
    <Stack.Screen
      name="AllPostsScreen"
      component={AllPostsScreen}
      options={{
        headerTitle: 'Posts ',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20, // You can adjust the font size as needed
          color: '#c4302b'
        },
        headerLeft: () => (
          // Your rounded image component goes here
          <Image source={require('./assets/head.png')} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} />
        ),
        headerRight: () => (
          // Your bell icon component goes here
          <FontAwesomeIcon name="bell-o" size={20} color="#c4302b" style={{ marginRight: 20 }} />
        ),
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
          style: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
            paddingBottom: 10,
            borderRadius: 15,
            marginHorizontal: 10,
          },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AllPostsScreen"
          component={AllPostsStack}
          options={{
            headerShown: false,
            tabBarLabel: 'All Posts',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="bars" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Youtube"
          component={YouTubeVideosScreen}
          options={{
        headerTitle: 'Watch ',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20, // You can adjust the font size as needed
          color: '#c4302b'
        },
        headerLeft: () => (
          // Your rounded image component goes here
          <Image source={require('./assets/head.png')} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} />
        ),
        headerRight: () => (
          // Your bell icon component goes here
          <FontAwesomeIcon name="bell-o" size={20} color="#c4302b" style={{ marginRight: 20 }} />
        ),
      
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon name="youtube-play" color={color} size={size} />
            ),
          }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
