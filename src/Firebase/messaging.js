import messaging from '@react-native-firebase/messaging';

// Note that an async function or a function that returns a Promise 
// is required for both subscribers.
export async function onMessageReceived(message) {
  // Do something
  console.log('Notification received successfully',message);
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);