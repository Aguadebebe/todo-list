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

    const addTask = "<button>Add Task</button>";
    const inputEl1 = "<input value={inputValue} onChange={handleChange}>"
    const inputEl2 = " /> ";
    const form1 = "<form onSubmit={handleSubmit}>";
    const return1 = "return (";
    const formComponent1 = "const TodoForm = ({ handleAddTask }) => {";
    
    return(
        <div> 
        <div>{formComponent1}</div>
        <div>{return1}</div> 
        <form onSubmit={handleSubmit}>
            <label> 
             {form1}
             <div>{inputEl1}</div>
             <input 
              value={inputValue}
              type="text"
              placeholder="Please enter a task"
              onChange={handleChange}
             />
            </label>
            <div>{inputEl2}</div>
             {error && <p className="form-error">Please enter a Task!</p>}
            <button type="submit">{addTask}</button>
        </form>
        </div>
    );
}

export default TodoForm;