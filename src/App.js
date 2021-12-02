import { useEffect, useState } from 'react';

import Input from './components/Input';
import ModaleDelete from './components/ModalDelete';
import MsgAlert from './components/MsgAlert';
import NoTodos from './components/NoTodos';
import TodoElement from './components/TodoElement';
// import TodoElement from './components/TodoElement';

function App() {

  const [todos, setTodos] = useState([])
  const [alert, setAlert] = useState(false)
  // const [modalDelete, setModalDelete] = useState(false)

  //add todo to array
  const addTodo = (todo) => {

    setTodos((old) => [...old, todo])

  }

    //remove todo from array
    const removeTodo = (id) => {

      setTodos((prev) => prev.filter((todo) => todo.id !== id))
  
    }

  const iterateFunction = (obj, id) => {

    if (obj.id === id) {
      obj.completed = !obj.completed
    }

    return obj
  }

  const checkCompleted = (id) => {

    setTodos(todos.map((item) => iterateFunction(item, id)))

  }

  // modal delete
  // const openModalDelete = (id) => {

  //   setModalDelete(true)

  // }

  // const closeModalDelete = () => {

  //   setModalDelete(false)

  // }

  const closeModal = () => {
    setAlert(false)
  }

  const openModal = () => {
    setAlert(true)
  }

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <div className="App">
      <h1>
        todo
      </h1>

      <Input
        addTodo={addTodo}
        openModal={openModal}
      />
      {todos &&
        todos.map((todo) => (
          <TodoElement
            key={todo.id}
            body={todo.body}
            id={todo.id}
            completed={todo.completed}
            removeTodo={removeTodo}
            checkCompleted={checkCompleted}
            // openModalDelete={openModalDelete}
          />
        ))
      }
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