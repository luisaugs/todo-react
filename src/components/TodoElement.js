import { useContext, useState } from 'react';
import { X } from 'react-bootstrap-icons';
import './TodoElement.css';
import ModalSelector from './ModalSelector';
import { GlobalContext } from '../context/GlobalContext';



const TodoElement = ({ id, body, priority, completed }) => {


    const [isChecked, setIsChecked] = useState(false)
    const [modSelector, setModSelector] = useState(false);
    const { checkCompleted, openModalDelete, openModalPriority, openModalEdit } = useContext(GlobalContext);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        checkCompleted(id);
    }

    const priorities = {
        high: "priority-red",
        medium: "priority-blue",
        low: "priority-green"
    }

    return (
        <>
            <div className="card">
                <div className={`container-card ${completed ? "check-on" : ""}`} key={id}>
                    <div
                        className={`priority-btn ${priorities[priority]}`}
                        onClick={()=>openModalPriority(id)}
                    ></div>
                    <div>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={completed}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div 
                        className="p-text"
                        onClick={()=>openModalEdit(id)}
                    >
                        {body}</div>
                    <div
                        className="delete-icon"
                        onClick={()=>openModalDelete(id)}
                    >
                        <X className="" />
                    </div>
                </div>
            </div>

            {modSelector &&
                <ModalSelector
                    closeModalSelector={() => setModSelector(false)}
                    id={id}
                />
            } 
        </>
    );

}

export default TodoElement;


