 export const colors3 = ["purple", "purple", "purple", "purple",
"purple", "purple", "purple"];

const Return = ({ text, colors3 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors3[index % colors3.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default Return;