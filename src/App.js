import "./App.scss";
import "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import CurrentJob from "./components/CurrentJob";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="root">
      <Hero />
      <Portfolio />
      <CurrentJob />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}
export default App;
