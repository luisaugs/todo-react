import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './ModalSelector.css';


const ModalSelector = ({ closeModalSelector, id }) => {


    const { checkColor } = useContext(GlobalContext);


    return (
        <div className="main-modal-selector" onClick={closeModalSelector}>
            <div className="main-card-selector">
                <h2 className="selector-title">Select the priority of the todo</h2>
                <div className="btn-container cont">
                    <button
                        className="btn btn-priority-high"
                        onClick={() => checkColor(id, "high")}
                    >
                        HIGH
                    </button>
                    <button
                        className="btn btn-priority-med"
                        onClick={() => checkColor(id, "medium")}
                    >
                        MEDIUM
                    </button>
                    <button
                        className="btn btn-priority-low"
                        onClick={()=>checkColor(id,"low")}
                    >
                        LOW
                    </button>
                </div>
                {/* <div className="cont">
                    <button className="btn btn-close"
                        onClick={closeModalSelector}
                    >
                        Close
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default ModalSelector
