import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
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
      drawerContent={props => <CustomDrawer {...props} />}
      article
      receipt-long
      screenOptions={({route}) => ({
        swipeEdgeWidth: 100 ,
        // drawerStyle: {width: 300},
        // headerShown: false,
        drawerActiveBackgroundColor: '#b721ff',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#b721ff',
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation: 'fade',
        drawerLabelStyle: {marginLeft: -20, fontSize: 18},
        drawerIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Bills') {
            iconName = 'article';
          } else if (route.name === 'Find Store') {
            iconName = 'storefront';
          } else if (route.name === 'Notification') {
            iconName = 'notifications-active';
          } else if (route.name === 'Profile') {
            iconName = 'manage-accounts';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'LogIn') {
            iconName = 'logout';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
      })}>
      <Drawer.Screen
        name="HomeScreen"
        component={BottomTabBar} // You can use BottomTabBar as the home screen
        options={{
          title: 'SMARTER',
          // drawerActiveTintColor: '#b721ff',
          // drawerInactiveTintColor: '#b721ff',
          drawerLabelStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            alignSelf: 'center',
          },
        }}
      />
      <Drawer.Screen
        name="Bills"
        component={Bills}
        options={{
          drawerLabel: 'Bills',
        }}
      />
      <Drawer.Screen
        name="Find Store"
        component={FindAStore}
        options={{
          drawerLabel: 'Find Store',
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          drawerLabel: 'Notification',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Profile',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: 'Settings',
        }}
      />
      <Drawer.Screen
        name="LogIn"
        component={LoginScreen}
        options={{
          title: 'LogIn',
          drawerLabel: 'Log-Out',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
