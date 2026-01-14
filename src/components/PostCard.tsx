import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Post } from '../types/Post';

interface PostCardProps {
  userId: number;
  posts: Post[];
  onPostPress: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  userId,
  posts,
  onPostPress,
}) => {
  const renderPostItem = ({ item }: { item: Post }) => (
    <View style={styles.postCard}>
      <View style={styles.contentContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {item.title}
          </Text>
        </View>
        <Text style={styles.body} numberOfLines={4} ellipsizeMode="tail">
          {item.body}
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.readMoreButton}
        onPress={() => onPostPress(item)}
      >
        <Text style={styles.readMoreText}>Read more</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userBadge}>
          <Text style={styles.userBadgeText}>User {userId}</Text>
        </View>
        <Text style={styles.postCount}>({posts.length} posts)</Text>
      </View>

      <FlatList
        horizontal
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userBadge: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  userBadgeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  postCount: {
    marginLeft: 8,
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  horizontalList: {
    paddingRight: 16,
  },
  postCard: {
    width: 280,
    height: 220,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 14,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 50,
  },
  titleBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
    lineHeight: 20,
  },
  body: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  readMoreButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignItems: 'center',
    position: 'absolute',
    bottom: 14,
    left: 14,
    right: 14,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default PostCard;
