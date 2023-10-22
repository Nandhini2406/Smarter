import notifee, { AndroidImportance } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
};

const getFCMToken = async () => {
  const fcmToken = await AsyncStorage.getItem('FCMToken');
  console.log('FCM Token....', fcmToken);

  if (!fcmToken) {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const newFcmToken = await messaging().getToken();
      if (newFcmToken) {
        console.log('New FCM Token....', newFcmToken);
        await AsyncStorage.setItem('FCMToken', newFcmToken);
      }
    } catch (error) {
      console.log('Error in token...', error);
    }
  }
};

export const showForegroundNotification = async (data) => {
  // Request permissions (required for iOS)
  if (Platform.OS == 'ios') {
      await notifee.requestPermission()
  }

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
      id: data?.data?.channel_id,
      name: data?.data?.channel_name,
      // sound: data?.data?.sound_name,
      importance: AndroidImportance.HIGH,
  });

  // Display a notification
  await notifee.displayNotification({
      title: data?.notification.title,
      body: data?.notification.body,
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
};

export const notificationListner = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

   messaging().onMessage(remoteMessage => {
    console.log('A new FCM message arrived!', remoteMessage);
    // You can choose to display the notification here if needed
  });
};



// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Platform } from 'react-native';
// import notifee, { AndroidImportance } from '@notifee/react-native';

// export const requestUserPermission = async () => {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     getFCMToken();
//   }
// };

// const getFCMToken = async () => {

//   // const fcmToken = await messaging().getToken();
//   // console.log('FCM Token....', fcmToken);
  
//   const fcmToken = await AsyncStorage.getItem('FCMToken');
//   console.log('FCM Token....', fcmToken);
//   if (!fcmToken) {
//     try {
//       await messaging().registerDeviceForRemoteMessages();
//       const fcmToken = await messaging().getToken();
//       if (fcmToken) {
//         console.log('New FCM Token....', fcmToken);
//         await AsyncStorage.setItem('FCMToken', fcmToken);
//       }
//     } catch (error) {
//       console.log('Error in token...', error);
//     }
//   }
// };

// async function onDisplayNotification(data) {
//   // Request permissions (required for iOS)
//   if (Platform.OS == 'ios') {
//       await notifee.requestPermission()
//   }

//   // Create a channel (required for Android)
//   const channelId = await notifee.createChannel({
//       id: data?.data?.channel_id,
//       name: data?.data?.channel_name,
//       sound: data?.data?.sound_name,
//       importance: AndroidImportance.HIGH,
//   });

//   // Display a notification
//   await notifee.displayNotification({
//       title: data?.notification.title,
//       body: data?.notification.body,
//       android: {
//           channelId,
//           smallIcon: 'ic_stat', // optional, defaults to 'ic_launcher'.
//           color: '#A6DEFF',
//           // pressAction is needed if you want the notification to open the app when pressed
//           pressAction: {
//             id: 'default',
//           },
//       },
//   });
  
// }

// export const notificationListner = () => {
//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//     // navigation.navigate(remoteMessage.data.type);
//   });
//   messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//       }
//     });

//    messaging().onMessage(remoteMessage => {
//     console.log('A new FCM message arrived!', remoteMessage);
//     //onDisplayNotification(remoteMessage);
//   });

//   // messaging().onMessage(async remoteMessage => {
//   //   console.log(
//   //     'Notification ForeGround state..',
//   //     remoteMessage.notification,
//   //   );
//   // });

// };


// // async function onDisplayNotification() {
// //   // Request permissions (required for iOS)
// //   await notifee.requestPermission();

// //   // Create a channel (required for Android)
// //   const channelId = await notifee.createChannel({
// //     id: 'default',
// //     name: 'Default Channel',
// //   });

// //   // Display a notification
// //   await notifee.displayNotification({
// //     title: 'Smarter',
// //     body: 'Successful Login',
// //     android: {
// //       channelId,
// //       smallIcon: 'ic_stat', // optional, defaults to 'ic_launcher'.
// //       color: '#A6DEFF',
// //       // pressAction is needed if you want the notification to open the app when pressed
// //       pressAction: {
// //         id: 'default',
// //       },
// //     },
// //   });
// // }