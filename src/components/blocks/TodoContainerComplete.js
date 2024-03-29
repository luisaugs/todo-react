import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import '../styles/TodoContainer.css';
import TodoElement from '../blocks/TodoElement';

const TodoContainerComplete = () => {

    const { todos } = useContext(GlobalContext);

    return (
        <div className="container-fieldset">
            <fieldset className="fieldset">
                <legend>Completed</legend>
                {todos && todos.filter(todo => todo.completed).reverse().map(todo => (
                    <TodoElement key={todo.id} {...todo} />
                ))
                }
            </fieldset>
        </div>
    )
}

export default TodoContainerComplete;