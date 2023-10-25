import {StyleSheet} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    marginTop: '20%',
  },
  greet: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    margin: '5%',
  },
  errorMsg: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
  },
  password: {
    flexDirection: 'row',
    height: '6%',
    borderRadius: 15,
    width: '80%',
    margin: '2%',
  },
  input: {
    padding: '3%',
    width: '100%',
    backgroundColor: theme.bgWhite(0.3),
    borderRadius: 15,
    color: 'white',
    fontSize: 17,
  },
});
