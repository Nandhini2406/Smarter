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
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  calendar: {
    //backgroundColor: theme.bgWhite(0.3),
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
