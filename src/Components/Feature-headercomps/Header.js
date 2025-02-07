import Head1 from "./Head1";
import { colors6 } from "./Head1";
import Head2 from "./Head2";
import { colors7 } from "./Head2";

const Header = () => {
    const header1 = "<header>";
    const header2 = "</header>";
    
    return (
        <header>
          <Head1 text={header1} colors6={colors6} />
          <label className="header-label">Todo List App</label>
          <Head2 text={header2} colors7={colors7} />
           
        </header> 
    );
}

export default Header;