// import { View, Text } from 'react-native'
// import React from 'react'

// const PayScreen = () => {
//   return (
//     <GradientBackground>
//     <View>
//       <Text>PayScreen</Text>
//     </View>
//     </GradientBackground>
//   )
// }

// export default PayScreen



//Tired Pager-view
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PagerView from 'react-native-pager-view';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';

const PayScreen = () => {
  return (
    <GradientBackground>
      <PagerView style={styles.pagerView} initialPage={0}>
        <Text style={[styles.view, {marginVertical: 100}]}> PAGER VIEW TESTING</Text>
        <View key="1" style={styles.view}>
          <Text style={styles.text}>First page</Text>
        </View>
        <View key="2" style={styles.view}>
          <Text style={styles.text}>Second page</Text>
        </View>
        <View key="3" style={styles.view}>
          <Text style={styles.text}>third page</Text>
        </View>
      </PagerView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'royalblue',
    padding: 20,
    borderRadius: 10,
  },
});

export default PayScreen;
