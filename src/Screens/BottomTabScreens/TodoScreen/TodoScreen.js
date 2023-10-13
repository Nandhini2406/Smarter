import React, {useState, useEffect} from 'react';
import {Keyboard, FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from '../../../Redux/actions/todoActions'; // action creators
import {persistor} from '../../../Redux/store/store';

import GradientBackground from '../../../Components/BackgroundImage/GradientBackground';
import TaskInputField from '../../../Components/TodoList/TaskInputField';
import TaskItem from '../../../Components/TodoList/TaskItem';
import {styles} from './styles';

const TodoScreen = ({todos, addTodo, deleteTodo}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load todos from Redux state when screen mounts
    setTasks(todos);
    console.log('list of tasks', todos);
  }, [todos]);

  const addTask = task => {
    if (task == null) return;
    const id = Date.now(); // unique id for task
    setTasks([...tasks, {id, task}]);
    Keyboard.dismiss();
    addTodo({id, task}); // Dispatch the action
    persistor.persist(); // Persist updated state
    console.log('new tasks', {id, task});
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter(task => task.id != deleteIndex));
    deleteTodo(deleteIndex); // Dispatch the action
    persistor.persist(); // Persist updated state
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.heading}>TODO'S LIST</Text>
        <FlatList
          data={tasks}
          style={{marginBottom: 100}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                task={item.task}
                deleteTask={() => deleteTask(item.id)}
              />
            </View>
          )}
        />
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

// export default TodoScreen;
