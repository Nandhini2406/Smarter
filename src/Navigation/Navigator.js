import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {View, ActivityIndicator, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../Screens/OnbroadingScreens/WelcomeScreen/WelcomeScreen';
import SignupScreen from '../Screens/OnbroadingScreens/SignupScreen/SignupScreen';
import UserDetailsScreen from '../Screens/OnbroadingScreens/UserDetailsScreen/UserDetailsScreen';
import LoginScreen from '../Screens/OnbroadingScreens/LoginScreen/LoginScreen';
import SetPassword from '../Screens/OnbroadingScreens/SetPassword/SetPassword';
import DrawerNavigation from './DrawerNavigation';
import TodoScreen from '../Screens/BottomTabScreens/TodoScreen/TodoScreen';
import ProductsScreen from '../Screens/BottomTabScreens/ProductsScreen/ProductsScreen';
import ProductDetailScreen from '../Screens/BottomTabScreens/ProductDetailScreen/ProductDetailScreen';

import { checkAuthentication } from '../Services/asyncService/Authentication';

const Stack = createStackNavigator();

const Navigator = () => {
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
        <ActivityIndicator size="large" color="#ff0066" />
      </View>
    );
  }

  return (
    <NavigationContainer fallback={<Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName={authenticated ? 'BottomTabBar' : 'WelcomeScreen'}
        // headerMode="none" // Remove the header to make room for Drawer
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
        {/* <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigation} // Use the DrawerNavigation component
          options={{headerShown: true, title:'Menu'}} // Hide the header for the DrawerNavigator
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
