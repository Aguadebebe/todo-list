import { useState } from "react";

const TodoForm = ({ handleAddTask }) => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);
    
    const handleChange = (event) => {
        setInputValue(event.target.value)
        if (error) setError(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === "") {
            setError(true);
            return;
        } else {
            handleAddTask(inputValue);
            setInputValue("");
            setError(false);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label> 
              New Task
             <input 
              value={inputValue}
              type="text"
              placeholder="Please enter a task"
              onChange={handleChange}
             />
            </label>
             {error && <p className="form-error">Please enter a Task!</p>}
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TodoForm;