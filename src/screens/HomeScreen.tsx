import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import { fetchPosts } from '../services/postServices.js';


interface Post {
  id: number;
  title: string;
  body: string;
}

const HomeScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };

    loadPosts();
  }, []);

const renderItem: ListRenderItem<Post> = ({ item }) => (
<PostCard title={item.title} body={item.body} />
);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
