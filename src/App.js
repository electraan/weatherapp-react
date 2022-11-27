import logo from "./logo.svg";
import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>It`s owesome app!</p>
        <h1>Learn React with me</h1>

        <Weather city="California" />
      </header>
    </div>
  );
}

export default App;
