import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to bg-black text-white pt-96 md:pt-96"
    >
      <div className=" max-w-screen-lg px-20  pt-40  sm:pt-10 mx-auto flex flex-col justify-center w-full h-full " >
        <div className="pb-1 mt-32 sm:mt-10 sm:pt-10" >
          <p className="text-4xl font-bold inline border-b-4 border-gray-800" >About</p>
        </div>
        <p className="text-xl mt-10" >
        I am a Designer, Visual artist, Composer/Sound Engineer and Technology enthusiast.
        am based in Toronto ON. My work focuses on creating Visually compelling 
        imagery for my clients in order to better connect with their audience.
        I excel at creative problem solving and I always bring my flexibility, 
        strong eye for detail and positive attitude to everything that I do.
        </p >
        <br />
        <p className="text-xl mt-5 mb-8" >
        If you're looking for help with your online image, branding, 
        Art direction or Web design, but aren't sure which direction to take, 
        feel free to Get in touch with me.
        </p>
      </div>
    </div>
  );
};

export default About;
