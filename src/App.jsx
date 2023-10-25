import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import "./App.css";
import About from "./sections/About";

function App() {
  return (
    <main className="max-w-screen-lg m-auto px-5 font-grotesk">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
