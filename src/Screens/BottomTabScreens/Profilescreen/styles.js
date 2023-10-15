import { StyleSheet } from "react-native";
import { theme } from '../../../Assets/colors/bgTheme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  details: {
    backgroundColor: theme.bgWhite(0.3),
    height: '50%',
    borderRadius: 20,
    margin: '10%',
  },
  row: {
    flexDirection: 'row',
    margin: 10,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 10,
  },
  text1: {
    fontSize: 18,
    color: 'black',
  },
  text2: {
    marginLeft: 20,
    fontSize: 18,
    color: 'black',
  },
});
