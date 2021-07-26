
import "./App.css";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from './NavBarRight'
import Main from './Main'
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div class="main">
        <NavBarLeft />
        <Main />
        <NavBarRight />
      </div>
      <div>
        <header></header>
      </div>
    </div>

  );
}

export default App;
