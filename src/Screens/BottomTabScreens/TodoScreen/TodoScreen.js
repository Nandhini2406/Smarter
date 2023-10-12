import React, {useState, useEffect} from 'react';
import {Keyboard, ScrollView, Text, View} from 'react-native';
import { connect } from 'react-redux'; 
import { addTodo, deleteTodo } from '../../../Redux/actions/action';// action creators
//import {saveState , loadState} from '../../../Redux/store/store';
import {persistor} from '../../../Redux/store/store';

import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import TaskInputField from '../../../Components/TodoList/TaskInputField';
import TaskItem from '../../../Components/TodoList/TaskItem';
import { styles } from './styles';

const TodoScreen = ({ todos, addTodo, deleteTodo }) => {
  const [tasks, setTasks] = useState([]);

   // Load the todo list from AsyncStorage
  //  loadState().then(state => {
  //   if (state) {
  //     setTasks(state.todos);
  //   }
  // });

  useEffect(() => {
    // Load todos from Redux state when component mounts
    setTasks(todos);
  }, [todos]);

  const addTask = task => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
    addTodo(task); // Dispatch the action
    persistor.persist();  // Persist updated state
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
    deleteTodo(deleteIndex); // Dispatch the action
    persistor.persist();  // Persist updated state
  };

  // Save the todo list to AsyncStorage whenever it changes
  // useEffect(() => {
  //   saveState({ todos: tasks });
  // }, [tasks]);

  return (
    <GradientBackground> 
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView>
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

