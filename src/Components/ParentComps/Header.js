import MapColorChars from "../LogicComps/MapColorChars";
import { colors4 } from "../LogicComps/ColorArrays";
import { colors5 } from "../LogicComps/ColorArrays";

const Header = () => {
  const header1 = "<header>";
  const header2 = "</header>";

  return (
    <header>
      <MapColorChars text={header1} colors={colors4} />
      <label className="header-label">Todo List App</label>
      <MapColorChars text={header2} colors={colors5} />
    </header>
  );
};

export default Header;
