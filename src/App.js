import { useContext, useState } from 'react';

import Input from './components/Input';
import MsgAlert from './components/MsgAlert';
import NoTodos from './components/NoTodos';
import SearchInput from './components/SearchInput';
import TodoElement from './components/TodoElement';
import { GlobalContext } from './context/GlobalContext';

function App() {


  const [alert, setAlert] = useState(false)
  const { todos, todosTemp } = useContext(GlobalContext)

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
      {/* todo input */}
      <Input
        openModal={openModal}
      />
      {/* todo search input box */}
      {todos.length > 5 && <SearchInput />}

      {/* todo filtered */}
      {
        todosTemp &&
        todosTemp.map((todo) => (
          <TodoElement
            key={todo.id}
            {...todo}
          />
        ))
      }




      {/* todo list */}
      {!todosTemp.length &&
        todos.map((todo) => (
          <TodoElement
            key={todo.id}
            {...todo}
          />
        ))
      }



      {/* todo advice */}
      {
        todos.length === 0 && <NoTodos />
      }

      {/* todo modal alert no input */}
      {alert && <MsgAlert
        closeModal={closeModal}
      />}
    </div>
  );
}

export default App;