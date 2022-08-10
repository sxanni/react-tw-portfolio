import React from 'react'
import NavBar from './components/NavBar'
import Contact from "./Contact";
import Gallery from "./Gallery";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
        <NavBar/>
         <Header />
         <div className="mb-5">
            <About  />
         </div>
            <Portfolio  />
            <Experience />
            <SocialLinks />
            <div className="mb-5">
              
        <Footer />
            </div>
    </div>
  )
}

export default Home