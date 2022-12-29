import React from "react";
import rockPaperShonen from "../assets/portfolio/rockPaperShonen.gif";
import bootstrapWater from "../assets/portfolio/bootstrapWater.gif";
import taskAura from "../assets/portfolio/taskAura.gif";
import vhsFormReact from "../assets/portfolio/vhsFormReact.gif";
import xthetics from "../assets/portfolio/xthetics.gif";
import usestate from "../assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title:"[Water] responsive bootstrap",
      src: bootstrapWater,
      demohref:"https://sxanni.github.io/water/",
      codehref:"https://github.com/sxanni/water"
    },
    {
      id: 2,
      title: "[VHS CLUB] Form Validation",
      src: vhsFormReact,
      demohref: "https://sxanni.github.io/reactForm-Validation/",
      codehref: "https://github.com/sxanni/reactForm-Validation",
    },
    {
      id: 3,
      title: "[TaskAura] Gamefied ToDo List",
      src: taskAura,
      demohref: "https://sxanni.github.io/ReactTaskAura/",
      // demohref: "https://www.figma.com/proto/vh7mWzH1fFFs0jKBX9tn2w/TaskAura-TODO-App?page-id=222%3A2&node-id=222%3A308&viewport=344%2C198%2C0.18&scaling=min-zoom&starting-point-node-id=222%3A308",
      codehref: "https://github.com/sxanni/ReactTaskAura"
    },
    {
      id: 4,
      title: " [xthetics] Visual therapy site ",
      src: xthetics,
      demohref: "https://sxanni.github.io/xthetics/",
      codehref: "https://github.com/sxanni/xthetics",
    },
    {
      id: 5,
      title: "[Rock Paper Shonen] Anime Game",
      src: rockPaperShonen,
      demohref: "https://sxanni.github.io/fatasy-clash/",
      codehref: "https://github.com/sxanni/fatasy-clash",
    },
 
  ];

  return (
    <div
      style={{ paddingTop: 500 }}
      name="portfolio"
      className="pt-96  bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4  md:pt-20 xl:mx-auto md:mx-0 flex md:flex-col md:justify-center item-center w-full h-full">
        <div className="pb-8 sm:pt-0 pt-20 pl-6 bg-gradient-to-b from-gray-800 to-black w-full">
          <p className="text-4xl font-bold inline pt border-b-4 border-grey-500 ml-">
            {" "}
            Portfolio{" "}
          </p>
          <p className="py-6"> Check out some of my work right here. </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-15 bg-gradient-to-b from-black to-gray-800 w-full">
          {/* make sure your array map (portfolios.map) is within the grid so you dont accidentally map multiple cols */}

          {portfolios.map(({ id, title, src, demohref, codehref }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h4 className=" text-1xl font-bold flex items-center justify-center mt-5">{title}</h4>
              <div className=" flex item-center justify-center py-1 px-2 z-200">
               
                <a href={demohref} target="_blank" className="w-1/2 px-6 py-3 m-4 flex text-white items-center border-white border  rounded-md bg-gradient-to-r
           from-black to-black duration-200 hover:to-slate-700 hover:scale-105" >
                <button
                 
                >
                  {" "}Demo{" "}
                </button>
                </a>

                <a href={codehref}  className="w-1/2 px-6 py-3 m-4 flex text-white items-center border-white border  rounded-md bg-gradient-to-r
           from-black to-black duration-200 hover:to-slate-700 hover:scale-105" >
                <button
                  onClick={codehref}
                 
                >
                  {" "}Code{" "}
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
