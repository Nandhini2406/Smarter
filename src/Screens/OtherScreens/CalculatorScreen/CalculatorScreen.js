import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import {styles} from './styles';

const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClear = () => {
    setDisplayValue('0');
  };

  const handlePress = value => {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      setDisplayValue(displayValue + value);
    } else {
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };
  // const handlePress = value => {
  //   setDisplayValue(displayValue === '0' ? value : displayValue + value);
  // };

  const handleCalculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.display}>{displayValue}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress('1')}
            style={styles.button}>
            <Text style={styles.symbol}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('2')}
            style={styles.button}>
            <Text style={styles.symbol}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('3')}
            style={styles.button}>
            <Text style={styles.symbol}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress('4')}
            style={styles.button}>
            <Text style={styles.symbol}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('5')}
            style={styles.button}>
            <Text style={styles.symbol}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('6')}
            style={styles.button}>
            <Text style={styles.symbol}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress('7')}
            style={styles.button}>
            <Text style={styles.symbol}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('8')}
            style={styles.button}>
            <Text style={styles.symbol}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('9')}
            style={styles.button}>
            <Text style={styles.symbol}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleClear} style={styles.button}>
            <Text style={styles.symbol}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('0')}
            style={styles.button}>
            <Text style={styles.symbol}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCalculate} style={styles.button}>
            <Text style={styles.symbol}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handlePress('+')}
            style={styles.button}>
            <Text style={styles.symbol}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('-')}
            style={styles.button}>
            <Text style={styles.symbol}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('*')}
            style={styles.button}>
            <Text style={styles.symbol}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('/')}
            style={styles.button}>
            <Text style={styles.symbol}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
};

export default CalculatorScreen;
