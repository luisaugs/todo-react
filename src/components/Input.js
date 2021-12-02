import { useState } from 'react';
import './Input.css';


const Input = ({ addTodo, openModal}) => {


    const [body, setBody] = useState("");
   


    const handleSubmit = (e) => {

        e.preventDefault();

        if(!body) {
            openModal()
            return
        }

        addTodo({
            id: Date.now(),
            body: body,
            priority: "high",
            completed: false
        })

        setBody("")
    }


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