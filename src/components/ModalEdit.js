import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import { GlobalContext } from '../context/GlobalContext';
import './ModalEdit.css';


const ModalEdit = () => {

    const { idFromTodo, editTodo, bodyFromTodo, closeModalEdit } = useContext(GlobalContext);
    const [newBody, setNewBody] = useState('');
    const ref = useRef();

    const handleClick = (e) => {

        if (e.target.dataset.close === "closeModal") {
            closeModalEdit();
        }
    }


    const handleSubmit = e => {
        e.preventDefault();
        if (!e.target.inputArea.value.trim()) return

        editTodo(idFromTodo, newBody)
    }

    useEffect(() => {
        ref.current.select();
    }, []);

    return (
        <div 
            className="main-modal-edit" 
            onClick={(e)=> {handleClick(e)}}
            data-close="closeModal"
        >
            <div className="modal-edit-container">
                <form className="form-edit" onSubmit={handleSubmit}>
                    <textarea
                        ref={ref}
                        className="edit-text-area"
                        defaultValue={`${bodyFromTodo[0].body}`}
                        name="inputArea"
                        onChange={e => setNewBody(e.target.value.trim())}
                        autoFocus
                    >
                    </textarea>
                    {!newBody &&
                        <button
                            className="edit-text-dis" 
                            disabled
                        >
                            Save changes
                        </button>
                    }
                    {newBody &&
                        <button
                            className="edit-text-btn"
                            type="submit"
                        >
                            Save changes
                        </button>
                    }

                </form>
            </div>
        </div>
    )
}

export default ModalEdit
