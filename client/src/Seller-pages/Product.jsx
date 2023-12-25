import React, { useEffect, useState } from "react";
import Navbar from "./Content/SNavBar";
import { Link } from "react-router-dom";
import { FaPlus, FaTrash, FaPen } from "react-icons/fa";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const win = window.sessionStorage;
  const [semail, setSemail] = useState("");
  useEffect(() => {
    const sellerEmail = localStorage.getItem("semail");
    if (sellerEmail) {
      setSemail(sellerEmail);
      axios
        .post(`http://vinf-app.vercel.app/seller/product`, { semail })
        .then((response) => {
          const { data } = response;
          // Assuming 'response' contains the data returned from the API
          setProducts(data.data);
          console.log(response);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }); 

  return (
    <div>
      <Navbar />
      <div className="p-4 flex text-3xl md:text-5xl lg:text-6xl font-semibold flex items-center justify-between">
        <h1 className="p-4">My Products</h1>
        <Link to="/seller/product/new" className="items-center float-right">
          <button className="bg-green-600 text-white items-center text-sm md:text-2xl lg:text-2xl border border-green-600 flex items-center justify-center mr-3 gap-3">
            <FaPlus size={20} /> New Product
          </button>
        </Link>
      </div>
      <div className="max-w-screen p-6 mx-auto">
        <table className="w-full sm:mr-4">
          <thead className=" font-semibold bg-blue-200">
            <tr>
              <td className="text-md md:text-3xl p-4 border border-2 border-gray-400">
                Product Name
              </td>
              <td className="text-md md:text-3xl p-4 border border-2 border-gray-400">
                Controls
              </td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border border-2 border-gray-300">
                <td className="text-sm md:text-xl p-4 border border-2 border-gray-300">
                  {product.name}
                </td>
                <td className="text-xl p-4 flex">
                  <Link
                    to={`/seller/product/edit/${product._id}`}
                    type="button"
                    className="p-2 bg-red-700 text-white rounded-md border-red-700 text-sm md:text-md lg:text-md mr-2 flex items-center gap-2"
                  >
                    <FaPen size={18} />
                    Edit
                  </Link>
                  <Link
                    to={`/seller/product/delete/${product._id}`}
                    type="button"
                    className="p-2 bg-red-700 text-white rounded-md border-red-700 text-sm md:text-md lg:text-md flex items-center gap-2"
                  >
                    <FaTrash size={18} />
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
