
import "./App.css";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from './NavBarRight'
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div>
        <NavBarLeft />
        <NavBarRight />
      </div>
      <div>
        <header></header>
      </div>
    </div>

  );
}

export default App;
