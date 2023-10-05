import React, {Children} from 'react';
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../Assets/Images/BgImg.png')}
      style={styles.img}>
     {children}
    </ImageBackground>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
	flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    // height: 40,
    // margin: 12,
    borderWidth: 2,
    padding: 10,
    //color: 'white',
    fontSize: 20,
  },
});
