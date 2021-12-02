import './MsgAlert.css';


const MsgAlert = ({closeModal}) => {

    return (
        <div className="msg-alert-main" onClick={()=>closeModal()}>
            <div className="alert-card">
            <h3 className="alert-card-title">You did not enter todo to save!</h3>
            <button 
                className="alert-card-btn" 
                onClick={()=>closeModal()}
                autoFocus
            >
                Accept!
            </button>
            </div>
        </div>
    )
}

export default MsgAlert
