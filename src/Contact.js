import React from 'react';
import NavBar from "./components/NavBar";


{/* <NavBar/> */}
function Contact() {
  return (
    <div>
      <NavBar/>
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black p-10 pt-80 text-white'>
       <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8 mt-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Hit that submit button to get in touch </p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="" className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='Your name' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="email" name='email' placeholder='Your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name="message" id="" cols="0" rows="10" className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button type="submit" className='text-white bg-gradient-to-b from-slate-600 to-slate-400 px-8 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'> Submit </button>
            </form>
        </div>
       </div>
    </div>
    </div>
  );
}

export default Contact