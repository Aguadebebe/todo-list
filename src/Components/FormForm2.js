
export const colors9 = ["white", "white", "rgb(49, 49, 230)", "rgb(49, 49, 230)", 
"rgb(49, 49, 230)", "rgb(49, 49, 230)", "white",
];
const FormForm2 = ({ text, colors9 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors9[index % colors9.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default FormForm2;