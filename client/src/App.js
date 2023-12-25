import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SLogin from "./Seller-pages/SLogin";
import SRegister from "./Seller-pages/SRegister";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Order from "./pages/Order";
import Favourite from "./pages/Favourite";
import Contact from "./pages/Contact";
import SHome from "./Seller-pages/SHome";
import Product from "./Seller-pages/Product";
import NewProduct from "./Seller-pages/NewProduct";
import Income from "./Seller-pages/Income";
import SContact from "./Seller-pages/SContact";
import Ssetting from "./Seller-pages/Ssetting";
import SCart from "./Seller-pages/SCart";
import Cart from "./pages/Cart";
import EditProduct from "./Seller-pages/[...editProduct]";
import DeleteProduct from "./Seller-pages/DeleteProduct";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Dashboard} />
                    <Route exact path="/login" Component={Login} />
                    <Route exact path="/register" Component={Register} />
                    <Route exact path="/seller/register" Component={SRegister} />
                    <Route exact path="/home" Component={Home} />
                    <Route exact path="/account" Component={Account} />
                    <Route exact path="/order" Component={Order} />
                    <Route exact path="/favourite" Component={Favourite} />
                    <Route exact path="/contact" Component={Contact} />
                    <Route exact path="/cart" Component={Cart} />
                    <Route exact path="/seller/login" Component={SLogin} />
                    <Route exact path="/seller/home" Component={SHome} />
                    <Route exact path="/seller/product" Component={Product} />
                    <Route exact path="/seller/product/new" Component={NewProduct} />
                    <Route exact path="/seller/income" Component={Income} />
                    <Route exact path="/seller/contact" Component={SContact} />
                    <Route exact path="/seller/setting" Component={Ssetting} />
                    <Route exact path="/seller/cart" Component={SCart} />
                    <Route exact path="/seller/product/edit/:id" Component={EditProduct} />
                    <Route exact path="/seller/product/delete/:id" Component={DeleteProduct} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
