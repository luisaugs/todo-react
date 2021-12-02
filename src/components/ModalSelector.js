import './ModalSelector.css';


const ModalSelector = ({ closeModalSelector, priority }) => {
    return (
        <div className="main-modal-selector" onClick={closeModalSelector}>
            <div className="main-card-selector">
                <h2 className="selector-title">Select the priority of the todo</h2>
                <div className="btn-container cont">
                    <button
                        className="btn btn-priority-high"
                        value="high"
                    >
                        HIGH
                    </button>
                    <button
                        className="btn btn-priority-med"
                        value="medium"
                    >
                        MEDIUM
                    </button>
                    <button
                        className="btn btn-priority-low"
                        value="low"
                    >
                        LOW
                    </button>
                </div>
                <div className="cont">
                    <button className="btn btn-close"
                        onClick={closeModalSelector}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalSelector
