import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const DashBoard = () => {
  
  const router = useNavigate();
  const handle = () =>{
    window.location.assign('login');
  }


  return (
    <div className='bg-gray-800 h-screen w-screen'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl p-4 text-white lg:text-6xl font-semibold mt-10 pt-10'>Welcome to V-<span className="font-bold text-orange-500">Infinity</span></h1>
        <p className='text-xl text-white lg:text-3xl p-4 mt-10 pt-10'>An Online Platform that can deliver A to Z products at your door Step.<br></br> You can order by logging into the Page. Click the button to Explore more....</p>
      </div>
      <div className='flex flex-col justify-center items-center pt-10 text-xl lg:text-3xl'>
        <button className='bg-white rounded-md text-red-500 border border-white p-4 hover:bg-red-500 hover:text-white hover:border-red-600' onClick={handle}>- Click to Login -</button>
      </div>
    </div>
  )
}

export default DashBoard
