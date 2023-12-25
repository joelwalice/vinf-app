import React from 'react'
import Navbar from './Content/SNavBar'
const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="text-4xl md:text-5xl lg:text-6xl p-2 m-4 font-semibold ">
      <h1>Contact Us</h1>
    </div>
       <div className='max-w-screen text-center p-4 mx-4 bg-gray-800 sm:grid-cols-3 gap-4 rounded-xl'>
         <div className='shadow-md shadow-[#040c16] duration-500 p-4 bg-gray-600 flex flex-col items-center rounded-md'>
              <h1 className='text-5xl md:text-5xl lg:text6xl font-semibold text-white justify-center m-4 '>Address : </h1>
              <h1 className='text-2xl md:text-3xl lg:text4xl font-semibold text-white m-2 '>XYZ Street, </h1>
            <div className='flex items-center gap-4'>
                <button className='bg-white text-red-500 font-semibold rounded-md p-2 border-0 shadow shadow-lg'>Call Us</button>
                <button className='bg-white text-red-500 font-semibold rounded-md p-2 border-0 shadow shadow-lg'>Text Us</button>
                </div>
         </div>
       </div>
    </>
  )
}

export default Contact