import {configureStore} from '@reduxjs/toolkit';
import  todosReducer from '../todos/TodoSlice';

const store = configureStore({
    reducer: { todos: todosReducer}
});
export default store;