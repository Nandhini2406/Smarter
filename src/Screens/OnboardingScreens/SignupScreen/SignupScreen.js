import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../../Components/CustomTextInput/CustomInput';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import GradientBackground from '../../../Components/ScreenBackground/GradientBackground';
import {styles} from './styles';
import {saveUserData} from '../../../Services/asyncService/saveUserData';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setusername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [phoneNoError, setphoneNoError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [error, setError] = useState(null);

  const validatePhoneNumber = () => {
    const phoneNoPattern = /^\d{10}$/; // Phone No regex pattern
    if (!phoneNoPattern.test(phoneNo)) {
      setphoneNoError('Invalid ');
    } else {
      setphoneNoError(null);
    }
  };

  const validateEmail = () => {
    // Email regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address*');
    } else {
      setEmailError(null);
    }
  };

  const validatePassword = () => {
    // Password regex pattern
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character',
      );
    } else {
      setPasswordError(null);
    }
  };

  const matchPassword = () => {
    if (password !== confirmPassword) {
      setconfirmPasswordError('Password is not matching');
    } else {
      setconfirmPasswordError(null);
    }
  };

  const onSignupBtnPressed = async () => {
    //to check all fields are filled
    if (!username || !phoneNo || !email || !password || !toggleCheckBox) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const userKey = `user_${email}`; //unique key for each user based on their email
      const existingUser = await AsyncStorage.getItem(userKey); //user with the same email already exists error

      if (existingUser) {
        setError('User with this email already exists.');
      } else {
        const user = {
          // Create a user object
          name: username,
          phoneNumber: phoneNo,
          email: email,
          password: password,
        };
        await saveUserData(email, user);
        navigation.navigate('UserDetailsScreen');
      }
    } catch (error) {
      setError('Failed to sign up. Please try again.');
      console.error('Error storing data:', error);
    }
  };

  const loginButtonPressed = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ScrollView>
      <GradientBackground>
        <View style={styles.root}>
          <Text style={styles.title}>Sign Up</Text>
          <Image
            source={require('../../../Assets/Images/Welcome.png')}
            style={{height: '25%', width: '50%'}}
          />
          <Text style={styles.text}>Create a Account here</Text>
          <CustomInput
            placeholder="UserName"
            setvalue={text => setusername(text)}
            value={username}
          />
          <CustomInput
            placeholder="Phone Number"
            setvalue={text => setPhoneNo(text)}
            value={phoneNo}
            keyboardType={'phone-pad'}
            onBlur={validatePhoneNumber}
          />
          {phoneNoError && <Text style={styles.errorMsg}>{phoneNoError}</Text>}
          <CustomInput
            placeholder="Email Address"
            setvalue={text => setEmail(text)}
            value={email}
            onBlur={validateEmail}
            autoCapitalize="none"
          />
          {emailError && <Text style={styles.errorMsg}>{emailError}</Text>}
          <CustomInput
            placeholder="Create Password"
            setvalue={text => setPassword(text)}
            value={password}
            onBlur={validatePassword}
            //secureTextEntry
            autoCapitalize="none"
          />
          {passwordError && (
            <Text style={styles.errorMsg}>{passwordError}</Text>
          )}
          <CustomInput
            placeholder="Confirm Password"
            setvalue={text => setConfirmPassword(text)}
            value={confirmPassword}
            onBlur={matchPassword}
            //secureTextEntry
            autoCapitalize="none"
          />
          {confirmPasswordError && (
            <Text style={styles.errorMsg}>{confirmPasswordError}</Text>
          )}

          <View style={styles.checkContainer}>
            <CheckBox
              disabled={false}
              boxType="square"
              onFillColor="white"
              onCheckColor="white"
              tintColor="black"
              onTintColor="black"
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.text}>I agree to all Terms & Conditions</Text>
          </View>

          <CustomButton text="Sign up" onPress={onSignupBtnPressed} />
          {error && <Text style={styles.errorMsg}>{error}</Text>}
          <View style={{flexDirection: 'row', margin: '2%'}}>
            <Text style={styles.text}>Already have a Account?</Text>
            <CustomButton
              text="Login"
              type="Tertiary"
              onPress={loginButtonPressed}
            />
          </View>
        </View>
      </GradientBackground>
    </ScrollView>
  );
};

export default SignupScreen;
