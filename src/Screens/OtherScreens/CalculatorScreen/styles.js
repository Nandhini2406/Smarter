import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    display: {
      fontSize: 24,
      marginBottom: 10,
      alignSelf: 'flex-end',
      color: 'white',
    },
    row: {
      flexDirection: 'row',
    },
    symbol:{
color: 'white',
fontSize: 20,
fontWeight: 'bold',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      margin: 5,
    },
  });