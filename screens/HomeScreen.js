// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getPosts } from '../api/wpApi';
import TopNewsSlider from '../components/TopNewsSlider';
import NewsList from '../components/NewsList';
import Loader from '../components/Loader';
import appStyles from '../appStyles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from '@expo-google-fonts/poppins';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const [fontsLoaded] = useFonts({
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await getPosts();
      setPosts(postsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostPress = (post) => {
    navigation.navigate('Article', { postId: post.id });
  };

  return (
    <ScrollView>
      {/* Search Bar */}
      <View style={appStyles.searchBarContainer}>
        <View style={appStyles.searchBarIconContainer}>
          <FontAwesomeIcon name="search" size={12} color="#c4302b" style={appStyles.searchBarIcon} />
        </View>
        <TextInput
          style={appStyles.searchBarInput}
          placeholder="Search feeds"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={{ color: '#c4302b', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginBottom: 20 }}>Breaking News</Text>
          <TopNewsSlider topNews={posts} onPress={handlePostPress} />
          <Text style={{ color: '#c4302b', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginBottom: 20, marginTop: 20, }}>Latest News</Text>

          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: '#c4302b',
              inactiveTintColor: 'gray',
              labelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
              },
              style: {
                backgroundColor: '#fff',
              },
              indicatorStyle: {
                backgroundColor: '#c4302b',
              },
            }}>
            <Tab.Screen name="All" component={() => <NewsList category="All" data={posts} onPress={handlePostPress} />} />
            <Tab.Screen name="Tech" component={() => <NewsList category="Tech" data={posts} onPress={handlePostPress} />} />
            <Tab.Screen name="Business" component={() => <NewsList category="Business" data={posts} onPress={handlePostPress} />} />
            <Tab.Screen name="Crime" component={() => <NewsList category="Crime" data={posts} onPress={handlePostPress} />} />
            <Tab.Screen name="Politics" component={() => <NewsList category="Politics" data={posts} onPress={handlePostPress} />} />
            <Tab.Screen name="More" component={() => <NewsList category="More" data={posts} onPress={handlePostPress} />} />
          </Tab.Navigator>
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
