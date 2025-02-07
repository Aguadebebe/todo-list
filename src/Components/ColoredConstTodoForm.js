


export const colors = ["rgb(52, 52, 239)","rgb(52, 52, 239)","rgb(52, 52, 239)","rgb(52, 52, 239)","rgb(52, 52, 239)",
"rgb(234, 249, 72)","rgb(234, 249, 72)","rgb(234, 249, 72)","rgb(234, 249, 72)","rgb(234, 249, 72)","rgb(234, 249, 72)","rgb(234, 249, 72)","rgb(234, 249, 72)", "rgb(234, 249, 72)", "white","white",
"rgb(252, 252, 36)","rgb(252, 252, 36)","purple","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)","rgb(33, 166, 255)",
"purple","purple","rgb(252, 252, 36)","rgb(52, 52, 239)","rgb(52, 52, 239)","rgb(52, 52, 239)","rgb(252, 252, 36)","yellow"];



const ColoredConstTodoForm = ({ text, colors}) => {
   return (
    <div>
      {text.split("").map((character, index) => (
        <span 
        key={index} 
        style={{ color: colors[index % colors.length]}}
        >
        {character}
        </span>
      ))}
    </div>
   );
     
}

export default ColoredConstTodoForm;