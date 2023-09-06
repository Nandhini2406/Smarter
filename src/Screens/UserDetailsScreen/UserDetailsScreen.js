import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../Components/CustomTextInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserDetailsScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNoError, setphoneNoError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('savedEmail');
        const userKey = `user_${savedEmail}`;
        const userData = await AsyncStorage.getItem(userKey);
        const user = JSON.parse(userData);
        console.log(`User ${user.name}`);

        setName(user.name || '');
        setPhoneNumber(user.phoneNumber || '');
        setEmail(savedEmail || '');
      } catch {
        console.error('Error retrieving user data:', error);
      }
    };
    getUserData();
  }, []);

  const validatePhoneNumber = () => {
    // Phone No regex pattern
    const phoneNoPattern = /^\d{10}$/;

    if (!phoneNoPattern.test(phoneNumber)) {
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

  const SumbitBtnPressed = async () => {
    // to check all fields are filled
    if (!name || !phoneNumber || !email || !location || !address || !company) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      // Save updated user data to AsyncStorage
      const userKey = `user_${email}`;
      const updatedUser = {
        name,
        phoneNumber,
        email,
        location,
        address,
        company,
      };
      await AsyncStorage.setItem(userKey, JSON.stringify(updatedUser));
      console.log('User details saved successfully');
      navigation.navigate('HomeScreen');
      //Alert('User details saved successfully');
      
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleText}>Name:</Text>
        <CustomInput
          placeholder="Name"
          setvalue={text => setName(text)}
          value={name}
        />
        <Text style={styles.titleText}>Phone Number:</Text>
        <CustomInput
          placeholder="Phone Number"
          setvalue={text => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType={'phone-pad'}
          onBlur={validatePhoneNumber}
        />
        {phoneNoError && <Text style={styles.errorMsg}>{phoneNoError}</Text>}

        <Text style={styles.titleText}>Address:</Text>
        <CustomInput
          placeholder="Address"
          setvalue={text => setAddress(text)}
          value={address}
        />
        <Text style={styles.titleText}>Location:</Text>
        <CustomInput
          placeholder="Location"
          setvalue={text => setLocation(text)}
          value={location}
        />
        <Text style={styles.titleText}>Email ID:</Text>
        <CustomInput
          placeholder="Email ID"
          setvalue={text => setEmail(text)}
          value={email}
          onBlur={validateEmail}
        />
        {emailError && <Text style={styles.errorMsg}>{emailError}</Text>}

        <Text style={styles.titleText}>Company:</Text>
        <CustomInput
          placeholder="Company Name"
          setvalue={text => setCompany(text)}
          value={company}
        />
        <CustomButton text="Submit" onPress={SumbitBtnPressed}></CustomButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },

  titleText: {
    fontSize: 18,
  },
  errorMsg: {
    fontSize: 10,
    color: 'red',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
});

export default UserDetailsScreen;

// const retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('email');
//       if (value !== null) {
//         // We have data!!
//         console.log("values...." + value);
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
//   };
