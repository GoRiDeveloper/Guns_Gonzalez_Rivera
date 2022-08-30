import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './ItemCount.css';

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    return (

        <>

            <div className="container">

                <button className="next" onClick={() => (counter < stock) ? setCounter(counter+1) : setCounter(initial)}></button>
                <button className="prev" onClick={() => (counter <= initial) ? setCounter(initial) : setCounter(counter-1)}></button>

                <div>

                    <span className="number">{counter}</span>

                </div>

            </div>

            <Link to={"/cart"} onClick={() => {onAdd(counter)}} className="details__content--button"> ¡Añadir al Carrito! </Link>

        </>

    );

};