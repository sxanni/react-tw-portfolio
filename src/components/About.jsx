import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="h-screen w-full  bg-gradient-to-b from-gray-800 to bg-black text-white  pt-4  sm:pt-10 sm: "
    >
      <div className=" max-w-screen-lg p-8  sm:pt-36 mx-auto flex flex-col justify-center w-full h-full " >
        <div className="pb-8 sm:mt-10 sm:pt-10" >
          <p className="text-4xl font-bold inline border-b-4 border-gray-800" >About</p>
        </div>
        <p className="text-xl mt-20" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          iusto, sunt, molestiae mollitia dolorem rerum dignissimos porro nemo
          ab nihil repellendus maiores minus laborum aspernatur distinctio amet
          doloribus beatae praesentium!
        </p >
        <br />
        <p className="text-xl mt-20" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          exercitationem commodi iste quas molestias ipsum, doloribus temporibus
          saepe voluptas ducimus vitae soluta porro. Enim, doloremque! Et iste
          eligendi excepturi animi?
        </p>
      </div>
    </div>
  );
};

export default About;
