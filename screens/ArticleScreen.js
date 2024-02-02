// screens/ArticleScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { getPostById } from '../api/wpApi';
import styles from '../appStyles'; // Import the appStyles

const ArticleScreen = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const postData = await getPostById(postId);
      setPost(postData);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  if (!post) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.featuredImage.node.sourceUrl }} style={{ height: 200, width: '100%' }} />
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
      {post.categories && (
          <View style={styles.articleCategoriesContainer}>
            <Text style={styles.articleCategoriesTitle}>Categories:</Text>
            {post.categories.edges.map((category) => (
              <Text key={category.node.id} style={styles.articleCategory}>
                {category.node.name}
              </Text>
            ))}
          </View>
        )}
    </ScrollView>
  );
};

export default ArticleScreen;
