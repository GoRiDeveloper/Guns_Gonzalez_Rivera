import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const alerta = () => alert("Hola");

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        setCart([...cart, product]);

    }

    return (

        <CartContext.Provider value={{ 

            alerta,
            addToCart

        }}>

            {children}

        </CartContext.Provider>

    );

};