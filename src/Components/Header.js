import MapColorChars from "./MapColorChars";
import { colors6 } from "./ColorArrays";
import { colors7 } from  "./ColorArrays";

const Header = () => {
    const header1 = "<header>";
    const header2 = "</header>";
    
    return (
        <header>
          <MapColorChars text={header1} colors={colors6} />
          <label className="header-label">Todo List App</label>
          <MapColorChars text={header2} colors={colors7} />
           
        </header> 
    );
}

export default Header;