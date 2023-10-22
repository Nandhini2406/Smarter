import {View, Text, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import Icon from 'react-native-vector-icons/MaterialIcons';
import notifee, { AndroidImportance } from '@notifee/react-native';

import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import {fetchUserData} from '../../../Services/asyncService/fetchUserData';
import { showForegroundNotification } from '../../../Services/PushNotification/notificationService';
import {styles} from './styles';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({});

  const loadUserData = async () => {
    const user = await fetchUserData();
    console.log(`Current user name ${user.name}`);
    setUserData(user);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const crashtBtnPressed = () => {
    throw new Error('Test Crash');
  };

  // async function onDisplayNotification() {
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission();
  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });
  //   console.log('channel ID.....', channelId)
  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: 'Smarter',
  //     body: 'Successful Login',
  //     android: {
  //       channelId,
  //       smallIcon: 'ic_stat', // optional, defaults to 'ic_launcher'.
  //       color: '#A6DEFF',
  //       // pressAction is needed if you want the notification to open the app when pressed
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //   });
  // //  let test = messaging().onMessage(remoteMessage => {
  // //     console.log('A new FCM message arrived!', remoteMessage);
  // //   });
  // //   return test;
  // }

  const onDisplayNotification = async () => {
    showForegroundNotification({
      title: 'Foreground Notification',
      body: 'This is a foreground notification.',
      data: {
        // Custom data for your notification, if needed
      },
    });
  }

  const handleTodoList = () => {
    navigation.navigate('TodoScreen');
  };
  const handleProducts = () => {
    navigation.navigate('ProductsScreen');
  };
  const handleCalculator = () => {
    navigation.navigate('CalculatorScreen');
  };


  return (
    <GradientBackground>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.root}>
            <Text style={styles.greet}>Hello {userData.name} !</Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: '10%',
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={handleTodoList}>
                <View style={styles.todo}>
                  <Icon name="checklist" size={50} color="white" />
                  <Text style={styles.text}> ToDo List </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleProducts}>
                <View style={styles.todo}>
                  <Icon name="shop-2" size={50} color="white" />
                  <Text style={styles.text}> Products</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginBottom: '10%'}}>
              <TouchableOpacity onPress={handleCalculator}>
                <View style={styles.todo}>
                  <Icon name="calculate" size={50} color="white" />
                  <Text style={styles.text}>Calculator</Text>
                </View>
              </TouchableOpacity>
            </View>
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
        </SafeAreaView>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
