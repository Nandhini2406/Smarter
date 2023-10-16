import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import crashlytics from '@react-native-firebase/crashlytics';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import {fetchUserData} from '../../../Services/asyncService/fetchUserData';
import {styles} from './styles';

const ProfileScreen = () => {

  const navigation = useNavigation();
  const [userData, setUserData] = useState({});

  const loadUserData = async () => {
    const user = await fetchUserData();
    setUserData(user);
  };

  useEffect(() => {
    loadUserData();
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
            <Text style={styles.text2}>{userData.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text1}>Phone No:</Text>
            <Text style={styles.text2}>{userData.phoneNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text1}>Email Id: </Text>
            <Text style={styles.text2}>{userData.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text1}>Address: </Text>
            <Text style={styles.text2}>{userData.address}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text1}>Location: </Text>
            <Text style={styles.text2}>{userData.location}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text1}>Company: </Text>
            <Text style={styles.text2}>{userData.company}</Text>
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

export default ProfileScreen;