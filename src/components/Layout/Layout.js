import React from 'react';
import { Loader } from '../Loader/Loader';
import { Alerts } from '../Alerts/Alerts';

export const Layout = ({ children }) => {

    return (

        <>
        
            <Loader />
            <Alerts />

            { children }
        
        </>

    )

};