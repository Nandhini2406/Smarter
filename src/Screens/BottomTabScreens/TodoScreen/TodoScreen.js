import React, {useState} from 'react';
import {Keyboard, ScrollView, Text, View} from 'react-native';
import { connect } from 'react-redux'; 
import { addTodo, deleteTodo } from '../../../Redux/actions/action';// action creators

import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import TaskInputField from '../../../Components/TodoList/TaskInputField';
import TaskItem from '../../../Components/TodoList/TaskItem';
import { styles } from './styles';

const TodoScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
    addTodo(task); // Dispatch the action
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
    deleteTodo(deleteIndex); // Dispatch the action
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

const mapStateToProps = state => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: todoId => dispatch(deleteTodo(todoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);

