import React , {useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {


  const [name, setName] = useState('');
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [errors, setErrors] = useState('')
  const navigate = useNavigate();
  const registerUser = async (e) => {
      e.preventDefault();
      if(email === '' || password === '' || name === '' || cpassword === ''){
            setErrors("Please fill all the fields");
            return;
        }
      if(password !== cpassword){
            setErrors("Password does not match");
            return;
      }
      await axios.post('https://vinf-app.vercel.app/register', {name, email, password})
          .then((res) => {
              console.log(res.data);
              navigate('/login');
          })
            .catch((err) => {
                console.log(err);
        })
  }

    return (
    <div>
        <div className='min-h-screen flex flex-col justify-center items-center bg-gray-700'>
        <div className='w-screen md:w-[500px] lg:w-[500px] h-[500px] bg-pink-100 rounded-3xl p-4'>

            <div>
                <h2 className="text-center text-red-600 text-xl font-semibold">{errors}</h2>
                <h1 className='text-4xl md:text-4xl lg:text-4xl font-semibold px-4 lg:mr-3 pt-4'>Register Page</h1>
                <p className='lg:text-xl px-4'>Be a Seller, <Link to="/seller/register"><button className='text-cyan-600 cursor-pointer font-semibold border border-pink-100 p-2'>Login</button></Link>
                </p>

                <form action="" className='flex flex-col justify-center p-4 gap-5 items-center'>
                <div className='flex flex-col justify-center gap-5'>
                <input  className='p-2   outline outline-1 rounded outline-black' type="text" name='Name' placeholder='User Name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input  className='p-2  outline outline-1 rounded outline-black' type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input  className='p-2 outline outline-1 rounded outline-black' type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input  className='p-2 outline outline-1 rounded outline-black' type="password" name='cpassword' placeholder='Confirm Password' value={cpassword} onChange={(e) => setCPassword(e.target.value)}/>
                <button onClick={registerUser} className='bg-cyan-600 text-white p-4 text-xl border-cyan-600 rounded-xl' >Login</button>
                </div>

            </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register