import { useContext } from 'react';

import Input from './components/Input';
import ModalDelete from './components/ModalDelete';
import ModalSelector from './components/ModalSelector';
// import MsgAlert from './components/MsgAlert';
import NoTodos from './components/NoTodos';
import ResultSearch from './components/ResultSearch';
import SearchInput from './components/SearchInput';
import TodoContainerComplete from './components/TodoContainerComplete';
import TodoContainerIncomplete from './components/TodoContainerIncomplete';
// import TodoElement from './components/TodoElement';
import { GlobalContext } from './context/GlobalContext';

function App() {


  // const [alert, setAlert] = useState(false)
  const { todos, todosTemp, completed, incompleted, modalDelete, setModalDelete, idFromTodo, modSelector, searching } = useContext(GlobalContext)

  // const iterateFunction = (obj, id) => {
  //   if (obj.id === id) {
  //     obj.completed = !obj.completed
  //   }
  //   return obj
  // }

  // const closeModal = () => {
  //   setAlert(false)
  // }

  // const openModal = () => {
  //   setAlert(true)
  // }

  return (
    <div className="App">
      <h1>
        todo
      </h1>
      {/* todo input */}
      <Input />

      {/* todo search input box */}
      {todos.length > 5 && <SearchInput />}

      {/* todo filtered */}
      {/* {
        searching &&
        todosTemp &&
        todosTemp.map((todo) => (
          <TodoElement
            key={todo.id}
            {...todo}
          />
        ))
      } */}
      {
        searching && <ResultSearch />
      }

      {!searching && incompleted && <TodoContainerIncomplete />}
      {!searching && completed && <TodoContainerComplete />}

      {/* todo advice */}
      {
        todos.length === 0 && <NoTodos />
      }

      {/* Modal delete todo */}
      {modalDelete &&
        <ModalDelete
          closeModalDelete={() => setModalDelete(false)}
          id={idFromTodo}
        />
      }

      {/* Modal priority selector */}
      {modSelector &&
        <ModalSelector
        // closeModalSelector={() => setModSelector(false)}
        // id={id}
        />
      }


      {/* todo modal alert no input */}
      {/* {alert && <MsgAlert
        closeModal={closeModal}
      />} */}
    </div>
  );
}

export default App;