import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './TodoContainer.css';
import TodoElement from './TodoElement';
// import { motion } from "framer-motion"

const TodoContainerIncomplete = () => {

    const { todos } = useContext(GlobalContext);

    return (
        <div className="container-fieldset">
            <fieldset className="fieldset">
                <legend>Incompleted</legend>
                {todos && todos.filter(todo => !todo.completed).reverse().map(todo => (
                    <TodoElement key={todo.id} {...todo} />
                ))
                }
            </fieldset>
        </div>
    )
}

export default TodoContainerIncomplete;