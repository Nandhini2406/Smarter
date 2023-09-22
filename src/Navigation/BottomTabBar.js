import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
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
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Pay') {
              iconName = focused ? 'rupee' : 'rupee';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'shopping-basket' : 'shopping-basket';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user-circle-o' : 'user-circle-o';
            }
            return <FontAwesome 
            name={iconName} 
            size={size} 
            color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'grey',
          labelStyle: {padding: 2},
        }}
        >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{tabBarLabel: 'Home', title: '', headerShown: false}}
        />
        <Tab.Screen name="Pay" component={PayScreen} 
        options={{tabBarLabel: 'Pay', title: '', headerShown: false}}
        />
        <Tab.Screen name="Shop" component={ShopScreen} 
        options={{tabBarLabel: 'Shop', title: '', headerShown: false}}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{tabBarLabel: 'Profile', title: '', headerShown: false}}
        />
      </Tab.Navigator>
  );
};

export default BottomTabBar;
