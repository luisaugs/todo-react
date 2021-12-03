import { useContext, useEffect, useState } from 'react';
import ModalDelete from './ModalDelete';
import { X } from 'react-bootstrap-icons';
import './TodoElement.css';
import ModalSelector from './ModalSelector';
import { GlobalContext } from '../context/GlobalContext';

const TodoElement = ({ id, body, priority, completed, dark }) => {

    const [isChecked, setIsChecked] = useState(false)
    const [modalDelete, setModalDelete] = useState(false);
    const [modSelector, setModSelector] = useState(false);
    const { checkCompleted, term } = useContext(GlobalContext);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        checkCompleted(id);
    }

    const priorities = {
        high: "priority-red",
        medium: "priority-blue",
        low: "priority-green"
    }

    const [text, setText] = useState({ __html: body })

    useEffect(() => {
        if(body){
            setText({ __html: body.replace(term.toLowerCase(), `<span style="background-color:yellow">${term}</span>`) })
        }
    }, [term])

    return (
        <>
            <div className={`card ${dark ? 'dark' : ''}`} >
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
                    <div className="p-text" dangerouslySetInnerHTML={text} />
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
                // removeTodo={removeTodo}
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


