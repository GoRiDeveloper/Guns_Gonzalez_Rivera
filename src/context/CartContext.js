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
    d = document;

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("unit", JSON.stringify(unit));
        localStorage.setItem("total", JSON.stringify(total));

        return () => {}

    }, [cart, unit, total]); 

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

            if (product.stock < product.quantity) {

                setUnit(unit + parseInt(product.quantity));
                setTotal(total + parseFloat(product.quantity * product.price));

            }

        } else {

            setCart([...cart, {...product, stock: product.stock - product.quantity}]);
            setUnit(unit + parseInt(product.quantity));
            setTotal(total + parseFloat(product.quantity * product.price));

        };

    };

    const removeItem = (product) => {

        const isInCart = cart.find(item => item.id === product.id);

        if (isInCart.quantity === 1) {

            setCart(

                cart.filter(item => item.id !== product.id)

            );  
            setUnit(unit - 1);
            setTotal(total - product.price);

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

        };

    };

    const removeAllItem = (product) => {

        const isInCart = cart.find(item => item.id === product.id);

        if (isInCart) {
            
            setCart(

                cart.filter(item => item.id !== product.id)

            );
            setUnit(unit - product.quantity);
            setTotal(total - (product.quantity * product.price));

        }

    };

    const clear = () => {

        setCart([]);
        setUnit(0);
        setTotal(0);

    };

    const cartActive = (element) => {

        const listResp = d.querySelectorAll(".ul__list--resp"),
              dispNone = d.querySelector(".indicator");

        listResp.forEach((item) => 
        item.classList.remove("active"))

        dispNone 
        
            ? dispNone.classList.remove("none") 
            : <></>

        listResp 

            ? element.categories 

                ? d.querySelector(".list-categories").classList.add("active") 
                : <></>

            : <></>

        listResp 

            ? element.us 

                ? d.querySelector(".list-us").classList.add("active") 
                : <></>  

            : <></>          
            
        listResp 

            ? element.sign

                ? d.querySelector(".list-sign").classList.add("active") 
                : <></>

            : <></>  

        listResp 

            ? element.cart

                ? d.querySelector(".list-cart").classList.add("active") 
                : <></>

            : <></>  

        listResp 
        
            ? element.noList

                ? listResp.forEach((item) => item.classList.remove("active"))
                : <></>

            : <></>
            

        dispNone 

            ? element.noList 

                    ? dispNone.classList.add("none")
                    : <></>

            : <></>

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
            cartActive

        }}>

            {children}

        </CartContext.Provider>

    );

};