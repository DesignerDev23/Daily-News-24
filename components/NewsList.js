// components/NewsList.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { getPosts } from '../api/wpApi';

const NewsList = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  const fetchCategories = async () => {
    try {
      const categoriesData = ['All', 'Tech', 'Business', 'Crime', 'Politics', 'More'];
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const postsData = await getPosts();
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostPress = (post) => {
    navigation.navigate('Article', { postId: post.id });
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePostPress(item)}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Image source={{ uri: item.featuredImage.node.sourceUrl }} style={{ width: 100, height: 100, marginRight: 10 }} />
        <View>
          <Text>{item.title}</Text>
          {/* Add more details or styling as needed */}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderPostItem}
    />
  );
};

export default NewsList;
