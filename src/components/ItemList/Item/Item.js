import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ item }) => {
    
    const { id, name, price, img } = item;

    return (

        <div className="card">

            <div className="card__img">

                <img className="card__img--img" src={img || '/images/default-img.png'} alt="item-img"/>
                
            </div>

            <div className="card__content">

                <h4 className="card__content--name">{name}</h4>
                <h5 className="card__content--price">{`$${price}`}</h5>
                <Link to={`/product/${id}`} className="card__content--button"> Comprar </Link>

            </div>
            
        </div>

    );

};