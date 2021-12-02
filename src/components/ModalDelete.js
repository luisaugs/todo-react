import './MsgAlert.css';

const ModalDelete = ({ closeModalDelete, id, removeTodo }) => {

    const deleteTodo = (id) => {
        removeTodo(id)
    }


    return (
        <div className="msg-alert-main" onClick={()=>closeModalDelete()}>
            <div className="alert-card">
                <h3 className="alert-card-title">Are you sure you want to delete this todo?</h3>
                <div className="order-btns">
                    <button
                        className="cancel-btn"
                        onClick={() => closeModalDelete()}
                        autoFocus
                    >
                        Cancel
                    </button>
                    <button
                        className="delete-btn"
                        onClick={() => deleteTodo(id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete;