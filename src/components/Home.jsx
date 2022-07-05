import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { FiArrowRightCircle } from "react-icons/fi";
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="home" 
    className=" h-screen w-full bg-gradient-to-b from-black to bg-gray-800 pt-5 pb-20 md:pb-5 ">
      <div className="pt-8 mt-32 max-w-screen-lg mx-auto translate-y-40 md:translate-y-0 
      flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="pt-5 flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white mb-5 px-4" > I'm a Full Stack Designer </h2>

          <p className="text-gray-500 px-5  py-4  max-w-md" >
            I have 6 years of experience designing User experiences and 2 years of experience developing and designing software.
            Currently, I love to work on web application Design & Development using technologies like
            React, Tailwind, Bootstrap & Firebase.
          </p>
          <div className="px-5" >
            <Link to="portfolio" smooth duration={500} className="text-white cursor-pointer w-fit  px-6 py-3 my-5 flex items-center border-white border  rounded-md bg-gradient-to-r
           from-black to-black hover:to-slate-700 ">
              Portfolio
              <span className="hover:rotate-90 duration-300 ml-5  hover:-translate-y-1" >
                <FiArrowRightCircle size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
            <img src={heroImage} alt="my profile" 
            className="rounded-2xl mx-auto w-2/3 md:w-full md:mt-3 mt-10"></img>
        </div>
      </div>
      {/* <img src={heroImage} alt=" " className="" /> */}
    </div>
  );
};

export default Home;
