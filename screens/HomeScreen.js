// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet, TouchableOpacity } from 'react-native';
import { getPosts } from '../api/wpApi';
import TopNewsSlider from '../components/TopNewsSlider';
import NewsList from '../components/NewsList';
import Loader from '../components/Loader';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setRefreshing(true);
      const postsData = await getPosts();
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  const handlePostPress = (post) => {
    navigation.navigate('Article', { postId: post.id });
  };

  const handleViewAllPress = () => {
    navigation.navigate('AllPostsScreen'); // Ensure the correct name is used here
  };

  const onRefresh = () => {
    fetchPosts();
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#c4302b']} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={styles.breakingNewsText}>Breaking News</Text>
          <TopNewsSlider topNews={posts} onPress={handlePostPress} />
          <View style={styles.latestNewsContainer}>
            <Text style={styles.latestNewsText}>Latest News</Text>
            <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllPress}>
              <Text style={styles.viewAllButtonText}>View All</Text>
            </TouchableOpacity>
          </View>
          <NewsList data={posts} onPress={handlePostPress} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  breakingNewsText: {
    color: '#c4302b',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  latestNewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  latestNewsText: {
    color: '#c4302b',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  viewAllButton: {
    backgroundColor: '#c4302b',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginRight: 20,
  },
  viewAllButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default HomeScreen;
