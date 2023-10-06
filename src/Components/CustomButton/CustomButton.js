import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { theme } from '../../Assets/colors/bgTheme';

const CustomButton = ({onPress, text, type = 'Primary'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  container_Primary: {
    width: '70%',
    margin: '2%',
    padding: '2%',
    alignItems: 'center',
    //backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: theme.bgWhite(0.3),
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container_Tertiary: {
    margin: '5%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  text_Tertiary: {
    fontSize: 14,
    color: 'white',
  },
});

export default CustomButton;
