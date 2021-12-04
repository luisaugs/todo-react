import { useContext, useState } from 'react';
import { X } from 'react-bootstrap-icons';
import './TodoElement.css';
import ModalDelete from './ModalDelete';
import ModalSelector from './ModalSelector';
import { GlobalContext } from '../context/GlobalContext';



const TodoElement = ({ id, body, priority, completed }) => {


    const [isChecked, setIsChecked] = useState(false)
    const [modalDelete, setModalDelete] = useState(false);
    const [modSelector, setModSelector] = useState(false);
    const { checkCompleted } = useContext(GlobalContext);

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
                {/* <div className="container-card" key={id}> */}
                <div className={`container-card ${completed ? "check-on" : ""}`} key={id}>
                    <div
                        className={`priority-btn ${priorities[priority]}`}
                        onClick={() => { setModSelector(true) }}
                    ></div>
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
                        onClick={() => setModalDelete(true)}
                    >
                        <X className="" />
                    </div>
                </div>
            </div>

            {modalDelete &&
                <ModalDelete
                    closeModalDelete={() => setModalDelete(false)}
                    id={id}
                />
            }

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


