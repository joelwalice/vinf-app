import React from "react";
import Navbar from "./Content/SNavBar";

const Income = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 mx-4 text-4xl md:text-5xl lg:text-6xl font-semibold">
        <h1>My Income</h1>
      </div>
      <div className="max-w-screen text-center p-4 mx-4 bg-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 rounded-xl">
        <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-4 bg-gray-600 rounded-md">
          <h1 className="text-white text-4xl lg:text-5xl font-semibold p-4">
            Total Income per Month
          </h1>
          <div className="flex flex-col items-center justify-center text-center pt-4 lg:pt-10 md:pt-6 p-4 text-orange-400 text-5xl font-semibold gap-4">
            <h2>$ 0.00</h2>
            <button className="flex flex-col rounded-md items-center text-3xl justify-center text-center bg-gray-50 text-red-600 border-white ">
              Show History
            </button>
          </div>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-4 bg-gray-600 rounded-md">
          <h1 className="text-white text-4xl lg:text-5xl font-semibold p-4">
            Income this Month
          </h1>
          <div className="flex flex-col items-center justify-center text-center pt-4 lg:pt-10 md:pt-6 p-4 text-orange-400 text-5xl font-semibold gap-10">
            <h2>$ 0.00</h2>
            <button className="flex flex-col rounded-md items-center text-3xl justify-center text-center bg-gray-50 text-red-600 border-white ">
              Show History
            </button>
          </div>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-4 bg-gray-600 rounded-md">
          <h1 className="text-white text-4xl lg:text-5xl font-semibold p-4">
            Overall Income
          </h1>
          <div className="flex flex-col items-center justify-center text-center pt-4 lg:pt-10 md:pt-6 p-4 text-orange-400 text-5xl font-semibold gap-10">
            <h2>$ 0.00</h2>
            <button className="flex flex-col rounded-md items-center text-3xl justify-center text-center bg-gray-50 text-red-600 border-white ">
              Show History
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Income;
