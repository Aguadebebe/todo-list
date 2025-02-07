

const MapColorChars = ({ text, colors }) => {
    return (
        <div> 
           {text.split("").map((character, index) => (
             <span
              key={index}
              style={{ color: colors[index % colors.length] }}
             >
              {character}
             </span>
          ))}
        </div>
    );
}

export default MapColorChars;