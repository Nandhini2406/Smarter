import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../Components/CustomButton/CustomButton';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
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
        console.error('Error retrieving user data:', error);
      }
    };
    getUserData();
  }, []);

  const backBtnPressed = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.root}>
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
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 20,
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
  },
  text2: {
    marginLeft: 20,
    fontSize: 18,
  },
});

export default ProfileScreen;
