

export const colors6 = ["white", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "rgb(49, 49, 230)", "white", ];
const Head1 = ({ text, colors6 }) => {
    return (
        <div>
          {text.split("").map((character, index) => (
            <span 
            key={index} 
            style={{ color: colors6[index % colors6.length]}}
            >
            {character}
            </span>
          ))}
        </div>
       );
}

export default Head1;