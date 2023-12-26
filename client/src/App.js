import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SLogin from "./pages/SLogin";
import SRegister from "./pages/SRegister";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Order from "./pages/Order";
import Favourite from "./pages/Favourite";
import Contact from "./pages/Contact";
import SHome from "./pages/SHome";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Income from "./pages/Income";
import SContact from "./pages/SContact";
import Ssetting from "./pages/Ssetting";
import SCart from "./pages/SCart";
import Cart from "./pages/Cart";
import EditProduct from "./pages/[...editProduct]";
import DeleteProduct from "./pages/DeleteProduct";

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
