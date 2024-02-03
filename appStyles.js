// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row', // Align icon and input horizontally
    alignItems: 'center', // Center vertically
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 4,
    margin: 20,
    marginBottom: 16,
    marginTop: 20,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
  },
  bottomTabBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5, // Add elevation for a shadow effect
  },
  articleContainer: {
    flex: 1,
  },
  articleFeaturedImage: {
    height: 200,
    width: '100%',
  },
  articleHeaderContainer: {
    padding: 20,
  },
  articleTitleContainer: {
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  articleDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleCategoriesContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  articleCategoriesTitle: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  articleCategory: {
    marginRight: 5,
    color: '#555',
  },
  articleTime: {
    color: '#888',
  },
  articleContent: {
    padding: 20,
    fontSize: 16,
    color: '#333',
  },
  searchBarIconContainer: {
    backgroundColor: '#ccc', // Rounded background color
    borderRadius: 30, // Adjust the border radius as needed
    padding: 4.4, // Adjust the padding as needed
  },
  searchBarIcon: {
    padding: 3,
  },
  searchBarInput: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
    marginLeft: 10,
  },
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    marginBottom: 15,
  },
  cardImage: {
    width: '100%',
    height: 190,
  },
  cardContent: {
    padding: 10,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDate: {
    color: '#888',
    fontSize: 12,
  },
  // 
});



export default styles;
