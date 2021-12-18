import { useContext } from 'react';

import Input from './components/blocks/Input';
import ModalDelete from './components/blocks/ModalDelete';
import ModalEdit from './components/blocks/ModalEdit';
import ModalSelector from './components/blocks/ModalSelector';
import NoTodos from './components/blocks/NoTodos';
import ResultSearch from './components/blocks/ResultSearch';
import SearchInput from './components/blocks/SearchInput';
import TodoContainerComplete from './components/blocks/TodoContainerComplete';
import TodoContainerIncomplete from './components/blocks/TodoContainerIncomplete';
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