import React, { useState, useEffect } from "react";
import NavBar from "./Constant/NavBar";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  console.log(localStorage.getItem("isLoggedIn"));
  const [products, setProducts] = useState([]);

  const getProducts = async() => {
    try {
        await axios.post(`http://localhost:1337/seller/product`)
        .then((res) => {
            setProducts(res.data.data);
        })
        
      } 
    catch (error) {
        console.error("Error fetching products:", error);
      }
  }

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") == null) {
      window.location.href = "/login";
    }
    getProducts();
  });

  return (
    <>
      <NavBar />
      <div className="w-screen mx-auto p-4 rounded-full">
        <div className="max-h-[500px] relative">
          <div className="select-none absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
            <h1 className="px-5 text-4xl sm:text-5xl md:6xl lg:7xl font-semibold">
              The <span className="text-red-400">Best </span>Products
            </h1>
            <h1 className="px-5 text-4xl sm:text-5xl md:6xl lg:7xl font-semibold">
              At Your <span className="text-red-400">DoorStep</span>....
            </h1>
          </div>
          <img
            className="w-full max-h-[500px] object-cover"
            src="https://images.pexels.com/photos/1350461/pexels-photo-1350461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-orange-500 sm:text-5xl md:text-6xl lg:text-7xl items-center pt-10 text-highlight ">
            Top Lists Are :{" "}
          </h1>
        </div>
      </div>
      <Cards />
      <div className="p-4">
        <h1 className="p-2 text-4xl font-semibold text-orange-500 sm:text-5xl md:text-6xl lg:text-7xl items-center text-highlight ">
          Products
        </h1>
        <div className="p-2 flex items-center gap-3">
          {
            products.map((product,i) => (
                <div key = {i}>
                    <div className="flex grid cols-3 sm:grid-cols-1 items-center justify-center p-4 bg-gray-500 rounded-lg">
                        {
                            product.image ? <img src={product.image} width={300} className="rounded-lg items-center justify-center"/> : <img src="https://www.psdmockups.com/wp-content/uploads/2022/09/iPhone-14-Pro-Mockup-2.jpg" width={300} className="rounded-lg items-center justify-center"/>
                        }
                        <h1 className="text-xl font-semibold p-2 items-center justify-center text-white">{product.name}</h1>
                    </div>
                </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Home;
