import {StyleSheet} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    margin: '1%',
  },
  text: {
    margin: '1%',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: '5%',
  },
  errorMsg: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
});
