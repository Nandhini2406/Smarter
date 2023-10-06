import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import notifee from '@notifee/react-native';
import analytics from '@react-native-firebase/analytics';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import { theme } from '../../../Assets/colors/bgTheme';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  console.log('HomeScreen');

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

  const crashtBtnPressed = () => {
    throw new Error('Test Crash');
  };

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

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
        smallIcon: 'ic_stat', // optional, defaults to 'ic_launcher'.
        color: '#A6DEFF',
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

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
    <GradientBackground>
    <View style={styles.root}>
      <Text style={styles.text}>Hello {name} !</Text>
      <View style={styles.menu}>
        <CustomButton
          text="Test Crash"
          type="Tertiary"
          onPress={crashtBtnPressed}
        />
        <CustomButton
          text="FGnotification"
          type="Tertiary"
          onPress={onDisplayNotification}
        />
        <CustomButton
          text="Analytics Test"
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
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 15,
    width: '50%',
    

  },
  menu: {
    
    width: '50%',
    borderRadius: 25,
    margin: "50%",
    backgroundColor: theme.bgWhite(0.3),
  },
});

export default HomeScreen;
