import React from "react";
import NavBar from "./components/NavBar";
import Contact from "./Contact";
import Home from "./Home";
import Gallery from "./Gallery";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";
import { HashRouter,BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
    // <BrowserRouter>
    // <div className="container mt-2" style={{ marginTop: 40 }}>
    //     <NavBar />

    //     <Routes>
    //       <Routes exact path="/">
            
    //       </Routes>
          
    //       <Route path="/Contact" element={<Contact/>} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    // <div className="App">

    // {/* <NavBar /> */}

    // {/* <Routes>

    //     <Route exact path="/Contact" element={<Contact/>} />
    //     <Route exact path="/components/Home" element={<Home/>} />
    //   </Routes> */}

    //   {/* <Home />
    //   <About />
    //   <Portfolio />
    //   <Experience />
    //   <SocialLinks /> */}
    //   {/* <Contact /> */}
    //   {/* <Gallery /> */}
    // {/* </div> */}
  );
}

export default App;
