import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import TodoElement from '../blocks/TodoElement';
import '../styles/TodoContainer.css';

const ResultSearch = () => {

    const { searchTerm, todos } = useContext(GlobalContext);
    const [results, setResults] = useState([])

    useEffect(() => {
        setResults(todos.filter(todo => todo.body.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [searchTerm, todos])

    return (
        <div className="container-fieldset">
            <fieldset className="fieldset">
                <legend>Results</legend>
                {results && results.map(todo => (
                    <TodoElement key={todo.id} {...todo} />
                ))
                }
            </fieldset>
        </div>
    )
}

export default ResultSearch;