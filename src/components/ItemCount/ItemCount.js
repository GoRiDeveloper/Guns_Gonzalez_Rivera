import React, { useState } from "react";
import './ItemCount.css';

export const ItemCount = ({ stock, initial }) => {

    const [counter, setCounter] = useState(initial);

    return (

        <div className="container">

            <button className="next" onClick={() => (counter < stock) ? setCounter(counter+1) : setCounter(initial)}></button>
            <button className="prev" onClick={() => (counter <= initial) ? setCounter(initial) : setCounter(counter-1)}></button>

            <div>

                <span className="number">{counter}</span>

            </div>

        </div>

    );

}