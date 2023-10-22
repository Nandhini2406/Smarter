import {StyleSheet} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.bgWhite(0.3),
    marginHorizontal: 20,
    marginVertical: '55%',
    height: 350,
    borderRadius: 20,
  },
  display: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-end',
    margin: 10,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  symbol: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff',
    padding: 10,
    margin: 5,
    backgroundColor: theme.bgWhite(0.3),
  },
});
