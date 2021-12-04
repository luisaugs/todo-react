import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './MsgAlert.css';

const ModalDelete = () => {

    const { removeTodo, idFromTodo, closeModalDelete } = useContext(GlobalContext);

    return (
        <div className="msg-alert-main">
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