import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/Navbar/NavBar';
import { Home } from '../pages/Home/Home';
import { Categories } from '../pages/Categories/Categories';
import { Us } from '../pages/Us/Us';
import { Sign } from '../pages/Sign/Sign';
import { Cart } from '../pages/Cart/Cart';
import { Product } from '../pages/Product/Product';
import { Footer } from '../components/Footer/Footer';

export const Index = () => {

    return (

        <BrowserRouter>
        
            <NavBar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />}/>
                <Route path="/categories/:category" element={<Categories />} />
                <Route path="/us" element={<Us />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<Product />} />
                
            </Routes>       
            <Footer />
        
        </BrowserRouter>

    );

};