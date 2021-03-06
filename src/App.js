import { FaInstagram } from "react-icons/fa";
import logo from "./assets/logo.svg";
import sample from "./assets/sample.mp4";
import "./App.css";

function App() {
  return (
    <div className="App">
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>

      <img src={logo} class="logo" alt="logo" />

      <header className="App-header">
        <p id="cs">Coming Soon...</p>
      </header>

      <div className="flex-container">
        <a className="flex-item" id="mail" href="mailto:hello@zislocal.com">
          <h4>hello@zislocal.com</h4>
        </a>
        <div className="flex-item">
          <a id="social" href="https://www.instagram.com/zis.local/">
            <FaInstagram size="8vh" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
