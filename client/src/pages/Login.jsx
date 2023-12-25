import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import axios from "axios";

const SLogin = () => {

  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const navigate = useNavigate();
  const win = window.sessionStorage;

  const loginUser = async (e) => {
        e.preventDefault();
        if(email === '' || password === ''){
            setErrors("Please fill all the fields");
            return;
        }
        await axios.post('https://vinf-app.vercel.app/login', { email, password})
          .then((res) => {
            const { data } = res;
            const win = window.sessionStorage;
              if(data.status === "Success"){
                  localStorage.setItem('name',data.data.name);
                  localStorage.setItem('email',data.data.email);
                  localStorage.setItem('password',data.data.password);
                  localStorage.setItem('isLoggedIn',"true");
                  navigate('/home');
              }
              else if(data.status === "Password does not match"){
                    setErrors("Password does not match");
              }
              else{
                  setErrors("User does not exist");
              }
          })
            .catch((err) => {
                console.log(err);
        })
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const isLoggedInSeller = localStorage.getItem("isLoggedInSeller");
    if (isLoggedIn == "true") {
        navigate("/home");
    }
    if (isLoggedInSeller == "true") {
        navigate("/seller/home");
    }
  }, [navigate, win]);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-700'>

        <div className='w-screen md:w-[500px] lg:w-[500px] min-h-[500px] bg-pink-100 rounded-3xl p-4'>

            <div>
                <h2 className="text-center text-red-600 text-xl font-semibold">{errors}</h2>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-semibold px-4 lg:mr-4 pt-2'>Login Page</h1>
                <p className='lg:text-xl pt-4 px-4'>Already a Seller, <Link to="/seller/login"><button className='text-cyan-600 cursor-pointer font-semibold border border-pink-100 p-2'>Login</button></Link>
                </p>

                <form action="" className='flex flex-col justify-center p-4 pt-6 gap-5'>
                <div className=' flex flex-col justify-center gap-5'>
                <input  className='p-2 outline outline-1 rounded outline-black' type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <input  className='p-2 outline outline-1 rounded outline-black' type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                </div>
                    <button onClick={loginUser} className=' p-4 flex flex-col items-center bg-cyan-600 text-xl text-white border border-cyan-600 rounded-xl pt-auto' >Login</button>
                <div className='flex justify-center items-center gap-2 md:text-xl lg:text-xl'><p className='text-gray-500'>--------</p>
                <h3 className='text-center text-gray-500'>OR</h3>
                <p className='text-gray-500'>   --------</p>
                </div>

            </form>
            <div className='flex flex-col justify-center items-center'>
                    <button onClick={() => {window.location.assign('register')}} className='bg-red-600 text-white text-xl border-red-600 rounded-md p-4'>Register Yourself</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SLogin