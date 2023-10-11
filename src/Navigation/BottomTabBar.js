import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../Assets/colors/bgTheme';
//Bottom TabBar Screens
import HomeScreen from '../Screens/BottomTabScreens/HomeScreen/HomeScreen';
import PayScreen from '../Screens/BottomTabScreens/PayScreen/PayScreen';
import ShopScreen from '../Screens/BottomTabScreens/ShopScreen/ShopScreen';
import ProfileScreen from '../Screens/BottomTabScreens/Profilescreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          height: 60,
          backgroundColor: 'transparent',
          position: 'absolute',
        },
        headerShown: false,
        tabBarActiveBackgroundColor: 'white',
        tabBarItemStyle: {height: 50, padding: 3, borderRadius: 50},

        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'PayScreen') {
            iconName = focused ? 'rupee' : 'rupee';
          } else if (route.name === 'ShopScreen') {
            iconName = focused ? 'shopping-basket' : 'shopping-basket';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'user-circle-o' : 'user-circle-o';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarLabel: 'Home', title: '', headerShown: false}}
      />
      <Tab.Screen
        name="PayScreen"
        component={PayScreen}
        options={{tabBarLabel: 'Pay', title: 'Pay'}}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{tabBarLabel: 'Shop', title: '', headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile', title: '', headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
