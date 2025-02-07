
 export const colors2 = ["purple","purple", "purple", "purple", "purple", "purple", "purple", "purple",
"purple", "purple", "purple", "purple", "purple", "purple",
"rgb(234, 249, 72)", "rgb(234, 249, 72)", "rgb(234, 249, 72)", 
"rgb(234, 249, 72)", "rgb(234, 249, 72)", "rgb(234, 249, 72)",
"rgb(234, 249, 72)", "rgb(234, 249, 72)", "rgb(234, 249, 72)", "white"];
const ExportTodoForm = ({ text, colors2 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors2[index % colors2.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default ExportTodoForm;