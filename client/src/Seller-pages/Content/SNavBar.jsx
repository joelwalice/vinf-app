import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaSearch,
  FaTimes,
  FaHome,
  FaWallet,
  FaMale,
  FaKey,
  FaDoorOpen,
  FaCog,
  FaPhone,
  FaPhoneAlt,
  FaBox,
} from "react-icons/fa";
import avatar from "../../assets/avatar.png";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nave, setNave] = useState(false);
  const [scales, setScales] = useState(false);
  const [one, SetOne] = useState(false);
  const [c, setC] = useState(false);
  const [sname, setSname] = useState("");
  const [semail, setSemail] = useState("");
  const [spassword, setSpassword] = useState("");
  useEffect(() => {

    if(localStorage.getItem("sname")){
      setSname(localStorage.getItem("sname"));
    }
    if(localStorage.getItem("semail")){
      setSemail(localStorage.getItem("semail"));
    }
    if(localStorage.getItem("spassword")){
      setSpassword(localStorage.getItem("spassword"));
    }
  },[])

  const Logout = () => {
    localStorage.removeItem("sname");
    localStorage.removeItem("isLoggedInSeller");
    window.location.assign("/seller/login");
  }

  return (
    <div className="w-screen p-4">
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center">
          <div onClick={() => setNave(!nave)} className=" cursor-pointer">
            <FaBars size={25} />
          </div>
          <Link to="/seller/home" className="text-decoration-none">
            <h1 className=" cursor-pointer flex items-center text-2xl sm:text-3xl lg:text-4xl px-5">
              V-
              <span className="text-red-700 font-semibold">
                Infinity<span className="text-orange-400"> Admin</span>
              </span>
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
            <img onClick={() => setScales(!scales)} src={avatar} alt="" />
          </div>
        </div>
      </div>
      <div className="flex md:hidden items-center justify-between">
        <div className="flex items-center">
          <div onClick={() => setNave(!nave)} className=" cursor-pointer">
            <FaBars size={25} />
          </div>
          <Link to="/seller/home" className="text-decoration-none">
            <h1 className=" cursor-pointer flex items-center text-2xl sm:text-3xl lg:text-4xl px-5">
              V-
              <span className="text-red-700 font-semibold">
                Infinity<span className="text-orange-400"> Admin</span>
              </span>
            </h1>
          </Link>
        </div>
        <div>
        <div className="w-12 cursor-pointer">
            <img onClick={() => setScales(!scales)} src={avatar} alt="" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {nave ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nave
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"
        }
      >
        <FaTimes
          onClick={() => setNave(!nave)}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <Link to="/seller/home" className="text-decoration-none">
          <h2 className="text-2xl p-0 mx-0 lg:mx-2 p-3 mt-2">
            V-
            <span className="font-semibold">
              Infinity
              <span className="text-xl lg:text-2xl md:text-2xl text-red-600 font-semibold">
                Admin
              </span>
            </span>
          </h2>
        </Link>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 ">
            <Link to="/seller/product">
              <li
                className="text-xl py-4 flex cursor-pointer"
                onClick={() => SetOne(!one)}
              >
                <FaBox size={25} className=" text-red-700 mr-4" /> My Products
              </li>
            </Link>
            <Link to="/seller/income">
              <li className="text-xl py-4 flex cursor-pointer">
                <FaWallet size={25} className=" text-red-700 mr-4" />
                My Income
              </li>
            </Link>
            <Link to="/seller/setting">
              <li className="text-xl py-4 flex cursor-pointer">
                <FaCog size={25} className=" text-red-700 mr-4" />
                Settings
              </li>
            </Link>
            <Link to="/seller/contact">
              <li className="text-xl py-4 flex cursor-pointer">
                <FaPhoneAlt size={25} className=" text-red-700 mr-4" />
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
          scales
            ? "fixed rounded-xl top-20 right-2 min-w-[250px] min-h-[350px] bg-gray-300 z-10 duration-300"
            : "fixed top-0 right-[-100%] min-w-[250px] min-h-[300px] bg-white z-10 duration-300"
        }
      >
        <FaTimes
          onClick={() => setScales(!scales)}
          className="absolute left-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-3 mx-11 pt-10 ">
          {" "}
          Hi{" "}
          <span className="font-semibold text-red-700 text-[22px]">
            {sname || "Seller"}
          </span>
        </h2>
        <nav>
          <ul className="flex flex-col px-5 text-gray-800 ">
            <li className="text-xl py-4 flex cursor-pointer">
              <FaMale size={25} className="mr-4" />
              <p className="text-[13px]">{semail || "UserName"}</p>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaKey size={25} className="mr-4" />
              <p className="text-[13px]">{spassword || "Password"}</p>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Deliveries
            </li>
            <button onClick={Logout} className="border-0 text-xl py-4 flex cursor-pointer">
                  <FaDoorOpen size={25} className="mr-4" />
                  Logout
                </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
