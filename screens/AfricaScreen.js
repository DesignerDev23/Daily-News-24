// AviationScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getNewsByCategory } from '../api/wpApi';
import { formatDistanceToNow } from 'date-fns';

const AfricaScreen = ({ navigation }) => {
  const [africaPosts, setAfricaPosts] = useState([]);

  useEffect(() => {
    fetchAfricaPosts();
  }, []);

  const fetchAfricaPosts = async () => {
    try {
      const africaPostsData = await getNewsByCategory('dGVybToyMTU='); // Adjust the category name as needed
      setAfricaPosts(africaPostsData);
    } catch (error) {
      console.error('Error fetching africa posts:', error);
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
      <Text style={styles.categoryTitle}>Africa News</Text>
      <FlatList
        data={africaPosts}
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

export default AfricaScreen;
