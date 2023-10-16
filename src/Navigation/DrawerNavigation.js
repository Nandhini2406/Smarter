import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialIcons';

//Screens in drawer
import Bills from '../Screens/DrawerScreens/Bills';
import FindAStore from '../Screens/DrawerScreens/FindAStore';
import Notification from '../Screens/DrawerScreens/Notification';
import Settings from '../Screens/DrawerScreens/Settings';
import BottomTabBar from './BottomTabBar';
import ProfileScreen from '../Screens/BottomTabScreens/Profilescreen/ProfileScreen';
import LoginScreen from '../Screens/OnbroadingScreens/LoginScreen/LoginScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabBar"
      article
      receipt-long
      screenOptions={{
        drawerStyle: {
          width: 250,
        },
        // headerShown: false,
        drawerActiveBackgroundColor: '#b721ff',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#b721ff',
        drawerLabelStyle: {marginLeft: -20, fontSize: 18},
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={BottomTabBar} // You can use BottomTabBar as the home screen
        options={{ 
          title: 'Smarter',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: '#ff0066',
          drawerLabelStyle: {fontSize: 25, fontWeight: 'bold'},
        }}
      />
      <Drawer.Screen
        name="Bills"
        component={Bills}
        options={{
          title: 'Bills',
          drawerLabel: 'Bills',
          drawerIcon: ({focused, color, size}) => (
            <Icons name="article" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Find Store"
        component={FindAStore}
        options={{
          title: 'Find Store',
          drawerLabel: 'Find Store',
          drawerIcon: ({focused, color, size}) => (
            <Icons name="storefront" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
          drawerLabel: 'Notification',
          drawerIcon: ({focused, color, size}) => (
            <Icons name="notifications-active" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerLabel: 'Profile',
          drawerIcon: ({focused, color, size}) => (
            <Icons name="manage-accounts" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          drawerLabel: 'Settings',
          drawerIcon: ({focused, color, size}) => (
            <Icons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="LogIn"
        component={LoginScreen}
        options={{
          title: 'Log-Out',
          drawerLabel: 'Log-Out',
          drawerIcon: ({focused, color, size}) => (
            <Icons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
