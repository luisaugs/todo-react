import { useContext, useState } from 'react';

import Input from './components/Input';
import MsgAlert from './components/MsgAlert';
import NoTodos from './components/NoTodos';
import TodoElement from './components/TodoElement';
import { GlobalContext } from './context/GlobalContext';

function App() {

  
  const [alert, setAlert] = useState(false)
  const { todos } = useContext(GlobalContext)

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

  return (
    <div className="App">
      <h1>
        todo
      </h1>

      <Input
        // addTodo={addTodo}
        openModal={openModal}
      />
      {todos &&
        todos.map((todo) => (
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