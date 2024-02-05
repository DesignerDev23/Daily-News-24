// AviationScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getNewsByCategory } from '../api/wpApi';
import { formatDistanceToNow } from 'date-fns';

const BusinessScreen = ({ navigation }) => {
  const [businessPosts, setBusinessPosts] = useState([]);

  useEffect(() => {
    fetchBusinessPosts();
  }, []);

  const fetchBusinessPosts = async () => {
    try {
      const businessPostsData = await getNewsByCategory('dGVybTo1NzYz'); // Adjust the category name as needed
      setBusinessPosts(businessPostsData);
    } catch (error) {
      console.error('Error fetching business posts:', error);
    }
  };

  const formatPostDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };

  const handlePostPress = (postId) => {
    // Navigate to the ArticleScreen with the selected post ID
    navigation.navigate('Article', { postId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Business News</Text>
      <FlatList
        data={businessPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePostPress(item.id)}>
            <View style={styles.newsItem}>
              {item.featuredImage && (
                <Image
                  source={{ uri: item.featuredImage.node.sourceUrl }}
                  style={styles.featuredImage}
                />
              )}
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postDate}>{formatPostDate(item.date)}</Text>
              {/* Add other fields as needed */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  featuredImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postDate: {
    color: 'gray',
  },
});

export default BusinessScreen;
