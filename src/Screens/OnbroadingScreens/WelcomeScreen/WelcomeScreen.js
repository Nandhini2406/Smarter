import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import {theme} from '../../../Assets/colors/bgTheme';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const loginButtonPressed = () => {
    navigation.navigate('LoginScreen');
  };
  const SignupButtonPressed = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Smarter</Text>
        <CustomButton text="Log in" onPress={loginButtonPressed} />
        <CustomButton text="Sign up" onPress={SignupButtonPressed} />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontWeight: '500',
    color: 'black',
    fontSize: 30,
    marginBottom: 100,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 100,
  },
});

export default WelcomeScreen;
