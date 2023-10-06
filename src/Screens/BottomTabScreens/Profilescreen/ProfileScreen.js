import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import crashlytics from '@react-native-firebase/crashlytics';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import { theme } from '../../../Assets/colors/bgTheme';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');

  const getUserData = async () => {
    try {
      // crashlytics().setUserId('userId');
      // // If u have single value return from response
      // crashlytics().setAttribute('userName', 'userName Value');

      const savedEmail = await AsyncStorage.getItem('savedEmail'); // user
      // Use the email to fetch the user's details
      const userKey = `user_${savedEmail}`;
      console.log(`Saved email... ${savedEmail}`);
      console.log(`User Key... ${userKey}`);
      const userData = await AsyncStorage.getItem(userKey);
      const user = JSON.parse(userData);

      // Set the user's details in the state
      if (user) {
        setName(user.name || '');
        setPhoneNumber(user.phoneNumber || '');
        setEmail(user.email || ''); // Use the fetched email
        setLocation(user.location || '');
        setAddress(user.address || '');
        setCompany(user.company || '');
      }
    } catch (error) {
      crashlytics().recordError(err);
      console.error('Error retrieving user data:', error);
    }
  };

  useEffect(() => {
    getUserData();
    return () => {
      crashlytics().log('Analytics Page Just Unmounted');
    };
  }, []);

  const backBtnPressed = () => {
    crashlytics().log('Analytics Page Just Mounted');
    navigation.navigate('HomeScreen');
  };

  return (
    <GradientBackground>
    <View style={styles.root}>
    <View style={styles.details}>
      <View style={styles.row}>
        <Text style={styles.text1}>Name: </Text>
        <Text style={styles.text2}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>Phone No:</Text>
        <Text style={styles.text2}>{phoneNumber}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>Email Id: </Text>
        <Text style={styles.text2}>{email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>Address: </Text>
        <Text style={styles.text2}>{address}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>Location: </Text>
        <Text style={styles.text2}>{location}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>Company: </Text>
        <Text style={styles.text2}>{company}</Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          text="Back to Home"
          type="Tertiary"
          onPress={backBtnPressed}
          style={{alignItems: 'center'}}
        />
      </View>
      </View>
    </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
   
  },
  details: {
    backgroundColor: theme.bgWhite(0.3),
    height: "50%",
    borderRadius: 20,
    margin: '10%',

  },
  row: {
    flexDirection: 'row',
    margin: 10,
    
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 10,
  },
  text1: {
    fontSize: 18,
    color: 'black',
  },
  text2: {
    marginLeft: 20,
    fontSize: 18,
    color: 'black',

  },
});

export default ProfileScreen;
