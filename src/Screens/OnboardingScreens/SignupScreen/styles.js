import {StyleSheet} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: '5%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    margin: '1%',
  },
  errorMsg: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  text: {
    margin: '1%',
    color: 'white',
    fontSize: 16,
  },
});
