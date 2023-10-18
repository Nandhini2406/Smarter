import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firebase from '@react-native-firebase/app';

import WelcomeScreen from '../Screens/OnbroadingScreens/WelcomeScreen/WelcomeScreen';
import SignupScreen from '../Screens/OnbroadingScreens/SignupScreen/SignupScreen';
import UserDetailsScreen from '../Screens/OnbroadingScreens/UserDetailsScreen/UserDetailsScreen';
import LoginScreen from '../Screens/OnbroadingScreens/LoginScreen/LoginScreen';
import SetPassword from '../Screens/OnbroadingScreens/SetPassword/SetPassword';
import DrawerNavigation from './DrawerNavigation';
import TodoScreen from '../Screens/BottomTabScreens/TodoScreen/TodoScreen';
import ProductsScreen from '../Screens/OtherScreens/ProductsScreen/ProductsScreen';
import ProductDetailScreen from '../Screens/OtherScreens/ProductDetailScreen/ProductDetailScreen';
import CalculatorScreen from '../Screens/OtherScreens/CalculatorScreen/CalculatorScreen';

import {checkAuthentication} from '../Services/asyncService/Authentication';
import {
  requestUserPermission,
  getFCMToken,
  notificationListner,
} from '../Components/PushNotification/Pushnotification';


const Stack = createStackNavigator();
if (!firebase.apps.length) {
  firebase.initializeApp();
}

const Navigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // const linking = {
  //   prefixes: ['https://smarterapp.com'],
  //   config: {
  //     initialRouteName: 'Home',
  //     screens: {
  //       Home: 'home',
  //       LoginScreen: 'login',
  //     },
  //   },
  // };
  useEffect(() => {
    // const handleUrl = async event => {
    //   const url = event.url;
    //   const route = url.replace(/.*?:\/\//g, '');
    //   if (route === 'login') {
    //      navigation.navigate('LoginScreen');
    //   }
    // };
    // Linking.addEventListener('url', handleUrl);
    // Don't forget to clean up the event listener when the component unmounts
    // return () => {
    //   Linking.removeEventListener('url', handleUrl);
    // };
    // linking={linking}

    requestUserPermission();
    getFCMToken();
    notificationListner();

    const checkAuth = async () => {
      try {
        const isAuthenticated = await checkAuthentication();
        setAuthenticated(isAuthenticated);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="skyblue" />
      </View>
    );
  }

  return (
    <NavigationContainer
      fallback={
        <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          Loading...
        </Text>
      }>
      <Stack.Navigator
        initialRouteName={authenticated ? 'BottomTabBar' : 'WelcomeScreen'}
        // headerMode="screen" // Remove the header to make room for Drawer
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{title: 'Sign up'}}
        />
        <Stack.Screen
          name="UserDetailsScreen"
          component={UserDetailsScreen}
          options={{title: 'User Details', headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name="SetPassword"
          component={SetPassword}
          options={{title: 'Reset'}}
        />
        <Stack.Screen
          name="BottomTabBar"
          component={DrawerNavigation} // Use DrawerNavigation as a screen
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="TodoScreen"
          component={TodoScreen}
          options={{title: 'Todo'}}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={{title: 'Products'}}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{title: 'Product Details'}}
        />
        <Stack.Screen
          name="CalculatorScreen"
          component={CalculatorScreen}
          options={{title: 'CalculatorScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
