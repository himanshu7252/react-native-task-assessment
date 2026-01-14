import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSearch = async (value: string): Promise<void> => {
  await AsyncStorage.setItem('SEARCH_TEXT', value);
};

export const getSearch = async (): Promise<string | null> => {
  return AsyncStorage.getItem('SEARCH_TEXT');
};
