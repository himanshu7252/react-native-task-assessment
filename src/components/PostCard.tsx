import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PostCardProps {
  userId: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({
  userId,
  title,
  body,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userBadge}>
          <Text style={styles.userBadgeText}>User {userId}</Text>
        </View>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#E74C3C',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  userBadge: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  userBadgeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  titleBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  body: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default PostCard;
