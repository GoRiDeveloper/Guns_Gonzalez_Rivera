import React from 'react';
import { Loader } from '../Loader/Loader';

export const Layout = ({ children }) => {

    return (

        <>
        
            <Loader />

            { children }
        
        </>

    )

};