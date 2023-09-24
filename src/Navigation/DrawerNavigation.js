import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens in drawer
import Bills from '../Screens/DrawerScreens/Bills';
import FindAStore from '../Screens/DrawerScreens/FindAStore';
import Notification from '../Screens/DrawerScreens/Notification';
import Settings from '../Screens/DrawerScreens/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Bills"
          component={Bills}
          options={{title: ''}}/>
      <Drawer.Screen name="Find Store"
          component={FindAStore}
          options={{title: ''}}/>
      <Drawer.Screen name="Notification"
          component={Notification}
          options={{title: ''}}/>
      <Drawer.Screen name="Settings"
          component={Settings}
          options={{title: ''}}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation