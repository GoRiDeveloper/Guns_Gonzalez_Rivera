import React from 'react';
import './Item.css';

export const Item = ({ item }) => {

    console.log(item)

    return (

        <div className="card">

            <div className="card__img">

                <img className="card__img--img" src={item.img}/>
                
            </div>

            <div className="card__content">

                <h4 className="card__content--name">{item.name}</h4>
                <h5 className="card__content--price">{`$${item.price}`}</h5>
                <button className="card__content--button"> Comprar </button>

            </div>
            
        </div>

    );

}