import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './ModalSelector.css';


const ModalSelector = () => {


    const { checkColor, closeModalPriority, idFromTodo } = useContext(GlobalContext);


    return (
        <div className="main-modal-selector" onClick={closeModalPriority}>
            <div className="main-card-selector">
                <h2 className="selector-title">Select the priority of the todo</h2>
                <div className="btn-container cont">
                    <button
                        className="btn btn-priority-high"
                        onClick={() => checkColor(idFromTodo, "high")}
                    >
                        HIGH
                    </button>
                    <button
                        className="btn btn-priority-med"
                        onClick={() => checkColor(idFromTodo, "medium")}
                    >
                        MEDIUM
                    </button>
                    <button
                        className="btn btn-priority-low"
                        onClick={()=>checkColor(idFromTodo,"low")}
                    >
                        LOW
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalSelector
