import { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import './TodoElement.css';



const TodoElement = ({ id, body, priority, completed, removeTodo,checkCompleted }) => {


    const [isChecked, setIsChecked] = useState(false)

    const handleOnChange = () => {

        setIsChecked(!isChecked);
        checkCompleted(id)

    };

    const handleDelete = (id) => {

        removeTodo(id)

    }

    return (
        <div className="card">
            {/* <div className="container-card" key={id}> */}
            <div className={`container-card ${completed ? "check-on" : ""}`} key={id}>
                <div className="priority-btn-red"></div>
                <div>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="p-text">{body}</div>
                <div
                    className="delete-icon"
                    onClick={() => handleDelete(id)}
                >
                    <X className="" />
                </div>
            </div>
        </div>
    );

}

export default TodoElement;


