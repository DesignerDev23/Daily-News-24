import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { getPostById } from '../api/wpApi';
import HTML from 'react-native-render-html';
import styles from '../appStyles';

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
    <ScrollView style={localStyles.container}>
      <Image source={{ uri: post.featuredImage.node.sourceUrl }} style={localStyles.featuredImage} />

      <View style={localStyles.postContainer}>
        <Text style={localStyles.postTitle}>{post.title}</Text>

        {post.categories && (
          <View style={localStyles.categoriesContainer}>
            <Text style={localStyles.categoriesTitle}></Text>
            {post.categories.edges.map((category) => (
              <Text key={category.node.id} style={localStyles.category}>
                {category.node.name}
              </Text>
            ))}
          </View>
        )}

        <Text style={localStyles.timePosted}>Posted on: {post.date}</Text>
      </View>

      <View style={localStyles.contentContainer}>
        {/* Use the HTML component and pass the post content as the html prop */}
        <HTML source={{ html: post.content }} />
      </View>
    </ScrollView>
  );
};


const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  featuredImage: {
    height: 200,
    width: '100%',
  },
  postContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 6,
  },
  categoriesTitle: {
    // marginRight: 8,
    fontWeight: 'bold',
  },
  category: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  timePosted: {
    color: '#888',
    marginTop: 8,
  },
  contentContainer: {
    padding: 16,
  },
});

export default ArticleScreen;
