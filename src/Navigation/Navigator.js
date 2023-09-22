import {View, ActivityIndicator, Text, FlatListComponent} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import UserDetailsScreen from '../Screens/UserDetailsScreen/UserDetailsScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SetPassword from '../Screens/SetPassword/SetPassword';
import BottomTabBar from './BottomTabBar';

import {Linking} from 'react-native';

const Stack = createStackNavigator();

const Navigator = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  // const navigation = useNavigation();

  const linking = {
    prefixes: ['https://smarterapp.com'],
    config: {
      initialRouteName: 'Home',
      screens: {
        Home: 'home',
        LoginScreen: 'login',
      },
    },
  };
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('savedEmail');
        const userName = await AsyncStorage.getItem('userName');
        const userKeys = await AsyncStorage.getAllKeys();
        //await AsyncStorage.clear()
        console.log(`User Keys in asyncStorage.... [${userKeys}]`);
        console.log(`User email.... ${savedEmail}`);
        console.log(`User Name.... ${userName}`);

        if (savedEmail) {
          // User is authenticated
          setAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setLoading(false);
      }
    };

    const handleUrl = async event => {
      const url = event.url;
      const route = url.replace(/.*?:\/\//g, '');

      if (route === 'login') {
        // navigation.navigate('LoginScreen');
      }
    };

    Linking.addEventListener('url', handleUrl);
    checkAuthentication();

    // Don't forget to clean up the event listener when the component unmounts
    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName={authenticated ? 'BottomTabBar' : 'WelcomeScreen'}>
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
          options={{title: 'User Details'}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="SetPassword"
          component={SetPassword}
          options={{title: 'Reset'}}
        />
        <Stack.Screen
          name="BottomTabBar"
          component={BottomTabBar}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
