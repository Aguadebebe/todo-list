

export const colors7 = ["white", "white","rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "white", ];
const Head2 = ({ text, colors7 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors7[index % colors7.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default Head2;