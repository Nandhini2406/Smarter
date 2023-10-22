import firebase from 'firebase/app';
import 'firebase/messaging'; // For push notifications
import 'firebase/analytics'; // For analytics
import 'firebase/crashlytics'; // For Crashlytics

const firebaseConfig = {
  apiKey: 'AIzaSyBPNWn6K5XnqUAL0x9FzWrZC5_bqSToo6A',
  authDomain: 'smarter-e24e6.firebaseapp.com',
  projectId: 'smarter-e24e6',
  storageBucket: 'smarter-e24e6.appspot.com',
  messagingSenderId: '158552171805',
  appId: '1:158552171805:android:55842b26b119620c4f2df4',
  measurementId: 'YOUR_MEASUREMENT_ID', // For analytics
};

// Initialize Firebase
// if(firebase.apps.)÷
firebase.initializeApp(firebaseConfig);

firebase.analytics();
firebase.crashlytics();

export default firebase;
