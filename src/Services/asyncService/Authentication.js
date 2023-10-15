import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkAuthentication = async () => {
  try {
    const savedEmail = await AsyncStorage.getItem('savedEmail');
    const userName = await AsyncStorage.getItem('userName');
    const userKeys = await AsyncStorage.getAllKeys();
    console.log(`User Keys in asyncStorage.... [${userKeys}]`);
    console.log(`User email.... ${savedEmail}`);
    console.log(`User Name.... ${userName}`);
    return !!savedEmail; // Return true if email is found, false otherwise
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false; // Return false in case of error
  }
};

export const authenticateUser = async (email, password) => {
  try {
    const userKey = `user_${email}`;
    const userData = await AsyncStorage.getItem(userKey);

    if (userData) {
      const user = JSON.parse(userData);

      if (user.password === password && user.email === email) {
        await AsyncStorage.setItem('savedEmail', email);
        return { success: true, user: user };
      } else {
        return { success: false, error: 'Invalid email or password' };
      }
    } else {
      return { success: false, error: 'User not found' };
    }
  } catch (error) {
    return { success: false, error: 'Error in authentication' };
  }
};