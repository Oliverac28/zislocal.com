import { FaInstagram } from "react-icons/fa";
import logo from "./assets/logo.svg";
import sample from "./assets/sample.mp4";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} class="logo" alt="logo" />
      <header className="App-header">
        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <h3 id="cs">Coming Soon...</h3>
      </header>

      <div className="flex-container">
        <a className="flex-item" id="mail" href="mailto:hello@zislocal.com">
          hello@zislocal.com
        </a>

        <a className="flex-item" href="https://www.instagram.com/zis.local/">
          <FaInstagram size="45px" />
        </a>
      </div>
    </div>
  );
}

export default App;
