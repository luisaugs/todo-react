import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './TodoContainer.css';
import TodoElement from './TodoElement';

const ResultSearch = () => {

    const { todosTemp } = useContext(GlobalContext);

    return (
        <div className="container-fieldset">
            <fieldset className="fieldset">
                <legend>Results</legend>

                {!todosTemp.length && todosTemp.map(todo => (
                    <TodoElement key={todo.id} {...todo} />
                ))
                }

            </fieldset>
        </div>
    )
}

export default ResultSearch;