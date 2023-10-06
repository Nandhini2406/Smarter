import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import CustomInput from '../../../Components/CustomTextInput/CustomInput';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';

const SetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetPassword, setResetPassword] = useState(false);
  const [error, setError] = useState(null);

  const resetPasswordBtnPressed = async () => {
    try {
      const userDataKey = `user_${email}`;
      const userData = await AsyncStorage.getItem(userDataKey);

      if (!userData) {
        Alert.alert('Error', 'User not found. Please check your email.');
      } else {
        setResetPassword(true);
      }
    } catch (error) {
      console.error('Error verifying email:', error);
    }
  };

  const submitBtnPressed = async () => {
    // Password validation criteria
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(newPassword)) {
      setError(
        'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character.',
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      try {
        // Update the user's password in AsyncStorage
        const userDataKey = `user_${email}`;
        const userData = await AsyncStorage.getItem(userDataKey);
        const user = JSON.parse(userData);
        user.password = newPassword;
        await AsyncStorage.setItem(userDataKey, JSON.stringify(user));

        // Navigate to the login screen
        navigation.navigate('LoginScreen');
      } catch (error) {
        console.error('Error updating password:', error);
      }
    }
  };

  const backBtnPressed = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <GradientBackground>
    <View style={styles.container}>
      <Text>Enter the Email ID</Text>
      <CustomInput
        placeholder="Email Id"
        setvalue={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <CustomButton
        text="Reset Password now"
        onPress={resetPasswordBtnPressed}
      />
      {resetPassword && (
        <>
          <CustomInput
            placeholder="New Password"
            setvalue={text => setNewPassword(text)}
            value={newPassword}
            //secureTextEntry
          />
          <CustomInput
            placeholder="Confirm Password"
            setvalue={text => setConfirmPassword(text)}
            value={confirmPassword}
            //secureTextEntry
          />
          <CustomButton text="Submit" onPress={submitBtnPressed} />
          {error && <Text style={styles.errorMsg}>{error}</Text>}
        </>
      )}
      <CustomButton
        text="Back to Login"
        onPress={backBtnPressed}
        type="Tertiary"
      />
    </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorMsg: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
});

export default SetPassword;
