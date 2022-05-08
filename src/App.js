import logo from "./logo.svg";
import "./App.css";

//Import components
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello world</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component1 />
        <Component2 maPremiereProps="Une props" />
      </header>
    </div>
  );
}

export default App;
