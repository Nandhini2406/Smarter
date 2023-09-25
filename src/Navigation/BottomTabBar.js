import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'grey',
        
       tabBarStyle: {height:60, padding: 10},
        headerShown: false,
        tabBarLabelStyle: {fontSize: 14, paddingBottom:5, fontWeight:'bold'},
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
        options={{tabBarLabel: 'Pay', title: 'Pay', headerShown: false}}
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
