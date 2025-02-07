import { useState } from "react";
import ColoredConstTodoForm from "./ColoredConstTodoForm";
import Return from "./Return";
import { colors3 } from "./Return";
import { colors } from "./ColoredConstTodoForm";
import FormForm1 from "./FormForm1";
import { colors8 } from "./FormForm1";
import InputV from "./InputV";
import { colors10 } from "./InputV";
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
        <ColoredConstTodoForm text={formComponent1} colors={colors} />
        <Return text={return1} colors3={colors3} /> 
        <form onSubmit={handleSubmit}>
            <label> 
             <FormForm1 text={form1} colors8={colors8} />
              <InputV text={inputEl1} colors10={colors10} />
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