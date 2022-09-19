import React from 'react';

export const Input = ({ type, name, value, onChange, placeholder }) => {

    return (

        <input

            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
        
        />

    );

};