import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <Project />
      </div>
    </div>
  );
}

export default App;
