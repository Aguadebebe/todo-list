
export const colors5 = ["purple", "white"];

const Return2 = ({ text, colors5 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors5[index % colors5.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default Return2;