import { combineReducers } from 'redux';
import todosReducer from './todoReducer';
import productsReducer  from './productsReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  products: productsReducer
});

export default rootReducer;