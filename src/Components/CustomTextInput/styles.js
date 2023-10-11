import {StyleSheet} from 'react-native';
import {theme} from '../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: '6%',

    margin: '2%',
    padding: '3%',
    alignItems: 'center',

    backgroundColor: theme.bgWhite(0.3),
    color: 'white',

    borderRadius: 15,
    fontSize: 18,
    fontWeight: '400',
  },
});
