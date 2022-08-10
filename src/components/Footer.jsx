import React from 'react'

function Footer() {
  return (
    <div  style={{zIndex: '110'}} //this brings footer to top , above the other components
    className=" flex justify-between items-center w-full h-20 text-white 
  fixed bg-white px-4 py-1 mt-28">

      <div>
        <p></p>
        <p> Office </p>
        <p> Brampton, Ontario </p>
      </div>
      
    </div>
  )
}

export default Footer