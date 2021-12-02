import { useState } from 'react';
import ModalDelete from './ModalDelete';
import { X } from 'react-bootstrap-icons';
import './TodoElement.css';
import ModalSelector from './ModalSelector';



const TodoElement = ({ id, body, priority, completed, checkCompleted, removeTodo }) => {


    const [isChecked, setIsChecked] = useState(false)
    const [modalDelete, setModalDelete] = useState(false);
    const [modSelector, setModSelector] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        checkCompleted(id)
    };


    const handleDelete = () => {
        setModalDelete(true)
    }

    const closeModalDelete = () => {
        setModalDelete(false)
    }

    const closeModalSelector = () => {
        setModSelector(false)
    }






    return (
        <>
            <div className="card">
                {/* <div className="container-card" key={id}> */}
                <div className={`container-card ${completed ? "check-on" : ""}`} key={id}>
                    <div 
                        className="priority-btn priority-red"
                        onClick={()=>{setModSelector(true)}}
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
                        onClick={() => handleDelete()}
                    >
                        <X className="" />
                    </div>
                </div>
            </div>

            {modalDelete &&
                <ModalDelete
                    closeModalDelete={closeModalDelete}
                    id={id}
                    removeTodo={removeTodo}
                />
            }

            {modSelector &&
                <ModalSelector
                    closeModalSelector={closeModalSelector}
                />
            }

        </>
    );

}

export default TodoElement;


