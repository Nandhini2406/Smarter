import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskItem from '../../../Components/TodoList/TaskItem';
import TaskInputField from '../../../Components/TodoList/TaskInputField';
import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import { theme } from '../../../Assets/colors/bgTheme';


const PayScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return (
    <GradientBackground> 
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#ff0066',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 80,
  },
  taskContainer: {
    marginTop: 20,
  },
});

export default PayScreen;
