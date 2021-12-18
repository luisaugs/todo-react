import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './TodoContainer.css';
import TodoElement from './TodoElement';

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

                {/* {todosTemp && todosTemp.map(todo => (
                    <TodoElement key={todo.id} {...todo} />
                ))
                } */}
                {results && results.map(todo => (
                    <TodoElement key={todo.id} {...todo} todo={todo} />
                ))
                }

            </fieldset>
        </div>
    )
}

export default ResultSearch;