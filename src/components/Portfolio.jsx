import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {

  const portfolios=[
    {
      id:1,
      src: arrayDestruct
    },
    {
      id:2,
      src: reactParallax
    },
    {
      id:3,
      src: navbar
    },
    {
      id:4,
      src: reactSmooth
    },
    {
      id:5,
      src: installNode
    },
    {
      id:6,
      src: reactWeather
    }
  ]

  return (
    <div 
    style={{paddingTop: 800}}
    name="portfolio"
    className="pt-96  bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4  md:pt-20 xl:mx-auto md:mx-0 flex md:flex-col md:justify-center item-center w-full h-full" >
        <div className="pb-8 sm:pt-0 pt-20 pl-6 bg-gradient-to-b from-gray-800 to-black w-full" > 
          <p className="text-4xl font-bold inline pt border-b-4 border-grey-500 ml-"> Portfolio </p>
          <p className="py-6"> Check out some of my work right here. </p>
        </div>
          
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-15 bg-gradient-to-b from-black to-gray-800 w-full"> 
        {/* make sure your array map (portfolios.map) is within the grid so you dont accidentally map multiple cols */}
        
        {
          portfolios.map(({id, src}) => (

          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
            <div className=" flex item-center justify-center py-1 px-2 ">
                <button className="w-1/2 px-6 py-3 m-4 flex text-white items-center border-white border  rounded-md bg-gradient-to-r
           from-black to-black duration-200 hover:to-slate-700 hover:scale-105"> Demo </button>
                <button className="w-1/2 px-6 py-3 m-4 flex text-white items-center border-white border  rounded-md bg-gradient-to-r
           from-black to-black duration-200 hover:to-slate-700 hover:scale-105"> Code </button>
            </div>
          </div>
          ))

        }

        </div>

      </div>
    </div>
  );
};

export default Portfolio;
