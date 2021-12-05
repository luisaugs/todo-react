import { Search } from 'react-bootstrap-icons';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './Search.css';

const SearchInput = () => {

    const { searchTodo } = useContext(GlobalContext)
  
    return (
        <div className="search-input-container">
            <div className="icon-container">
                <Search />
            </div>
            <form className="form-input" onSubmit={e =>  e.preventDefault() }>
                <input
                    className="search-input"
                    placeholder="search"
                    name="searcher"
                    type="text"
                    onChange={e => {searchTodo(e.target.value)}}
                />
            </form>
        </div>
    )
}

export default SearchInput;