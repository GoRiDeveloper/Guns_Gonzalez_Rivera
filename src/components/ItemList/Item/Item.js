import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ item, index }) => {

    return (

        <div className="card">

            <div className="card__img">

                <img className="card__img--img" src={item.img}/>
                
            </div>

            <div className="card__content">

                <h4 className="card__content--name">{item.name}</h4>
                <h5 className="card__content--price">{`$${item.price}`}</h5>
                <Link to={`/product/${index}`} className="card__content--button"> Comprar </Link>

            </div>
            
        </div>

    );

}