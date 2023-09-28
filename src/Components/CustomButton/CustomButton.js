import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

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
    width: 300,
    margin: 10,
    marginTop: 20,

    padding: 10,
    alignItems: 'center',

    backgroundColor: '#ff0066',

    borderRadius: 25,
  },
  container_Tertiary: {
    //alignItems: 'flex-end',

    //marginBottom: 0,
    marginTop: 18,

    //padding: 5,
    alignItems: 'center',
    //width : 100,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  text_Tertiary: {
    fontSize: 14,
    color: '#ff0066',
  },
});

export default CustomButton;
