const initialState = {
    todos: [],
  };
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      // case 'UPDATE_TODO':
      //   return {
      //     ...state,
      //     todos: state.todos.filter(todo => todo.id !== action.payload),
      //   };
      default:
        return state;
    }
  };
  
  export default todosReducer;
  