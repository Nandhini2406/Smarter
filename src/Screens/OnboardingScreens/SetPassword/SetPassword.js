import {View, Text, Alert, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import CustomInput from '../../../Components/CustomTextInput/CustomInput';
import GradientBackground from '../../../Components/ScreenBackground/GradientBackground';
import {styles} from './styles';
import {fetchUserData} from '../../../Services/asyncService/fetchUserData';
import {saveUserData} from '../../../Services/asyncService/saveUserData';
import {validatePassword} from '../../../Utils/validation';
const SetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetPassword, setResetPassword] = useState(false);
  const [error, setError] = useState(null);

  const resetPasswordBtnPressed = async () => {
    try {
      const userKey = `user_${email}`;
      const userData = await AsyncStorage.getItem(userKey);
      console.log('userdata fetched in ResetPassword...', userData);
      if (!userData) {
        Alert.alert('Failed', 'User not found. Please check your email.');
      } else {
        setResetPassword(true);
      }
    } catch (error) {
      console.error('Error verifying email:', error);
    }
  };

  const updateNewPassword = async () => {
    try {
      const userData = await fetchUserData();

      if (userData) {
        userData.password = newPassword;
        console.log(
          `Updated Password for ${userData.email} is ${userData.password}`,
        );
        await saveUserData(email, userData);
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  const submitBtnPressed = async () => {
    // Password validation criteria
    if (!validatePassword(newPassword)) {
      setError(
        'Password must contain at least 8 characters, one uppercase letter, one number, and one special character',
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      updateNewPassword();
    }
  };

  const backBtnPressed = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ScrollView>
      <GradientBackground>
        <View style={styles.container}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.text}>Enter the Email below</Text>
          <CustomInput
            placeholder="Email Id"
            setvalue={text => setEmail(text)}
            value={email}
            autoCapitalize="none"
          />
          <CustomButton text="Set Password" onPress={resetPasswordBtnPressed} />
          {resetPassword && (
            <>
              <Text style={styles.text}>Enter the new password here</Text>
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
              {error && <Text style={styles.errorMsg}>{error}</Text>}
              <CustomButton text="Submit" onPress={submitBtnPressed} />
            </>
          )}
          <CustomButton
            text="Back to Login"
            onPress={backBtnPressed}
            type="Tertiary"
          />
        </View>
      </GradientBackground>
    </ScrollView>
  );
};

export default SetPassword;
