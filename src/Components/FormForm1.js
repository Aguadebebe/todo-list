

export const colors8 = ["white", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)",
"rgb(89, 185, 254)", "rgb(89, 185, 254)", "rgb(89, 185, 254)", "rgb(89, 185, 254)", "rgb(89, 185, 254)", "rgb(89, 185, 254)", 
"rgb(89, 185, 254)", "rgb(89, 185, 254)", "rgb(89, 185, 254)", 
"white","rgb(25, 143, 254", "rgb(241, 253, 12)", "rgb(241, 253, 12)", "rgb(241, 253, 12)", "rgb(241, 253, 12)",
"rgb(241, 253, 12)", "rgb(241, 253, 12)", "rgb(241, 253, 12)", "rgb(241, 253, 12)", "rgb(241, 253, 12)",
"rgb(241, 253, 12)", "rgb(241, 253, 12)", "rgb(241, 253, 12)", "rgb(25, 143, 254", ];
const FormForm1 = ({ text, colors8 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors8[index % colors8.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default FormForm1;