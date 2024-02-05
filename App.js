// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
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
import CustomHeader from './CustomHeader';
import Sidebar from './Sidebar';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import NewsListScreen from './screens/NewsListScreen';
import AviationScreen from './screens/AviationScreen';
import BusinessScreen from './screens/BusinessScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const roundedAppIcon = require('./assets/head.png');

const HomeStack = () => (
  <Stack.Navigator  initialRouteName="Home"
  
>
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
    <Stack.Navigator  initialRouteName="YouTubeVideos"
  screenOptions={({ navigation }) => CustomHeader({ navigation })}
>
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

const NewsListStack = () => (
  <Stack.Navigator initialRouteName="NewsListScreen">
    <Stack.Screen
      name="NewsListScreen"
      component={NewsListScreen}
      options={({ route }) => ({
        title: `News List for ${route.params.category.name}`,
      })}
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
  <Stack.Navigator  initialRouteName="AllPostsStack "
>
    <Stack.Screen
      name="AllPostsScreen"
      component={AllPostsScreen}
      options={{
        headerShown: false,
      }}
   
    />
  </Stack.Navigator>
);



const YouTubeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Youtube"
      component={YouTubeVideosScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const CategoriesStack = () => (
  <Stack.Navigator initialRouteName="Categories" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Categories" component={CategoriesScreen} />
    <Stack.Screen name="Aviation" component={AviationScreen} />
    <Stack.Screen name="Business" component={BusinessScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#c4302b',
      inactiveTintColor: 'gray',
      fontWeight: '600',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={HomeStack}
      options={{
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
        tabBarLabel: 'All Posts',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon name="bars" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="YouTube"
      component={YouTubeStack}
      options={{
        tabBarLabel: 'Videos',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon name="play-circle" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Categories"
      component={CategoriesStack}
      options={{
        headerShown: false,
        tabBarLabel: 'Categories',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon name="compass" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
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
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} />}
      initialRouteName="Home"
  screenOptions={({ navigation }) => CustomHeader({ navigation })}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} />
        <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
        <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
        <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Drawer.Screen name="Aviation" component={AviationScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default App;
