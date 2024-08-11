import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store_todo } from './features/todo/todoSlice'


function App() {
  
  const todos = useSelector(state => state.todos);

  return (
    <>
      <div className='max-w-screen-2xl mx-auto p-12'>
        <TodoForm />
        <ul className="list-none">
          {todos && todos.map(
            (todo) => <TodoItem key={todo.todo_id} todo={todo}/>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
