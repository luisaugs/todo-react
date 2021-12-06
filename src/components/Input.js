import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './Input.css';


const Input = () => {

    const [body, setBody] = useState("");
    const { addTodo } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!body.trim()) {
            return
        }

        addTodo({
            id: Date.now(),
            body: body.trim(),
            // priority: p[parseInt(Math.random() * 3)],
            priority: "high",
            completed: false
        })

        setBody("")
    }

    // const p = ["high", "low", "medium"]

    return (
        <div className="text-input-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="text-input"
                    placeholder="todo"
                    autoFocus
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
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