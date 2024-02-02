// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { getPosts } from '../api/wpApi';
import TopNewsSlider from '../components/TopNewsSlider';
import NewsList from '../components/NewsList';
import Loader from '../components/Loader';
import appStyles from '../appStyles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

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
        <Text style={{ color: '#c4302b', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginBottom: 20, }}>Breaking News</Text>
          <TopNewsSlider topNews={posts} onPress={handlePostPress} />
          <Text style={{ color: '#c4302b', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginBottom: 20, marginTop: 20,}}>Latest News</Text>
          <NewsList data={posts} onPress={handlePostPress} />
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
