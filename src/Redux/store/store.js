import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'todos',
    storage: AsyncStorage,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

// export const loadState = async () => {
//   const state = await AsyncStorage.getItem('todos');
//   if (state) {
//     return JSON.parse(state);
//   }
// };

// export const saveState = async (state) => {
//   await AsyncStorage.setItem('todos', JSON.stringify(state));
// };

export const persistor = persistStore(store)

export default store;
