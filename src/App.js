import { useContext } from 'react';

import Input from './components/Input';
import ModalDelete from './components/ModalDelete';
import ModalEdit from './components/ModalEdit';
import ModalSelector from './components/ModalSelector';
import NoTodos from './components/NoTodos';
import ResultSearch from './components/ResultSearch';
import SearchInput from './components/SearchInput';
import TodoContainerComplete from './components/TodoContainerComplete';
import TodoContainerIncomplete from './components/TodoContainerIncomplete';
import { GlobalContext } from './context/GlobalContext';

function App() {


  const { todos, completed, incompleted, modalDelete, setModalDelete, idFromTodo, modSelector, searching, modalEdit, closeModalEdit } = useContext(GlobalContext)

  return (
    <div className="App">
      <h1>
        todo
      </h1>

      {/* todo input */}
      <Input />

      {/* Modal edit */}
      {modalEdit && 
        <ModalEdit
          closeModalEdit={closeModalEdit}
        />
      }
      
      {/* todo advice */}
      {todos.length === 0 && <NoTodos />}

      {/* todo search input box */}
      {todos.length > 5 && <SearchInput />}

      {/* todo filtered */}
      {searching && <ResultSearch />}

      {/* todos*/}
      {!searching && incompleted && <TodoContainerIncomplete />}
      {!searching && completed && <TodoContainerComplete />}

      {/* Modal delete todo */}
      {modalDelete &&
        <ModalDelete
          closeModalDelete={() => setModalDelete(false)}
          id={idFromTodo}
        />
      }

      {/* Modal priority selector */}
      {modSelector && <ModalSelector />} 
    </div>
  );
}

export default App;