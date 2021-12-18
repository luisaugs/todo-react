import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './MsgAlert.css';

const ModalDelete = () => {

    const { removeTodo, idFromTodo, closeModalDelete } = useContext(GlobalContext);
    
    const handleClick = (e) => {
        if (e.target.dataset.close === "closeModal") {
            closeModalDelete();
        }
    }

    const handleEsc = (e) => {

        if (e.keyCode === 27) {
            closeModalDelete();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    })

    return (
        <div
            className="msg-alert-main"
            onClick={(e) => { handleClick(e) }}
            data-close="closeModal"
        >
            <div className="alert-card">
                <h3 className="alert-card-title">Are you sure you want to delete this todo?</h3>
                <div className="order-btns">
                    <button
                        className="cancel-btn"
                        onClick={closeModalDelete}
                        autoFocus
                    >
                        Cancel
                    </button>
                    <button
                        className="delete-btn"
                        onClick={() => removeTodo(idFromTodo)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete;