import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './ModalSelector.css';


const ModalSelector = () => {


    const { checkColor, closeModalPriority, idFromTodo } = useContext(GlobalContext);

    const handleClick = (e) => {
        if (e.target.dataset.close === "closeModal") {
            closeModalPriority();
        }
    }

    const handleEsc = (e) => {

        if (e.keyCode === 27) {
            closeModalPriority();
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
            className="main-modal-selector"
            onClick={(e) => { handleClick(e) }}
            data-close="closeModal"
        >
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
