import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GradientBackground from '../../../Components/ScreenBackground/GradientBackground';
import { styles } from './styles';

const ActivityScreen = () => {
  const [date, setDate] = useState(new Date());
  console.log('first', date.getDate())
  const [openDate, setOpenDate] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [activities, setActivities] = useState([]);
  const [timer, setTimer] = useState([
    { label: '5 Minutes', value: '5' },
    { label: '10 Minutes', value: '10' },
    { label: '20 Minutes', value: '20' },
    { label: '30 Minutes', value: '30' },
    { label: '60 Minutes', value: '60' },
  ]);

  const [activity, setActivity] = useState([
    { label: 'Reading', value: 'reading' },
    { label: 'Coding', value: 'coding' },
    { label: 'Exercise', value: 'exercise' },
    { label: 'Learning', value: 'learning' },
  ]);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: activities.map((item) => item.value)==='learning' ? timer.map((item)=> item.value) : [],
        color: (opacity = 10) => `rgba(50, 30, 10, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['DAILY ACTIVITY'],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedActivities = await AsyncStorage.getItem('activities');
        const parsedActivities = storedActivities ? JSON.parse(storedActivities) : [];
        console.log('Activities', parsedActivities)
        setActivities(parsedActivities);
      } catch (error) {
        console.error('Error loading activities:', error);
      }
    };

    fetchData();

  }, []);

  useEffect(() => {
    const labels = activities.map((item) => item.activity);
    const data = activities.map((item) => item.timeSpent);

    setChartData({
      labels,
      datasets: [
        {
          data,
          color: (opacity = 10) => `rgba(50, 30, 10, ${opacity})`,
          strokeWidth: 2,
        },
      ],
      legend: ['DAILY ACTIVITY'],
    });
  }, [activities]);

  const handleAddActivity = async () => {
    const newActivity = {
      date: date.getDate(),
      activity: selectedActivity,
      timeSpent: parseInt(selectedTime, 10),
    };

    try {
      const storedActivities = await AsyncStorage.getItem('activities');
      const parsedActivities = storedActivities ? JSON.parse(storedActivities) : [];

      const updatedActivities = [...parsedActivities, newActivity];

      await AsyncStorage.setItem('activities', JSON.stringify(updatedActivities));

      setActivities(updatedActivities);
    } catch (error) {
      console.error('Error storing activity:', error);
    }
  };

  const data = {
    labels: activities.map((item)=> item.date),
    datasets: [
      {
        data: activities.map((item) => item.value)==='learning' ? timer.map((item)=> item.value) : [],
        color: (opacity = 10) => `rgba(50, 30, 10, ${opacity})`,
        // strokeWidth: 2,
      },
      {
        data: activities.map((item) => item.value)==='coding' ? timer.map((item)=> item.value) : [],
        color: (opacity = 20) => `rgba(250, 90, 100, ${opacity})`,
        // strokeWidth: 2,
      },
      {
        data: activities.map((item) => item.value)==='reading' ? timer.map((item)=> item.value) : [],
        color: (opacity = 5) => `rgba(100, 150, 50, ${opacity})`,
        // strokeWidth: 2,
      },
      {
        data: activities.map((item) => item.value)==='exercise' ? timer.map((item)=> item.value) : [],
        color: (opacity = 15) => `rgba(200, 150, 50, ${opacity})`,
        // strokeWidth: 2,
      },
    ],
    legend: ['DAILY ACTIVITY'],
  };

  // const data = {
  //   labels: activity.map((item)=> item.date),
  //   datasets: [
  //     {
  //       data: timer.map((item)=> item.value) ,
  //       color: (opacity = 10) => `rgba(50, 30, 10, ${opacity})`,
  //       // strokeWidth: 2,
  //     },
  //     {
  //       data: timer.map((item)=> item.value) ,

  //       // data: activities.map((item) => item.value)==='coding' ? timer.map((item)=> item.value) : [],
  //       color: (opacity = 20) => `rgba(250, 90, 100, ${opacity})`,
  //       // strokeWidth: 2,
  //     },
  //     {
  //       data: timer.map((item)=> item.value) ,
      
  //       // data: activities.map((item) => item.value)==='reading' ? timer.map((item)=> item.value) : [],
  //       color: (opacity = 5) => `rgba(100, 150, 50, ${opacity})`,
  //       // strokeWidth: 2,
  //     },
  //     {
  //       data: timer.map((item)=> item.value) ,
  //       // data: activities.map((item) => item.value)==='exercise' ? timer.map((item)=> item.value) : [],
  //       color: (opacity = 15) => `rgba(200, 150, 50, ${opacity})`,
  //       // strokeWidth: 2,
  //     },
  //   ],
  //   legend: ['DAILY ACTIVITY'],
  // };

  const chartConfig = {
    backgroundGradientFrom: 'purple',
    backgroundGradientFromOpacity: 2,
    backgroundGradientTo: 'pink',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 1,
    useShadowColorFromDataset: false,
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <GradientBackground>
        <View style={styles.container}>
          <Text style={styles.subHead}>Activity:</Text>
          <TouchableOpacity style={styles.dropDown}>
            <Picker
              selectedValue={selectedActivity}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedActivity(itemValue);
              }}
              mode="dropdown"
              style={{ width: '100%' }}>
              <Picker.Item label="Choose Activity" value="" />
              {activity.map((option, index) => (
                <Picker.Item key={index} label={option.label} value={option.value} />
              ))}
            </Picker>
          </TouchableOpacity>
          <Text style={styles.subHead}>Date:</Text>
          <TouchableOpacity onPress={() => setOpenDate(true)} style={styles.button}>
            <Text style={styles.dateText}>{date.toDateString()}</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            mode="date"
            open={openDate}
            date={date}
            onConfirm={(date) => {
                setDate(date);
              setOpenDate(false);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
          />
          <Text style={styles.subHead}>Time:</Text>
          <TouchableOpacity style={styles.dropDown}>
            <Picker
              selectedValue={selectedTime}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedTime(itemValue);
              }}
              mode="modal"
              style={{ width: '100%' }}>
              <Picker.Item label="Set Timer" value="" />
              {timer.map((option, index) => (
                <Picker.Item key={index} label={option.label} value={option.value} />
              ))}
            </Picker>
          </TouchableOpacity>
          <Button title="Add" onPress={handleAddActivity} />
          <LineChart
            data={data}
            // yAxisInterval={timer.map((item) => item.value)}
            width={380}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
        </View>
      </GradientBackground>
    </ScrollView>
  );
};

export default ActivityScreen;
