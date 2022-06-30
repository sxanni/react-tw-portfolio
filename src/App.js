
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      

      <NavBar style={{zIndex: '100'}} />
      <Home />
      <About />
      <Portfolio />

      <SocialLinks />
    </div>
  );
}

export default App;
