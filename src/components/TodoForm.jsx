import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_todo } from '../features/todo/todoSlice';
import { update_todo } from '../features/todo/todoSlice';


function TodoForm() {

    const [todoMsg, setTodoMsg] = useState("");
    const currentTodo = useSelector(state => state.current_todo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentTodo) {
            setTodoMsg(currentTodo.todo_msg);
        }
    }, [currentTodo]);

    const add_my_todo = (e) => {
        e.preventDefault();
        if(todoMsg.trim() === ''){
            alert('Enter a Valid Task');
            return;
        }
        dispatch(add_todo(todoMsg));
        setTodoMsg("");
    }

    const update_my_todo = (e) => {
        e.preventDefault();
        if(todoMsg.trim() === ''){
            alert('Enter a Valid Task');
            return;
        }
        dispatch(update_todo({todo_id: currentTodo.todo_id, todo_msg: todoMsg}))
        setTodoMsg("");
    }

  return ( 
    <form onSubmit={currentTodo? update_my_todo : add_my_todo}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button 
                type="submit" 
                className={`rounded-r-lg px-3 py-1 ${currentTodo? "hover:bg-blue-600 bg-blue-500":"hover:bg-green-600 bg-green-500"} font-semibold text-white shrink-0`}>

                {currentTodo? `Update` : `Add`}
            </button>
    </form>
  )
}

export default TodoForm