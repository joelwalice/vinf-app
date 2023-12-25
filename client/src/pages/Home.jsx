import React, { useState, useEffect } from 'react'
import NavBar from "./Constant/NavBar";
import Cards from "./Cards";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const router = useNavigate();
    console.log(localStorage.getItem("isLoggedIn"));

    useEffect(() => {
        if(localStorage.getItem("isLoggedIn") == null){
            window.location.href='/login';
          }
    },[])
    
     return (
    <>
    <NavBar />
    <div className='w-screen mx-auto p-4 rounded-full'>
        <div className='max-h-[500px] relative'>
            <div className='select-none absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                <h1 className='px-5 text-4xl sm:text-5xl md:6xl lg:7xl font-semibold'>The <span className='text-red-400'>Best </span>Products</h1>
            <h1 className='px-5 text-4xl sm:text-5xl md:6xl lg:7xl font-semibold'>At Your <span className='text-red-400'>DoorStep</span>....</h1>
                </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1350461/pexels-photo-1350461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
        <div>
            <h1 className='text-4xl font-semibold text-orange-500 sm:text-5xl md:text-6xl lg:text-7xl items-center pt-10 text-highlight '>Top Lists Are : </h1>
        </div>
    </div>
    <Cards />
    </>
  );
}

export default Home
