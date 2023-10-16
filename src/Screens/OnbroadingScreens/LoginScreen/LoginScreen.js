import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../../Components/CustomTextInput/CustomInput';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import {styles} from './styles';

import {authenticateUser} from '../../../Services/asyncService/Authentication';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewPassword, setViewPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const loginBtnPressed = async () => {
    try {
      const result = await authenticateUser(email, password);

      if (result.success) {
        const user = result.user;
        await AsyncStorage.setItem('userName', user.name);
        console.log(`Authenticated User Name.... ${user.name}`);

        Alert.alert('Authentication successful');
        navigation.navigate('BottomTabBar');
      } else {
        setLoginError(result.error);
        console.log('Authentication failed:', result.error);
      }
    } catch (error) {
      console.error('Error in authentication:', error);
    }
  };
  const toggleShowPassword = () => {
    setViewPassword(!viewPassword);
  };

  const forgotPasswordBtnPressed = () => {
    navigation.navigate('SetPassword');
  };
  const signupBtnPressed = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <ScrollView>
      <GradientBackground>
        <View style={styles.root}>
          <Text style={styles.greet}>Login</Text>
          <Image
            source={require('../../../Assets/Images/Settings.png')}
            style={{height: '25%', width: '50%'}}
          />
          <CustomInput
            placeholder="Email Address"
            setvalue={text => setEmail(text)}
            value={email}
            autoCapitalize="none"
          />
          <View style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!viewPassword}
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TouchableOpacity
              style={{position: 'absolute', right: 12}}
              onPress={toggleShowPassword}>
              <FontAwesome
                name={viewPassword ? 'eye' : 'eye-slash'}
                size={28}
                color="white"
                style={{padding: 9}}
              />
            </TouchableOpacity>
          </View>
          {loginError && <Text style={styles.errorMsg}>{loginError}</Text>}
          <CustomButton text="Login" onPress={loginBtnPressed} />
          <CustomButton text="Sign up" onPress={signupBtnPressed} />
          <CustomButton
            text="Forgot Password?"
            type="Tertiary"
            onPress={forgotPasswordBtnPressed}
          />
        </View>
      </GradientBackground>
    </ScrollView>
  );
};

export default LoginScreen;
