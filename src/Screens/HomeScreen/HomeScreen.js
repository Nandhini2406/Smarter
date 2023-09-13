import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../Components/CustomButton/CustomButton';
import notifee from '@notifee/react-native';
import analytics from '@react-native-firebase/analytics';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  console.log('HomeScreen')

  useEffect(() => {
    const getUserName = async () => {
      try { 
        const savedName = await AsyncStorage.getItem('userName');
        console.log(`Current UserName: ${savedName}`);
        const allKeys = await AsyncStorage.getAllKeys();
        console.log(`All keys...: ${allKeys}`);

        if (savedName) {
          setName(savedName);
        }
      } catch (error) {
        // Error retrieving data
        console.log('error' + error);
      }
    };
    getUserName();
  }, [name]);
  
  const viewProfilePressed = () => {
    navigation.navigate('ProfileScreen');
  };
  const logOutBtnPressed = () => {
    console.log(`User logged out`);
    navigation.navigate('LoginScreen');
  };

  const crashtBtnPressed = () => {
    throw new Error('Test Crash');
  };

    async function onDisplayNotification() {
      // Request permissions (required for iOS)
      await notifee.requestPermission()
  
      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
  
      // Display a notification
      await notifee.displayNotification({
        title: 'Smarter',
        body: 'Successful Login',
        android: {
          channelId,
          smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
        },
      });
    };


  

  // const retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem();
  //       console.log(value)
  //     } catch (error) {
  //       // Error retrieving data
  //       console.log('error'+ error)
  //     }
  //   };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Welcome {name} !</Text>
      <View style={styles.menu}>
        <CustomButton
          text="View Profile"
          type="Tertiary"
          onPress={viewProfilePressed}
        />
        <CustomButton
          text="Log Out"
          type="Tertiary"
          onPress={logOutBtnPressed}
        />
         <CustomButton
          text="Test Crash"
          type="Tertiary"
          onPress={crashtBtnPressed}
        />
        <CustomButton
          text='FGnotification'
          type="Tertiary"
          onPress={onDisplayNotification}
        />
        <CustomButton
          text='Analytics Test'
          type="Tertiary"
          onPress={async () =>
            await analytics().logEvent('basket', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
              
            })
          }
        />
      </View>
     </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-center',
    flexDirection: 'row',
  },
  text: {
    color: 'purple',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 15,
  },
  menu: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginHorizontal: 50,
  },
});

export default HomeScreen;