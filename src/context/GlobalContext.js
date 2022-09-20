import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [loading, setLoading] = useState(false),
    [addAlert, setAddAlert] = useState(false),
    [removeAlert, setRemoveAlert] = useState(false),
    [buyAlert, setBuyAlert] = useState(false),
    [stockAlert, setStockAlert] = useState(false),
    [order, setOrder] = useState(),
    d = document;

    const cartActive = (element) => {

        const listResp = d.querySelectorAll(".ul__list--resp"),
              dispNone = d.querySelector(".indicator");

        const active = () => { 

            listResp.forEach((item) => 
            item.classList.remove("active")); 

        }

        active();

        dispNone && dispNone.classList.remove("none");

        listResp 

            ? element.categories 
            
                ? d.querySelector(".list-categories").classList.add("active")

                : element.us 

                    ? d.querySelector(".list-us").classList.add("active") 

                    : element.sign 
                    
                        ? d.querySelector(".list-sign").classList.add("active")

                        : element.cart 
                        
                            ? d.querySelector(".list-cart").classList.add("active")

                            : element.noList 
                            
                                ? active() 

                                :<></>

            : <></>

        dispNone 

            ? element.noList && dispNone.classList.add("none")

            : <></>

    };

    return (

        <GlobalContext.Provider value={{

            loading,
            addAlert,
            removeAlert,
            buyAlert,
            stockAlert,
            order,
            setLoading,
            setAddAlert,
            setRemoveAlert,
            setBuyAlert,
            setStockAlert,
            setOrder,
            cartActive

        }}>

            { children }

        </GlobalContext.Provider>

    )

};