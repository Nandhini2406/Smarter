import {StyleSheet} from 'react-native';
import {theme} from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: '1%',
    marginHorizontal: 10,
    padding: 10,

    borderColor: 'white',
    borderBottomWidth: 1,
    borderRadius: 15,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  details: {
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 5,
    maxWidth: 200,
  },
  prize: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  rate: {
    fontSize: 18,
    marginTop: 5,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    width: 40,
    borderRadius: 5,
  },
  flatlist: {
    marginVertical: '5%',
  },
});
