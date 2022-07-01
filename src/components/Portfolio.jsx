import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  return (
    <div name="portfolio"
    className="pt-96 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 pt-9 xl:mx-auto md:mx-5 flex flex-col justify-center items-center w-full h-full" >
        <div className="pb-8 " >
          <p className="text-4xl font-bold inline border-b-4 border-grey-500" >Portfolio</p>
          <p className="py-6" >Check out some of my work right here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8" >
          <div>
            <img src={reactWeather} alt="" />
            <div>
                <button> Demo </button>
                <button> Code </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
