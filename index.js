import {AppRegistry} from 'react-native';
import App from './App';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';

if (!firebase.apps.length) {
  firebase.initializeApp();
}
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent(appName, () => App);