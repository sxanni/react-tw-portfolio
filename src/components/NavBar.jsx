import React, { useState } from "react";
import icon from "../assets/icon.gif";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false); //set state in order to flip hamburger icon

  // initialize array of links with ids
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  
  return (
    <div
    style={{zIndex: '100'}} //this brings navbar to top , above the other components
      className=" flex justify-between items-center w-full h-20 text-white 
    fixed bg-black px-4 py-1"
    >
      <img src={icon} alt="" className="w-12 mr" />
      <div className="name text-5xl font-signature mr-52 lg:mr-36 xl:-translate-x-60 lg:-translate-x-36 pt-2 bg-black ">Sanni</div>
      <ul className="hidden md:flex bg-black">
        {/* map link to links array */}
        {links.map(({ id, link }) => (
          // insert li tag with properties you want for each link

          <li
            //key link.id in tag so react can identify changes to each link}
            key={link.id}
            className="px-4 cursor-crosshair capitalize font-medium
         text-gray-500 hover:text-white hover:scale-110 duration-200 "
          >
            {/* link value (name) will be outputted here */}
            {link}
          </li>
        ))}
      </ul>
      {/* //bring in hamburger icons */}
      <div onClick={() => setNav(!nav)} 
      className="cursor-pointer pr-4 z-10 text-gray-500 hover:text-white 
      md:hidden">
        {/* //if nav state open true we want FaTimes icon (x), else we want FaBars icon(=) */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>


            {/* mobile nav */}
      {nav && (

        <ul
          className="flex flex-col cursor-crosshair justify-center items-center 
      absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
      from-black to-gray-800 text-gray-500"
        >
          {/* map link to links array */}
          {links.map(({ id, link }) => (
            // insert li tag with properties you want for each link

            <li
              //key link.id in tag so react can identify changes to each link}
              key={link.id}
              className="px-4 py-6 text-4xl cursor-crosshair capitalize font-medium
         text-gray-500 hover:text-white hover:scale-110 duration-200 "
            >
              {/* link value (name) will be outputted here */}
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}; 

export default NavBar;