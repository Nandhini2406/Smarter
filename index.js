/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import crashlytics from '@react-native-firebase/crashlytics';
import {name as appName} from './app.json';

if (!firebase.apps.length) {
  firebase.initializeApp();
}
if (!__DEV__) {
  crashlytics().setCrashlyticsCollectionEnabled(true);
}
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent(appName, () => App);
