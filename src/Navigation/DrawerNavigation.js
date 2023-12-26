import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
//Screens in drawer
import ActivityScreen from '../Screens/DrawerScreens/ActivityScreen';
import Categories from '../Screens/DrawerScreens/Categories';
import Notification from '../Screens/DrawerScreens/Notification';
import Settings from '../Screens/DrawerScreens/Settings';
import LoginScreen from '../Screens/OnboardingScreens/LoginScreen/LoginScreen';
import BottomTabBar from './BottomTabBar';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabBar"
      drawerContent={props => <CustomDrawer {...props} />}
      article
      receipt-long
      screenOptions={({route}) => ({
        swipeEdgeWidth: 100,
        // drawerStyle: {width: 300},
        headerShown: false,
        drawerActiveBackgroundColor: '#b721ff',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#b721ff',
        // drawerHideStatusBarOnOpen: true,
        // drawerStatusBarAnimation: 'fade',
        drawerLabelStyle: {marginLeft: -20, fontSize: 18},
        drawerIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'ActivityScreen') {
            iconName = 'article';
          } else if (route.name === 'Categories') {
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
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          drawerLabel: 'Activity',
        }}
      />
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          drawerLabel: 'Categories',
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
