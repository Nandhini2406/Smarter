import {  TextInput, StyleSheet } from 'react-native'
import React, { use} from 'react'
import { theme } from '../../Assets/colors/bgTheme'

const CustomInput = ({placeholder, value, setvalue, secureTextEntry, onBlur, autoCapitalize, numberOfLines}) => {
  return (
      <TextInput  
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={setvalue}
      secureTextEntry={secureTextEntry}
      onBlur={onBlur}
      autoCapitalize={autoCapitalize}
      numberOfLines={numberOfLines}

      />
  )
}

const styles = StyleSheet.create({
  
    input: {
      width: 300,
      margin: 10,
      padding: 10,
      
      alignItems: 'center',
    backgroundColor: theme.bgWhite(0.2),
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 15,
      color: 'white',



    }
});

export default CustomInput;