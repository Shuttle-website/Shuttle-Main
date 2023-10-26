import {React,useEffect} from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Store from '../pages/Store.jsx'
import Navbar from '../components/Navbar.jsx'
import Contact from '../pages/Contact.jsx'
import Combo from '../pages/Combo.jsx'
import Account from '../pages/Account'
import Cart from '../pages/Cart'
import { ChakraProvider } from '@chakra-ui/react'
import Login from '../pages/Login'
import Create from '../pages/Create'
import AdminHome from '../components/AdminComponent/AdminComponent'
import AdminOrders from '../components/AdminOrders/AdminOrders'
import AdminProduct from '../components/AdminProduct/AdminProduct'
import Product from '../pages/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from '../components/Checkout'

export default function App() {

   

    const isNavbarVisible = window.location.pathname;
    const regexPattern = /admin/i;

    // Use the `test` method to check if the string contains the word
    const containsAdmin = regexPattern.test(isNavbarVisible);
    // console.log(containsAdmin,isNavbarVisible)
    return (
        <>

        
            <ChakraProvider>

                {/* <Navbar /> */}

                {!containsAdmin && <Navbar />}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/store" element={<Store />} exact></Route>
                    <Route path="/store/product" element={<Product />} exact></Route>
                    <Route path="/store/casual" element={<Store link="casual"/>} exact></Route> 
                    <Route path="/contact" element={<Contact />} exact></Route>
                    <Route path="/combo" element={<Combo />} exact></Route>
                    <Route path="/account" element={<Account />} exact></Route>
                    <Route path="/cart" element={<Cart />} exact></Route>
                    <Route path="/login" element={<Login />} exact></Route>
                    <Route path="/create" element={<Create />} exact></Route>
                    <Route path="/checkout" element={<Checkout />} exact></Route>


                </Routes>


                <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            </ChakraProvider>
            <ToastContainer />
        </>
    )
}