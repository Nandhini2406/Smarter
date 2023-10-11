import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

const widthStyle = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
  },
  welcome: {
    fontWeight: '500',
    color: 'black',
    fontSize: 30,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  slide:{
    alignItems: 'center',
  },
  images:{
    height: widthStyle,
    width: widthStyle,
  },
  title:{
    marginTop: '5%',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  description:{
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    textAlign:'center',
  }, 
  text: {
    margin: '1%',
    color: 'white',
    fontSize: 16,
  },
});
