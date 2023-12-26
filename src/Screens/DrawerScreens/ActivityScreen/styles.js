import {StyleSheet} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
  },
  inputContainer: {
    marginTop: '10%',
  },
  subHead: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '2%',
    marginLeft: '3%',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    width: '90%',
    margin: '5%',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  dropDown: {
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        width: '90%',
        margin: '5%',
  },
  chart: {
    marginTop: '8%', alignSelf: 'center', borderRadius: 10
  },
  dateText: {
    color: 'black',
    fontSize: 16,
  },
});
