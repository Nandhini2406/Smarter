import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const CustomButton = ({onPress, text, type = 'Primary'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
