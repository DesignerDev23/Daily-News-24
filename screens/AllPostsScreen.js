import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { getPosts } from '../api/wpApi';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const AllPostsScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await getPosts();
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const navigateToArticle = (postId) => {
    navigation.navigate('Article', { postId });
  };

  const renderRelativeTime = (date) => {
    return moment(date).fromNow();
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToArticle(item.id)} style={styles.postContainer}>
      <View style={styles.imageContainer}>
        {item.featuredImage && item.featuredImage.node && item.featuredImage.node.sourceUrl && (
          <Image source={{ uri: item.featuredImage.node.sourceUrl }} style={styles.image} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{renderRelativeTime(item.date)}</Text>
        <Text style={{ color: '#888', fontSize: 13, fontWeight: 'bold', marginBottom: 5 }}>
                 Category: {item.categories.nodes[0].name}
              </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  flatListContainer: {
    paddingBottom: 10,
  },
  postContainer: {
    flexDirection: 'row',
    marginBottom: 18,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 100,
    overflow: 'hidden',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    height: 54,
  },
  date: {
    color: '#888',
    fontSize: 14,
  },
});

export default AllPostsScreen;
