import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const YouTubeVideosScreen = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      const apiKey = 'AIzaSyAyv4f7c8T5I6r0-MtCClHfBCF2d309BiU'; // Replace with your actual YouTube Data API key
      const channelId = 'UCx-tONSNtZJ7R1j5EiAlKPA'; // Replace with the desired channel ID

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${apiKey}`
      );

      const data = await response.json();

      if (data.items) {
        // Extract video items from the response
        const videoItems = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
        }));

        setVideos(videoItems);
      }
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Watch</Text> */}
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: `https://www.youtube.com/embed/${item.id}` }}
              style={styles.webView}
            />
            <Text style={styles.videoTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c4302b',
    marginTop: 50,
    textAlign: 'Left',
  },
  videoContainer: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  webView: {
    height: 200,
    borderRadius: 12,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 12,
    color: '#333',
    textAlign: 'left',
  },
});

export default YouTubeVideosScreen;
