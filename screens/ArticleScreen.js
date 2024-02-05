// Import necessary libraries
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { getPostById } from '../api/wpApi';
import HTML from 'react-native-render-html';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';

// Define ArticleScreen component
const ArticleScreen = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState(null);
  const [isLiked, setLiked] = useState(false);

  // Fetch post data on component mount
  useEffect(() => {
    fetchPost();
  }, []);

  // Fetch post data function
  const fetchPost = async () => {
    try {
      const postData = await getPostById(postId);
      setPost(postData);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  // Handle like button press
 // Handle like button press
 const handleLike = () => {
  setLiked(!isLiked);
};

// Share on social media
const shareOnFacebook = () => {
  const message = `Check out this post: ${post.title}\n${post.link}`;
  const imageUrl = post.featuredImage.node.sourceUrl;
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.link)}&quote=${encodeURIComponent(message)}&picture=${encodeURIComponent(imageUrl)}`;
  Linking.openURL(url);
};

const shareOnTwitter = () => {
  const message = `Check out this post: ${post.title}\n${post.link}`;
  const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(post.link)}&text=${encodeURIComponent(message)}`;
  Linking.openURL(url);
};

const shareOnInstagram = () => {
  // Modify this based on how Instagram sharing works for your specific use case
  // Instagram sharing is usually done through the app
  // You can redirect the user to your Instagram profile
  Linking.openURL('https://www.instagram.com/your_instagram_profile/');
};

const shareOnLinkedIn = () => {
  const message = `Check out this post: ${post.title}\n${post.link}`;
  const imageUrl = post.featuredImage.node.sourceUrl;
  const url = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(post.link)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(message)}&source=${encodeURIComponent(imageUrl)}`;
  Linking.openURL(url);
};

const shareOnTelegram = () => {
  const message = `Check out this post: ${post.title}\n${post.link}`;
  const url = `https://t.me/share/url?url=${encodeURIComponent(post.link)}&text=${encodeURIComponent(message)}`;
  Linking.openURL(url);
};

const shareOnWhatsApp = () => {
  const message = `Check out this post: ${post.title}\n${post.link}`;
  const imageUrl = post.featuredImage.node.sourceUrl;
  const url = `whatsapp://send?text=${encodeURIComponent(message)}&media=${encodeURIComponent(imageUrl)}`;
  Linking.openURL(url);
};

  // Return JSX
  if (!post) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={localStyles.container}>
      {/* Featured Image */}
      <Image source={{ uri: post.featuredImage.node.sourceUrl }} style={localStyles.featuredImage} />

      {/* Post Details */}
      <View style={localStyles.postContainer}>
        <Text style={localStyles.postTitle}>{post.title}</Text>

        {/* Categories */}
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

        {/* Time Posted */}
  
      </View>

      {/* Post Content */}
      <View style={localStyles.contentContainer}>
  <HTML
    source={{ html: post.content }}
    tagsStyles={{
      p: { marginBottom: 3, fontSize: 14.5, lineHeight: 24, textAlign: 'justify', fontWeight: '500', }, // Adjust line height and font size for paragraphs
    }}
  />
</View>


      {/* Like Button */}
      <TouchableOpacity
        style={[localStyles.likeButton, isLiked && localStyles.likedButton]}
        onPress={handleLike}
      >
        <FontAwesomeIcon name={isLiked ? 'heart' : 'heart-o'} size={24} color="#c4302b" />
      </TouchableOpacity>

      {/* Horizontal Line */}
      <View style={localStyles.horizontalLine} />

      {/* Share Icons */}
      <View style={localStyles.shareIconsContainer}>
    <TouchableOpacity style={localStyles.shareIcon} onPress={shareOnFacebook}>
      <Ionicons name="logo-facebook" size={24} color="#4267B2" />
    </TouchableOpacity>
    <TouchableOpacity style={localStyles.shareIcon} onPress={shareOnTwitter}>
      <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
    </TouchableOpacity>
    <TouchableOpacity style={localStyles.shareIcon} onPress={shareOnInstagram}>
      <Ionicons name="logo-instagram" size={24} color="#E4405F" />
    </TouchableOpacity>
    <TouchableOpacity style={localStyles.shareIcon} onPress={shareOnTelegram}>
      <FontAwesomeIcon name="telegram" size={24} color="#0088cc" />
    </TouchableOpacity>
    <TouchableOpacity style={localStyles.shareIcon} onPress={shareOnWhatsApp}>
      <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
    </TouchableOpacity>
  </View>
    </ScrollView>
  );
};

// Styles
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
    padding: 15,
  },
  likeButton: {
    position: 'absolute',
    bottom: 90,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 12,
    elevation: 5,
  },
  likedButton: {
    backgroundColor: '#fff',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
  shareIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  shareIcon: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
});


// Export the component
export default ArticleScreen;
