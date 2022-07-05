
import NavBar from "./components/NavBar";
import Contact from './Contact';
import Gallery from './Gallery';
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";
import {BrowserRouter,Route, Link } from "react-router-dom";

function App() {
  return (
    
    <div>

      <div>
      <NavBar />
      </div>
      {/* <Route exact path="/" component={Home} /> */}

      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Gallery />

      <SocialLinks />
      {/* <Route to="" component={Contact} /> */}
    </div>
  );
}

export default App;
