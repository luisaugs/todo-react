import './Input.css';


const Input = () => {

    return (
        <div className="text-input-container">
            <form>
                <input
                    className="text-input"
                    placeholder="todo"
                    required
                    autoFocus
                    type="text" />
                <button className="btn-submit">Save!</button>
            </form>
        </div>
    );

}

export default Input;