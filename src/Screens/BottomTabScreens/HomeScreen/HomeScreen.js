import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee from '@notifee/react-native';
import analytics from '@react-native-firebase/analytics';

import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {theme} from '../../../Assets/colors/bgTheme';

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

  const handleTodoList = () => {
    navigation.navigate('TodoScreen');
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
    <ScrollView>
      <GradientBackground>
        <View style={styles.root}>
          <Text style={styles.greet}>Hello {name} !</Text>
          <TouchableOpacity onPress={handleTodoList}>
            <View style={styles.todo}>
              <Icon name="checklist" size={50} color="white" />
              <Text style={styles.text}> ToDo List </Text>
            </View>
          </TouchableOpacity>
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
    </ScrollView>
  );
};

export default HomeScreen;
