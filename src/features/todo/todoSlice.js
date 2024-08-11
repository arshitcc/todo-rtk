import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        
    ],

    current_todo : null
}


export const todoSlice = createSlice({
    name : 'assignment_todo',
    initialState,
    reducers : {
        add_todo : (state, action) => {
            const todo = {
                todo_id : nanoid(),
                todo_msg : action.payload,
            }
            state.todos.push(todo)
        },

        delete_todo : (state, action) => {
            state.todos = state.todos.filter( (todo) => (todo.todo_id !== action.payload.todo_id) )
        },

        update_todo : (state, action) => {
            state.todos = state.todos.map( 
                (todo) => (todo.todo_id === action.payload.todo_id)? {...todo,todo_msg : action.payload.todo_msg} : todo  
            )
            state.current_todo = null
        },

        check_todo : (state, action) => {
            state.todos = state.todos.map( 
                (todo) => (todo.todo_id === action.payload.todo_id)? {...todo, todo_status : !todo.todo_status} : todo
            )
        },

        set_todo : (state, action) => {
            state.current_todo = action.payload
        }
    }
})

export const {add_todo, delete_todo, update_todo, check_todo, set_todo, store_todo} = todoSlice.actions

export default todoSlice.reducer