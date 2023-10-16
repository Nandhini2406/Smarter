import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserData = async (email, user) => {
  try {
    const userKey = `user_${email}`;   // Store the user data with the unique key
    await AsyncStorage.setItem(userKey, JSON.stringify(user));
    await AsyncStorage.setItem('savedEmail', email);
    console.log('Email....', email);
    console.log(`User email : ${userKey}   User passwor : ${user.password}`);
  } catch (error) {
    console.error('Error storing user data:', error);
    throw error; // Rethrow the error for handling in the SignupScreen component
  }
};