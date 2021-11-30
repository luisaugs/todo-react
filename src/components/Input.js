import { useState } from 'react';
import './Input.css';


const Input = ({addTodos}) => {

    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();
        addTodos()


    }


    return (
        <div className="text-input-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="text-input"
                    placeholder="todo"
                    autoFocus
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    className="btn-submit"
                    type="submit"
                >
                    Save!
                </button>
            </form>
        </div>
    );

}

export default Input;