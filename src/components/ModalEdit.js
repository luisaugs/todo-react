import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './ModalEdit.css';

const ModalEdit = () => {

    const { editTodo, closeModalEdit, todoEditing } = useContext(GlobalContext);
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

        // editTodo(idFromTodo, newBody)
        editTodo(todoEditing, newBody)
    }

    useEffect(() => {
        ref.current.select();
    }, []);

    return (
        <div
            className="main-modal-edit"
            onClick={(e) => { handleClick(e) }}
            data-close="closeModal"
        >
            <div className="modal-edit-container">
                <form className="form-edit" onSubmit={handleSubmit}>
                    <textarea
                        ref={ref}
                        className="edit-text-area"
                        defaultValue={todoEditing.body}
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
