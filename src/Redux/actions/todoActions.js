export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const deleteTodo = todoId => {
  return {
    type: 'DELETE_TODO',
    payload: todoId,
  };
};



// export const updateTodo = todoId => {
//   return {
//     type: 'UPDATE_TODO',
//     payload: todoId,
//   };
// };
