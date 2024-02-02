// components/TopNewsSlider.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesomeIcon
import { useNavigation } from '@react-navigation/native';

const TopNewsSlider = ({ topNews, onPress }) => {
  const navigation = useNavigation();

  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (itemId) => {
    // Check if the item is already liked
    if (likedItems.includes(itemId)) {
      // Remove from liked items
      setLikedItems(likedItems.filter((id) => id !== itemId));
    } else {
      // Add to liked items
      setLikedItems([...likedItems, itemId]);
    }
  };

  const renderCard = ({ item }) => {
    const isLiked = likedItems.includes(item.id);

    // Calculate relative time using moment
    const relativeTime = moment(item.date).fromNow();

    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={{ borderRadius: 10, overflow: 'hidden', elevation: 8, marginBottom: 15 }}>
          <Image source={{ uri: item.featuredImage.node.sourceUrl }} style={{ width: '100%', height: 290 }} />
          <View style={styles.cardInfoContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.title}</Text>
              <Text style={{ color: '#888', fontSize: 13, fontWeight: 'bold', marginBottom: 5 }}>
                Category: {item.categories.nodes[0].name}
              </Text>
              <Text style={{ color: '#888', fontSize: 12 }}>Posted: {relativeTime}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.likeButton}>
              <FontAwesomeIcon
                name={isLiked ? 'heart' : 'heart-o'}
                color={isLiked ? 'red' : 'red'}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Carousel layout="parallax" data={topNews} renderItem={renderCard} sliderWidth={360} itemWidth={300} loop />
    </View>
  );
};

const styles = StyleSheet.create({
  cardInfoContainer: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  likeButton: {
    position: 'absolute',
    top: 55,
    right: 20,
  },
});

export default TopNewsSlider;
