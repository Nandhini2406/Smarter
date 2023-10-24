import {StyleSheet} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 20,
    // marginVertical: 100,
  },
  calendar: {
    backgroundColor: theme.bgWhite(0.3),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
});
