import { Post } from '../types/Post';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(POSTS_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch posts error:', error);
    throw error;
  }
};
