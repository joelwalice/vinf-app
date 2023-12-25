import React, { useEffect, useState } from "react";
import Navbar from "./Content/SNavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProduct = ({
  _id,
  name: ename,
  description: edescription,
  price: eprice,
  color: ecolor,
  category: ecategory,
}) => {
  const [name, setName] = useState(ename || "");
  const [color, setColor] = useState(ecolor || ""); // [red,green,blue
  const [description, setDescription] = useState(edescription || "");
  const [price, setPrice] = useState(eprice || "");
  const [errors, setErrors] = useState("");
  const [title, setTitle] = useState("");
  const [semail,setSemail] = useState("");
  const [product, setProduct] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(ecategory || "");

  useEffect(() => {
    const sellerEmail = localStorage.getItem("semail");
    if (sellerEmail) {
      setSemail(sellerEmail);
    }
    if (!id) {
      setProduct(true);
      return product;
    } else {
      axios
        .get(`https://vinf-app.vercel.app/seller/product/${id}`)
        .then((res) => {
          setName(res.data.name);
          setDescription(res.data.description);
          setColor(res.data.color);
          setCategory(res.data.category);
          setPrice(res.data.price);
        });
    }
  }, []);

  const editP = () => {
    if (name === "" || price === "") {
      setErrors("Please fill all the fields");
      return;
    }

    axios
      .put(`https://vinf-app.vercel.app/seller/product/edit/${id}`, {
        name,
        color,
        category,
        description,
        price,
      })
      .then((res) => {
        navigate("/seller/product");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-2xl font-semibold text-center text-red-600">
          {errors}
        </h2>
        <h2 className="text-2xl font-semibold text-center text-red-600">
          {title}
        </h2>
        <form className="flex flex-col p-4 gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
            Edit Product
          </h1>
          <label className="text-xl">Seller Email</label>
          <input
            type="text"
            placeholder="Product Name"
            required
            value={semail}
            readOnly
            className=" flex flex-col justify-center items-center p-4 border border-black rounded-md"
          />
          <label className="text-xl">Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            required
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className=" flex flex-col justify-center items-center p-4 border border-black rounded-md"
          />
          <label className="text-xl">Colour of the Product</label>
          <input
            type="text"
            placeholder="Colour"
            required
            value={color}
            onChange={(ev) => setColor(ev.target.value)}
            className=" flex flex-col justify-center items-center p-4 border border-black rounded-md"
          />
          <label className="text-xl">Category of the Product</label>
          <input
            type="text"
            placeholder="Category"
            required
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
            className=" flex flex-col justify-center items-center p-4 border border-black rounded-md"
          />
          <label className="text-xl">Description of the Product</label>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            className="flex flex-col justify-center items-center p-4 border border-black rounded-md"
          />

          <label className="text-xl">Price (in INR)</label>
          <input
            type="text"
            placeholder="Price"
            required
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
            className=" flex flex-col justify-center items-center p-4 border border-black rounded-md"
          />

          <div>
            <button
              onClick={editP}
              className="rounded-xl p-4 bg-red-700 border-red-700 text-white font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
