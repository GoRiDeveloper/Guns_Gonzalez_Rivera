import React, { useContext, useEffect } from "react";
import { GlobalContext } from '../../context/GlobalContext';

export const Us = () => {

    const { setBuyAlert } = useContext(GlobalContext);
    
    useEffect(() => {

        setBuyAlert(true);

    }, []);

    return (

        <></>

    );

};