import {Alert, AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// messaging().onMessage(async remoteMessage => {
//       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     });
AppRegistry.registerComponent(appName, () => App);