import { useContext, useState } from 'react';

import Input from './components/Input';
import MsgAlert from './components/MsgAlert';
import NoTodos from './components/NoTodos';
import TodoElement from './components/TodoElement';
import { GlobalContext } from './context/GlobalContext';

function App() {


  const [alert, setAlert] = useState(false)
  const { todos, todosTemp, searchTodo } = useContext(GlobalContext)

  // const iterateFunction = (obj, id) => {

  //   if (obj.id === id) {
  //     obj.completed = !obj.completed
  //   }

  //   return obj
  // }



  const closeModal = () => {
    setAlert(false)
  }

  const openModal = () => {
    setAlert(true)
  }


  let timer = null
  const handleInput = e => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (e.target.value.length > 2) {
        searchTodo(e.target.value)
      } else {
        searchTodo('')
      }
    }, 0)
  }

  return (
    <div className="App">
      <h1>
        todo
      </h1>

      <input style={{ backgroundColor: 'gray', padding: '1rem' }} type="text" onChange={handleInput} />

      <Input
        // addTodo={addTodo}
        openModal={openModal}
      />

      {/* TODO SEARCH */}
      {todosTemp &&
        todosTemp.map((todo) => (
          <TodoElement
            dark={true}
            key={todo.id}
            {...todo}
          />
        ))
      }

      {/* TODO REAL NO HECHO */}
      <div className="lala">
        <h3>NO HACIDOS</h3>
        {!todosTemp.length &&
          todos.filter(todo => !todo.completed).map((todo) => (
            <TodoElement
              key={todo.id}
              // body={todo.body}
              // id={todo.id}
              // completed={todo.completed}
              {...todo}
            // removeTodo={removeTodo}
            // checkCompleted={checkCompleted}
            />
          ))
        }
      </div>

      {/* TODO REAL HECHO */}
      <div className="lala">
        <h3>SI ASIDOS</h3>
        {!todosTemp.length &&
          todos.filter(todo => todo.completed).map((todo) => (
            <TodoElement
              key={todo.id}
              // body={todo.body}
              // id={todo.id}
              // completed={todo.completed}
              {...todo}
            // removeTodo={removeTodo}
            // checkCompleted={checkCompleted}
            />
          ))
        }
      </div>


      {
        todos.length === 0 && <NoTodos />
      }
      {alert && <MsgAlert
        closeModal={closeModal}
      />}
    </div>
  );
}

export default App;