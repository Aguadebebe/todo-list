
export const colors11 = ["rgb(161, 18, 127)", "rgb(161, 18, 127)", "rgb(161, 18, 127)", "rgb(161, 18, 127)", "rgb(161, 18, 127)", "white",
"white", "purple"];
const Task1 = ({ text, colors11 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors11[index % colors11.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default Task1;