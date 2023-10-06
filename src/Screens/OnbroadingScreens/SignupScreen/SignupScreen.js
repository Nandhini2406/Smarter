import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../../Components/CustomTextInput/CustomInput';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';

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
    // Phone No regex pattern
    const phoneNoPattern = /^\d{10}$/;

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
    // Password regex pattern (at least 6 characters)
    const passwordPattern = /^.{6,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError('Password must be at least 6 characters*');
    } else {
      setPasswordError(null);
    }
  };

  const matchPassword = () => {
    if (password !== confirmPassword) {
      setconfirmPasswordError('Password is not matching ');
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
      //unique key for each user based on their email
      const userKey = `user_${email}`;

      //user with the same email already exists error
      const existingUser = await AsyncStorage.getItem(userKey);

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

        // Store the user data with the unique key
        await AsyncStorage.setItem(userKey, JSON.stringify(user));
        navigation.navigate('UserDetailsScreen');
        await AsyncStorage.setItem('savedEmail', email);
        console.log('Email....', email);
        console.log(`User email : ${userKey}   User Data : ${user.password}`);
      }
    } catch (error) {
      setError('Failed to sign up. Please try again.');
      console.error('Error storing data:', error);
    }
  };

  return (
  <GradientBackground>
    <ScrollView style={{flex: 1}}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign Up Here!</Text>
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
        {passwordError && <Text style={styles.errorMsg}>{passwordError}</Text>}
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
            onFillColor="green"
            onCheckColor="white"
            tintColor="black"
            onTintColor="black"
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}> Accepts all Terms & Condition</Text>
        </View>

        <CustomButton text="Sign up" onPress={onSignupBtnPressed} />
        {error && <Text style={styles.errorMsg}>{error}</Text>}
      </View>
    </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  errorMsg: {
    fontSize: 12,
    color: 'red',
    textAlign: 'right',
  },
  checkContainer: {
    margin: 10,
    flexDirection: 'row',
  },
  text: {
    margin: 5,
  },
});

export default SignupScreen;
