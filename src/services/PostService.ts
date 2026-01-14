import { Post } from '../types/Post';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    console.log('Starting fetch from:', POSTS_URL);
    
    const response = await fetch(POSTS_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Post[] = await response.json();
    console.log('Received posts:', data.length);
    return data;
  } catch (error: any) {
    console.error('Fetch posts error:', error.message || error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    throw error;
  }
};
