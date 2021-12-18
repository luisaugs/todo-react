import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import '../styles/TodoContainer.css';
import TodoElement from '../blocks/TodoElement';

const ResultSearch = () => {

    const { todosTemp } = useContext(GlobalContext);

    return (
        <div className="container-fieldset">
            <fieldset className="fieldset">
                <legend>Results</legend>

                {todosTemp && todosTemp.map(todo => (
                    <TodoElement key={todo.id} {...todo} />
                ))
                }

            </fieldset>
        </div>
    )
}

export default ResultSearch;