import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, ScrollView } from 'react-native';

const SkeletonLoader: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [animatedValue]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animated.View style={[styles.userBadge, { opacity }]} />
        <Animated.View style={[styles.postCount, { opacity }]} />
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContainer}
      >
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.postCard}>
            <Animated.View style={[styles.titleBox, { opacity }]} />
            <Animated.View style={[styles.bodyLine1, { opacity }]} />
            <Animated.View style={[styles.bodyLine2, { opacity }]} />
            <Animated.View style={[styles.bodyLine3, { opacity }]} />
            <Animated.View style={[styles.readMoreButton, { opacity }]} />
          </View>
        ))}
      </ScrollView>
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
    backgroundColor: '#e0e0e0',
    width: 70,
    height: 24,
    borderRadius: 16,
  },
  postCount: {
    backgroundColor: '#e0e0e0',
    width: 60,
    height: 16,
    paddingRight: 16,
    marginLeft: 8,
  },
  horizontalContainer: {
    flexDirection: 'row',
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
  },
  titleBox: {
    backgroundColor: '#e0e0e0',
    height: 44,
    borderRadius: 8,
    marginBottom: 10,
  },
  bodyLine1: {
    backgroundColor: '#e0e0e0',
    height: 14,
    borderRadius: 4,
    marginBottom: 8,
  },
  bodyLine2: {
    backgroundColor: '#e0e0e0',
    height: 14,
    borderRadius: 4,
    marginBottom: 8,
    width: '90%',
  },
  bodyLine3: {
    backgroundColor: '#e0e0e0',
    height: 14,
    borderRadius: 4,
    marginBottom: 8,
    width: '80%',
  },
  readMoreButton: {
    backgroundColor: '#e0e0e0',
    height: 32,
    borderRadius: 6,
    position: 'absolute',
    bottom: 14,
    left: 14,
    right: 14,
  },
});

export default SkeletonLoader;
