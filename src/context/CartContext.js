import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {

        try {

            const prodLS = localStorage.getItem("cart");
            return prodLS 
                ? JSON.parse(prodLS) 
                : [];

        } catch (err) {

            return [];

        }

    });

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cart));

        return () => {}

    }, [cart]); 

    const addToCart = (product) => {

        const isInCart = cart.find(item => item.id === product.id);

        if (isInCart) {

            setCart(

                cart.map(item => {

                    if (item.id === product.id && item.stock > product.quantity) {

                        return {...isInCart, stock: isInCart.stock - product.stock, quantity: isInCart.quantity + product.quantity};

                    } else { 
                        
                        return item; 
                    
                    };

                })

            );

        } else {

            setCart([...cart, {...product, stock: product.stock - product.quantity}]);

        };

    };

    const removeItem = (product) => {

        const isInCart = cart.find(item => item.id === product.id);

        if (isInCart.quantity === 1) {

          setCart(

            cart.filter(item => item.id !== product.id)

          );  

        } else {

            setCart(prod => {

                if (prod.id === product.id) {

                    return { ...isInCart, stock: isInCart.stock + 1, quantity: isInCart.quantity - 1};

                } else return prod;

            });

        };

    };

    const clear = () => {

        setCart([]);

    };

    return (

        <CartContext.Provider value={{ 

            cart,
            addToCart,
            removeItem,
            clear

        }}>

            {children}

        </CartContext.Provider>

    );

};