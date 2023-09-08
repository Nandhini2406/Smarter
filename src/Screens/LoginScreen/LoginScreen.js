import { View, Text, StyleSheet, Alert, Button} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../Components/CustomTextInput/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
//import Icon from 'react-native-vector-icons'

const LoginScreen = () => {
  
  const navigation = useNavigation();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ viewPassword, setViewPassword ] = useState(false);
  const [ loginError, setLoginError ] = useState(null);
  let name = '';
  
  const loginBtnPressed = async() => {

    try {
      // Generate the user key based on the email
      const userKey = `user_${email}`;

      // Retrieve the user data using the user key
      const userData = await AsyncStorage.getItem(userKey);

      if (userData) {
        const user = JSON.parse(userData);

        if (user.password === password && user.email === email) {
          //const userEmail = email; 
          await AsyncStorage.setItem('savedEmail', email);
          console.log('savedEmail', email);
          setLoginError(null);
          console.log('Authentication successful');
          Alert.alert('Authentication successful')
          navigation.navigate('HomeScreen');
          let savedName = user.name
          await AsyncStorage.setItem('userName', savedName);
          console.log(`savedName.... ${savedName}`);
        } else {
          setLoginError('Invalid email or password. Please try again.');
          console.log('Try Again...Authentication failed');
        }
      } else {
        setLoginError('User not found.');
        console.log('Authentication failed...User not found');
      }
    }catch(error){
      console.error('Error in authentication:', error);
    }
  }
  
  const forgotPasswordBtnPressed = () => {
    navigation.navigate('SetPassword');
  };
  const signupBtnPressed = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.root}>
      <CustomInput placeholder='Email Address' 
      setvalue={(text) => setEmail(text)}
      value={email} 
      autoCapitalize='none'/>
      <View style={styles.password}>
        <CustomInput placeholder='Password' 
        setvalue={(text) => setPassword(text)} 
        value={password} 
        secureTextEntry={viewPassword}/>
      </View>
      {loginError && <Text style={styles.errorMsg}>{loginError}</Text>}
      <CustomButton text="Login" onPress={loginBtnPressed}  />
      <CustomButton text="Sign up" onPress={signupBtnPressed}  />
      <CustomButton text="Forgot Password?" type='Tertiary' onPress={forgotPasswordBtnPressed} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    fontSize: 10,
    color: 'red',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
  password: {
    flexDirection: 'row'
  },
});

export default LoginScreen   