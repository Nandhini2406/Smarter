import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomButton from '../../Components/CustomButton/CustomButton'

const HomeScreen = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('')

    useEffect(() => {
      const getUserName = async () => {
        try {
         
          const savedName = await AsyncStorage.getItem('UserName');
          console.log(`Current UserName: ${savedName}`);
          setName(savedName);
        } catch (error) {
          // Error retrieving data
          console.log('error'+ error)
        }
      };
      getUserName();
    }, []);
    
    const viewProfilePressed = () =>{
      navigation.navigate('ProfileScreen')
    }
    const logOutBtnPressed = () => {
        navigation.navigate('LoginScreen');
    }
    
    // const retrieveData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem();
    //       console.log(value)
    //     } catch (error) {
    //       // Error retrieving data
    //       console.log('error'+ error)
    //     }
    //   };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Welcome {name} !</Text>
      <View style={styles.menu}> 
      <CustomButton text='View Profile' type='Tertiary' onPress={viewProfilePressed}/>
      <CustomButton text="Log Out" type='Tertiary' onPress={logOutBtnPressed} />
      </View>
      {/* <CustomButton text="See Data in console log" type='Tertiary' onPress={retrieveData} /> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
root: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-center',
  flexDirection: 'row',
},
text:{
  color: 'purple',
  fontSize: 22,
  fontStyle: 'italic',
  margin: 15, 

},
menu: {
flexDirection: 'column',
//textAlign: 'right',
alignItems: 'flex-end',
//justifyContent: 'flex-end',
marginLeft: 60,
},
});

export default HomeScreen;

