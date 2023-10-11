import {StyleSheet} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
  },
  greet: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginHorizontal: '5%',
  },
  todo: {
    backgroundColor: theme.bgWhite(0.3),
    padding: '3%',
    borderRadius: 15,
    margin: '10%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  menu: {
    width: '50%',
    borderRadius: 25,
    backgroundColor: theme.bgWhite(0.3),
  },
});
