import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import Navigator from './src/Navigation/Navigator';
import {
  requestUserPermission,
  getFCMToken,
  notificationListner,
} from './src/Components/PushNotification/Pushnotification';
import crashlytics from '@react-native-firebase/crashlytics';
import SplashScreen from 'react-native-splash-screen';
import {Platform, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';
import store from './src/Redux/store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();

    requestUserPermission();
    getFCMToken();
    notificationListner();
    console.log('Hello world');
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <View>
//       <Text>
//         Welcome Nandhini
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
