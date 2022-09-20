import React, { useState, useEffect, createContext, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

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
    }),
    [unit, setUnit] = useState(() => {
        try {
            const unitLS = localStorage.getItem("unit")
            return unitLS 
                ? JSON.parse(unitLS) 
                : 0;
        } catch (err) {
            return 0;
        }
    }),
    [total, setTotal] = useState(() => {
        try {
            const totalLS = localStorage.getItem("total");
            return totalLS 
                ? JSON.parse(totalLS)
                : 0;
        } catch (err) {
            return 0;
        }
    }),
    { setAddAlert, setRemoveAlert, setStockAlert } = useContext(GlobalContext);

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("unit", JSON.stringify(unit));
        localStorage.setItem("total", JSON.stringify(total));

        return () => {}

    }, [cart, unit, total]); 

    const addToCart = (product, quantity) => {

        let newCart;
        const isInCart = cart.find(element => element.id === product.id);
        if (isInCart) {

            if (isInCart.stock >= quantity) {

                isInCart.quantity += quantity;
                isInCart.stock -= quantity;
                newCart = [...cart]

            } else {

                setStockAlert(true);
                return newCart = [...cart];

            }

        } else {

            let prod = { ...product, quantity: quantity, stock: product.stock - quantity };
            newCart = [...cart, prod];

        }
        setCart(newCart);
        setAddAlert(true);

    };

    const removeItem = (product) => {

        const isInCart = cart.find(item => item.id === product.id);
        if (isInCart.quantity === 1) {

            setCart(

                cart.filter(item => item.id !== product.id)

            );  
            setUnit(unit - 1);
            setTotal(total - product.price);
            setRemoveAlert(true);

        } else {
            setCart(
                cart.map(prod => {
                    if (prod.id === product.id) {
                        return { ...isInCart, stock: isInCart.stock + 1, quantity: isInCart.quantity - 1};
                    } else return prod;
                })
            );
            setUnit(unit - 1);
            setTotal(total - product.price);
            setRemoveAlert(true);
        };

    };

    const removeAllItem = (product) => {

        const isInCart = cart.find(item => item.id === product.id);
        if (isInCart) {   
            setCart(
                cart.filter(item => item.id !== product.id)
            );
            setUnit(unit - parseInt(product.quantity));
            setTotal(total - parseFloat(product.quantity * product.price));
            setRemoveAlert(true);
        }

    };

    const clear = () => {

        setCart([]);
        setUnit(0);
        setTotal(0);

    };

    const totalAmount = () => {

        return setTotal(cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0));

    };

    const totalUnit = () => {

        return setUnit(cart.reduce((acc, prod) => acc + prod.quantity, 0));

    };

    return (

        <CartContext.Provider value={{ 
            cart,
            unit,
            total,
            addToCart,
            removeItem,
            removeAllItem,
            clear,
            totalAmount,
            totalUnit
        }}>

            {children}
            
        </CartContext.Provider>
    );

};