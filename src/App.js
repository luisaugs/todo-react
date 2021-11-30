import { useState } from 'react';

import Input from './components/Input';
import TodoElement from './components/TodoElement';

function App() {


  const initialTodo = {
    id: "",
    body: "",
    priority: "high",
    done: false
  }

  const [todos, setTodos] = useState(initialTodo)
  const [todo, setTodo] = useState('')

  const addTodos = (todos) => {

    // console.log(todos, "🚕🚕🚕🚕🚕🚕")
    const newTodos = { ...todos, id: Date.now(), body: todo }
    setTodos(newTodos)
    console.log(newTodos, "🍕🍕🍕🍕🍕")

  }

  return (
    <div className="App">
      <h1>
        todo
      </h1>

      <Input addTodos={()=>addTodos(todos)}/>
      <TodoElement />
    </div>
  );
}

export default App;