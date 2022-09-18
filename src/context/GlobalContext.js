import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [loading, setLoading] = useState(false),
    [addAlert, setAddAlert] = useState(false),
    [removeAlert, setRemoveAlert] = useState(false),
    [buyAlert, setBuyAlert] = useState(false),
    d = document;

    const cartActive = (element) => {

        const listResp = d.querySelectorAll(".ul__list--resp"),
              dispNone = d.querySelector(".indicator");

        listResp.forEach((item) => 
        item.classList.remove("active"))

        dispNone && dispNone.classList.remove("none")

        listResp 

            ? element.categories && d.querySelector(".list-categories").classList.add("active") 

            : <></>

        listResp 

            ? element.us && d.querySelector(".list-us").classList.add("active")

            : <></>          
            
        listResp 

            ? element.sign && d.querySelector(".list-sign").classList.add("active")

            : <></>  

        listResp 

            ? element.cart && d.querySelector(".list-cart").classList.add("active")

            : <></>  

        listResp 
        
            ? element.noList && listResp.forEach((item) => item.classList.remove("active"))

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
            setLoading,
            setAddAlert,
            setRemoveAlert,
            setBuyAlert,
            cartActive

        }}>

            { children }

        </GlobalContext.Provider>

    )

};