

const Header = () => {
    const header1 = "<header>";
    const header2 = "</header>";
    
    return (
        <header>
          <div>
            {header1}
          </div>
          <label>Todo List App</label>
          <div>
            {header2}
          </div>
        </header> 
    );
}

export default Header;