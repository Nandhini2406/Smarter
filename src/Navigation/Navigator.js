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
import CalendarScreen from '../Screens/OtherScreens/CalendarScreen/CalendarScreen';

import {checkAuthentication} from '../Services/asyncService/Authentication';
import {
  requestUserPermission,
  notificationListner,
} from '../Services/PushNotification/notificationService';

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

  const checkAuth = async () => {
    try {
      const isAuthenticated = await checkAuthentication();
      setAuthenticated(isAuthenticated);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestUserPermission();
    notificationListner();
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
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="BottomTabBar" component={DrawerNavigation} />
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
        <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
