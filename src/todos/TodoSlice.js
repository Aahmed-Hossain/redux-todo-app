import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title: 'Darsul Akida', des: 'Read the book at leat 5 pages', isCompleted: false},
    {id: 2, title: 'Gems of Ramadan', des: 'Read the book at leat 5 pages', isCompleted: false},
    {id: 3, title: 'The holy Quran', des: 'Recite the holy Quran at leat 4 pages', isCompleted: false},
]
export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        showTodos: (state) =>  state,
        addTodos: (state, action)=>{
            state.push(action.payload)
        },
        deleteTodos: (state, action)=>{
           return state.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            const {id, title , des} = action.payload;
            const isTodoExist = state.filter((todo=> todo.id === id))
            if(isTodoExist){
                isTodoExist[0].title = title;
                isTodoExist[0].des = des;
            }
        },
    }
});
export const {showTodos, addTodos, deleteTodos, updateTodo}  = todoSlice.actions;
export default todoSlice.reducer;