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
// import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewPassword, setViewPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const name = '';

  const loginBtnPressed = async () => {
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
          Alert.alert('Authentication successful');
          navigation.navigate('BottomTabBar');
          let savedName = user.name;
          await AsyncStorage.setItem('userName', savedName);
          console.log(`savedName.... ${savedName}`);
        } else {
          setLoginError('Invalid email or password. Please try again.');
          console.log('Try Again...Authentication failed');
        }
        // let savedName = user.name;
        // await AsyncStorage.setItem('userName', savedName);
        // console.log(`savedName.... ${savedName}`);
      } else {
        setLoginError('User not found.');
        console.log('Authentication failed...User not found');
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
