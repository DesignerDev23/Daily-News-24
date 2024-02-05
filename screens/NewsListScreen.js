import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getNewsByCategory } from '../api/wpApi';

const NewsListScreen = ({ route }) => {
    const { category } = route.params || {};
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news only if category is defined
    if (category) {
      console.log('Category in NewsListScreen:', category);
      fetchNews();
    }
  }, [category]);
  

  const fetchNews = async () => {
    try {
      // Use the getNewsByCategory function to fetch news for the given category
      const newsData = await getNewsByCategory(category.id);
      setNews(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <View style={styles.container}>
      {category && (
        <>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          <FlatList
            data={news}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.newsItem}>
                <Text>{item.title}</Text>
              </View>
            )}
          />
        </>
      )}
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
});

export default NewsListScreen;
