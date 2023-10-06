// GradientBackground.js

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={['#b721ff', '#21d4fd']}
      style={styles.backgroundGradient}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
  },
});

export default GradientBackground;
