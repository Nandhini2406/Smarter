import {View, Text} from 'react-native';
import React, {useState} from 'react';
// import {Calendar} from 'react-native-toggle-calendar';
import {Calendar} from 'react-native-calendars';
import GradientBackground from '../../../Components/ScreenBackground/GradientBackground';
import {styles} from './styles';
import {theme} from '../../../Assets/colors/bgTheme';

const CalendarScreen = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();
  return (
    <GradientBackground>
      <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
        <Calendar
          style={styles.calendar}
          enableSwipeMonths
          theme={{
            monthTextColor: 'white',
            textMonthFontWeight: 'bold',
            textMonthFontSize: 22,
            arrowColor: 'white',
            // arrowStyle:
            calendarBackground: theme.bgWhite(0.3),
            dayTextColor: 'white',
            textDayFontSize: 18,
            textInactiveColor: 'white',
            textSectionTitleColor: '#b721ff',
            textDayFontWeight: 'bold',  
            calendarBorderRadius: 10,   
          }}
        />
      </View>
    </GradientBackground>
  );
};

export default CalendarScreen;
