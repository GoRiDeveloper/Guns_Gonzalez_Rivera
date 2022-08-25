import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ item }) => {

    return (

        <div className="card">

            <div className="card__img">

                <img className="card__img--img" src={item.img || '/images/default-img.png'} alt="item-img"/>
                
            </div>

            <div className="card__content">

                <h4 className="card__content--name">{item.name}</h4>
                <h5 className="card__content--price">{`$${item.price}`}</h5>
                <Link to={`/product/${item.id}`} className="card__content--button"> Comprar </Link>

            </div>
            
        </div>

    );

}