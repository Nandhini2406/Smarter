import React, {useState, useEffect} from 'react';
import Navigator from './src/Navigation/Navigator';
import {
  requestUserPermission,
  getFCMToken,
  notificationListner,
} from './src/Components/PushNotification/Pushnotification';
import {Platform, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from './src/Redux/store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    requestUserPermission();
    getFCMToken();
    notificationListner();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
