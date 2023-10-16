import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

export const fetchUserData = async () => {
  try {
    const savedEmail = await AsyncStorage.getItem('savedEmail');
    const userKey = `user_${savedEmail}`;
    const userData = await AsyncStorage.getItem(userKey);

    console.log(`Current User details: ${userData}`);
    return JSON.parse(userData) || {};
  } catch (error) {
    crashlytics().recordError(error); // Record error with Crashlytics
    console.error('Error retrieving user data:', error);
    return {};
// throw error; // Rethrow the error so it can be caught in UserDetailsScreen.js
  }
};