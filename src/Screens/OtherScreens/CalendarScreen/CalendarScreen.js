import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-toggle-calendar';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import {styles} from './styles';

const CalendarScreen = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Calendar current={currentDate} style={styles.calendar} />
      </View>
    </GradientBackground>
  );
};

export default CalendarScreen;
