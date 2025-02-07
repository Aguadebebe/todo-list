import { useState } from "react";
import  MapColorChars from "./MapColorChars";
import { colors } from  "./ColorArrays";
import { colors3 } from "./ColorArrays";
import { colors8 } from  "./ColorArrays";
import { colors10 } from  "./ColorArrays";

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
              <MapColorChars text={formComponent1} colors={colors} />
              <MapColorChars text={return1} colors={colors3} /> 
            <form onSubmit={handleSubmit}>
              <label> 
                <MapColorChars text={form1} colors={colors8} />
                <MapColorChars text={inputEl1} colors={colors10} />
              <input 
                value={inputValue}
                type="text"
                placeholder="Please enter a task"
                onChange={handleChange}
                className="input"
             />
              </label>
              <div>{inputEl2}</div>
                {error && <p className="form-error">Please enter a Task!</p>}
              <button 
                type="submit"
                className="add-task"
              >
                {addTask}
              </button>
            </form>
        </div>
    );
}

export default TodoForm;