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

// Add action creators for other actions (e.g., updateTodo) if needed
