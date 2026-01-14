import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Props contract.
 * This is NON-NEGOTIABLE in TypeScript.
 */
interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
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
