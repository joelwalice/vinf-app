import React from "react";
import Navbar from "./Constant/NavBar";

const Contact = () => {
    return (
        <>
    <Navbar />
    <div className="text-4xl md:text-5xl lg:text-6xl pt-4 pb-10 px-10 mx-6 font-semibold ">
      <h1>Contact Us</h1>
    </div>
       <div className='max-w-[1200px] min-h-[400px] text-center px-10 mx-10 bg-gray-800 sm:grid-cols-3 gap-4 py-6 rounded-xl'>
         <div className='shadow-md shadow-[#040c16] duration-500 px-4 bg-gray-600 min-w-fit h-[350px] flex flex-col items-center justify-center rounded-md'>
              <h1 className='text-4xl md:text-5xl lg:text6xl font-semibold text-white pt-4 mx-4 '>Address : </h1>
              <p className='text-2xl md:text-3xl lg:text-4xl text-orange-400 px-10 mx-10 pt-4'> No 2, XYZ Street <br/> </p>
                <p className='text-2xl md:text-3xl lg:text-4xl text-orange-400  px-10 mx-10'> ABC City <br/> </p>
                <div className='flex pt-10 p-4 mx-10 gap-4'>
                    <button>Call Us</button>
                <button>Text Us</button>
                </div>
         </div>
       </div>
    </>
    );
};

export default Contact;