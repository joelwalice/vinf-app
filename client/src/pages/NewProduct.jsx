import React, { useEffect, useState } from "react";
import Navbar from "./Content/SNavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewProduct = () => {
  const [semail, setSemail] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("semail")) {
      setSemail(localStorage.getItem("semail"));
    }
  });

  const toBase = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(',')[1]; // Extract base64 string from data URL
      setImage(base64String); // Set the base64 string to the state
    };
    reader.readAsDataURL(file);
  };

  const createP = (e) => {
    e.preventDefault();
    setImage(e);
    if (name === "" || price === "") {
      setErrors("Please fill all the fields");
      return;
    }
    axios
      .post("https://vinf-app.vercel.app/seller/product/new", {
        semail,
        name,
        color,
        description,
        category,
        price,
        image,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          window.location.href = "/seller/product";
        }
      })
      .catch((err) => {
        console.error("Error adding product:", err);
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
            New Product
          </h1>
          <label className="text-xl">Seller Email</label>
          <input
            type="text"
            placeholder="Product Name"
            required
            value={semail}
            onChange={(ev) => setEmail(ev.target.value)}
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
            placeholder="Product Name"
            required
            value={color}
            onChange={(ev) => setColor(ev.target.value)}
            className=" flex flex-col justify-center items-center p-4 border border-black rounded-md"
          />
          <label className="text-xl">Category of the Product</label>
          <div className="p-2 rounded-lg flex items-center gap-4">
            <label className="">
              <input
                type="radio"
                name="category"
                value="Smartphone"
                checked={category === "Smartphone"}
                onChange={(ev) => setCategory(ev.target.value)}
              />
              {" "}Smartphone
            </label>
            <label className="">
              <input
                type="radio"
                name="category"
                value="Laptop"
                checked={category === "Laptop"}
                onChange={(ev) => setCategory(ev.target.value)}
              />
              {" "}Laptop
            </label>
            <label className="">
              <input
                type="radio"
                name="category"
                value="Groceries"
                checked={category === "Groceries"}
                onChange={(ev) => setCategory(ev.target.value)}
              />
              {" "}Groceries
            </label>
            <label className="">
              <input
                type="radio"
                name="category"
                value="Clothings"
                checked={category === "Clothings"}
                onChange={(ev) => setCategory(ev.target.value)}
              />
              {" "}Clothings
            </label>
          </div>

          <label className="text-xl">Description of the Product</label>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            className="flex flex-col justify-center items-center p-4 border border-black rounded-md"
          />
          <label className="text-xl">Image of the Product</label>
          <div className="flex flex-col justify-center ">
            <div className="rounded-xl">
              {image === "" || image == null ? (
                ""
              ) : (
                <img
                  src={image}
                  width={200}
                  height={200}
                  className="rounded-xl mb-4"
                />
              )}
            </div>
            <input accept="image/*" type="file" onChange={toBase} />
          </div>
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
              onClick={createP}
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

export default NewProduct;
