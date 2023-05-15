import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Sobre from "./components/Sobre.js";
import Skills from "./components/Skills.js";
import Projetos from "./components/Projetos.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Sobre />
      <Skills/>
      <div id="projetos" data-scroll="true">
        <Projetos id="projetos" data-scroll="true" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
