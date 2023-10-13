import React,{ useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default TaskItem = props => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!completed);
    console.log('TaskItem clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={styles.taskContainer}>
      <TouchableOpacity onPress={handleClick}>
        <Text style={completed? styles.strikethrough : styles.taskText}>{props.task}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.deleteTask(props.id)}>
          <MaterialIcons
            style={styles.delete}
            name="delete"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: '#ff0066',
    borderRadius: 12,
    marginRight: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  index: {
    color: '#fff',
    fontSize: 22,
  },
  taskContainer: {
     //backgroundColor: '#3E3364',
    backgroundColor: '#ff0066',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
   // paddingVertical: 5,
    //minHeight: 50,
  },
  taskText: {
    color: '#fff',
   // width: '90%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  strikethrough: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  delete: {
    marginRight: 10,
  },
});
