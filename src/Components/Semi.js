
export const colors12 = ["purple", "white"];
const Semi = ({ text, colors12 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors12[index % colors12.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default Semi;