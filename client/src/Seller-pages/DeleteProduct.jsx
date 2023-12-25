import React from 'react';
import Navbar from "./Content/SNavBar";
import {useParams} from "react-router-dom";
import axios from "axios";

const DeleteProduct = () => {
    const {id} = useParams();
    async function deleteP()   {
        await axios.delete(`https://vinf-app.vercel.app/seller/product/delete/${id}`)
            .then((res) => {
                window.location.href = '/seller/product';
            })
            .catch((err) => {
                console.log(err);
            })
    }
    function goBack()   {
        window.history.back();
    }
    return (
        <div>
            <Navbar />
            <div className="mr-6">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold p-4 ml-10'>Delete Product</h1>
                <div className='flex items-center gap-4'><h2 className='text-2xl font-semibold p-4 ml-10 text-red-600'>Are you sure you want to delete this product?</h2>
                <button onClick={deleteP} className='bg-blue-900 border-blue-900 text-white font-semibold rounded-md text-2xl'>Yes</button>
                <button onClick={goBack} className='bg-gray-500 border-gray-500 text-white font-semibold rounded-md text-2xl'>No</button></div>
            </div>
        </div>
    );
};

export default DeleteProduct;