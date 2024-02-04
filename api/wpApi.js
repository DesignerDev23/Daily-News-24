// api/wpApi.js
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://dailynews24.ng/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const getPosts = async () => {
  try {
    const response = await client.query({
      query: gql`
        query GetPosts {
          posts {
            edges {
              node {
                id
                title
                slug
                categories {
                  nodes {
                    name
                  }
                }
                date
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `,
    });
    return response.data.posts.edges.map((edge) => edge.node);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};


export const getPostById = async (id) => {
  try {
    const response = await client.query({
      query: gql`
        query getPostById($id: ID!) {
          post(id: $id) {
            title
            content
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
            categories {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      `,
      variables: { id },
    });
    return response.data.post;
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    throw error;
  }
};

// api/wpApi.js
export const getRelatedPosts = async (postId, categories) => {
  try {
    const response = await client.query({
      query: gql`
        query GetRelatedPosts($postId: ID!, $categories: [String!]) {
          relatedPosts(postId: $postId, categories: $categories) {
            edges {
              node {
                id
                title
                slug
                categories {
                  nodes {
                    name
                  }
                }
                date
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `,
      variables: { postId, categories },
    });

    return response.data.relatedPosts.edges.map((edge) => edge.node);
  } catch (error) {
    console.error(`Error fetching related posts for post with id ${postId}:`, error);
    throw error;
  }
};
