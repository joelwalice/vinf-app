import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaSearch,
  FaTimes,
  FaHome,
  FaWallet,
  FaMale,
  FaKey,
  FaDoorOpen,
  FaPhoneAlt,
} from "react-icons/fa";
import avatar from "../../assets/avatar.png";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scale, setScale] = useState(false);
  const [one, setOne] = useState(false);
  const [c, setC] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const win = window.sessionStorage;

  useEffect(() => {
    if(localStorage.getItem("name")){
      setName(localStorage.getItem("name"));
    }
    if(localStorage.getItem("email")){
      setEmail(localStorage.getItem("email"));
    }
    if(localStorage.getItem("password")){
      setPassword(localStorage.getItem("password"));
    }
  },[])

  const Logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('isLoggedIn');
    window.location.assign("/login");
  }

  return (
    <>
      <div className="w-screen mx-auto p-4">
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center">
            <div onClick={() => setNav(!nav)} className=" cursor-pointer">
              <FaBars size={25} />
            </div>
            <Link to="/home" className="text-decoration-none">
              <h1 className=" cursor-pointer text-2xl sm:text-3xl lg:text-4xl px-5">
                V-<span className="text-red-700 font-semibold">Infinity</span>
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center gap-4">
            <div className="flex items-center justify-center bg-gray-300 rounded-full px-2">
              <div className="px-2">
                <FaSearch size={18} />
              </div>
              <input
                className=" bg-transparent  p-2 w-full focus:outline-none"
                type="text"
                placeholder="Search Here"
              />
            </div>
            <button
              className="bg-black text-white hidden md:flex items-center py-2 rounded"
              onClick={() => {
                setC(!c);
              }}
            >
              <BsFillCartFill size={20} className="mr-2" />
              Cart
            </button>
            <div className="w-12 cursor-pointer">
              <img onClick={() => setScale(!scale)} src={avatar} alt="" />
            </div>
          </div>
        </div>
        <div className="flex md:hidden items-center justify-between">
          <div className="flex items-center">
            <div onClick={() => setNav(!nav)} className=" cursor-pointer">
              <FaBars size={25} />
            </div>
            <Link to="/home" className="text-decoration-none">
              <h1 className=" cursor-pointer text-2xl sm:text-3xl lg:text-4xl px-5">
                V-<span className="text-red-700 font-semibold">Infinity</span>
              </h1>
            </Link>
          </div>
          <div className="w-12 cursor-pointer">
              <img onClick={() => setScale(!scale)} src={avatar} alt="" />
            </div>
        </div>

        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"
          }
        >
          <FaTimes
            onClick={() => setNav(!nav)}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-3 mx-2 ">
            V-<span className="text-red-700 font-semibold">Infinity</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800 ">
              <Link to="/home">
                <li
                  className="text-xl py-4 flex cursor-pointer"
                  onClick={() => setOne(!one)}
                >
                  <FaHome size={25} className="text-red-700 mr-4" />
                  Home
                </li>
              </Link>
              <Link to="/account">
                <li className="text-xl py-4 flex cursor-pointer">
                  <FaWallet size={25} className="text-red-700 mr-4" />
                  My Account
                </li>
              </Link>
              <Link to="/order">
                <li className="text-xl py-4 flex cursor-pointer">
                  <TbTruckDelivery size={25} className="text-red-700 mr-4" />
                  My Orders
                </li>
              </Link>
              <Link to="/favourite">
                <li className="text-xl py-4 flex cursor-pointer">
                  <MdFavorite size={25} className="text-red-700 mr-4" />
                  My Favourites
                </li>
              </Link>
              <Link to="/contact">
                <li className="text-xl py-4 flex cursor-pointer">
                  <FaPhoneAlt size={25} className="text-red-700 mr-4" />
                  Contact Us
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className={one ? window.location.reload(true) : ""}></div>
        <div className={c ? window.location.assign("cart") : ""}></div>
        <div
          className={
            scale
              ? "fixed rounded-xl top-20 right-2 w-[220px] h-[400px] bg-gray-300 z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[300px] h-[400px] bg-white z-10 duration-300"
          }
        >
          <FaTimes
            onClick={() => setScale(!scale)}
            className="absolute left-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-3 mx-11 pt-10 flex items-center gap-1">
            Hi
            <span className="font-semibold text-red-700 text-[22px]">
              {name || "User"}
            </span>
          </h2>
          <nav>
            <ul className="flex flex-col px-5 text-gray-800 ">
              <li className="text-xl py-4 flex cursor-pointer">
                <FaMale size={25} className="mr-4" />
                <p className="text-[13px]">{email || "UserName"}</p>
              </li>
              <li className="text-xl py-4 flex cursor-pointer">
                <FaKey size={25} className="mr-4" />
                <p className="text-sm">{password || "Passowrd set"}</p>
              </li>
              <li className="text-xl py-4 flex cursor-pointer">
                <TbTruckDelivery size={25} className="mr-4" />
                Track Orders
              </li>
              <li className="text-xl py-4 flex cursor-pointer">
                <MdFavorite size={25} className="mr-4" />
                WishLists
              </li>
              
                <button onClick={Logout} className="border-0 text-xl py-4 flex cursor-pointer">
                  <FaDoorOpen size={25} className="mr-4" />
                  Logout
                </button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
