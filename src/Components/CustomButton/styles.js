import {StyleSheet} from 'react-native';
import {theme} from '../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  container: {
    width: '70%',
    margin: '3%',
    padding: '3%',
    alignItems: 'center',
  },
  container_Primary: {
    width: '80%',
    margin: '3%',
    padding: '2%',
    alignItems: 'center',

    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.bgWhite(0.8),

    backgroundColor: theme.bgWhite(0.3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container_Tertiary: {
    margin: '1%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  text_Tertiary: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
