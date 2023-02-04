import logo from "./logo.svg";
import "./App.css";
import "./style/mobile-version.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/WhoAmI";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhoAmI from "./components/WhoAmI";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <WhoAmI />
        <About />
        <Skills />
        <ProjectsList />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
