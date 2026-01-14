import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { fetchPosts } from '../services/postService';
import PostCard from '../components/PostCard';
import { Post } from '../types/Post';
import { saveSearch, getSearch } from '../utiils/storage';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    loadPosts();
    loadSavedSearch();
  }, []);

  const loadSavedSearch = async () => {
    try {
      const savedSearch = await getSearch();
      if (savedSearch) {
        setSearch(savedSearch);
      }
    } catch (error) {
      console.error('Error loading saved search:', error);
    }
  };

  const handleSearchChange = async (text: string) => {
    setSearch(text);
    try {
      await saveSearch(text);
    } catch (error) {
      console.error('Error saving search:', error);
    }
  };

const loadPosts = async () => {
  try {
    setLoading(true);
    const data = await fetchPosts();
    setPosts(data);
    setError('');
  } catch (error) {
    setError(
      'Unable to fetch posts. Check your network connection.'
    );
  } finally {
    setLoading(false);
  }
};

  // Group posts by userId
  const groupedPosts = posts.reduce((acc, post) => {
    if (!acc[post.userId]) {
      acc[post.userId] = [];
    }
    acc[post.userId].push(post);
    return acc;
  }, {} as Record<number, Post[]>);

  // Filter by search term
  const filteredGroupedPosts = Object.entries(groupedPosts).reduce((acc, [userId, userPosts]) => {
    const filteredUserPosts = userPosts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredUserPosts.length > 0) {
      acc[userId] = filteredUserPosts;
    }
    return acc;
  }, {} as Record<string, Post[]>);

  const userPostsArray = Object.entries(filteredGroupedPosts).map(([userId, userPosts]) => ({
    userId: parseInt(userId),
    posts: userPosts,
  }));

  const handlePostPress = (post: Post) => {
    navigation.navigate('PostDetail', { post });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Search posts..."
          value={search}
          onChangeText={handleSearchChange}
          style={styles.search}
          placeholderTextColor="#999"
        />
      </View>

      <FlatList
        data={userPostsArray}
        keyExtractor={(item) => item.userId.toString()}
        renderItem={({ item }) => (
          <PostCard 
            userId={item.userId}
            posts={item.posts}
            onPostPress={handlePostPress}
          />
        )}
        refreshing={loading}
        onRefresh={loadPosts}
        ListEmptyComponent={
          <Text style={styles.empty}>No posts found.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#4A90E2',
    elevation: 4,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  search: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  error: {
    color: '#ff4444',
    textAlign: 'center',
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#ffebee',
    borderRadius: 8,
    fontWeight: '500',
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#5c5757',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
