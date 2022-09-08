import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.css'

export const CartItem = ({ item, removeItem, removeAllItem }) => {

    const { id, name, quantity, price, img} = item;

    return (

        <article className="cartItem">

            <Link to={`/product/${id}`} className="cartItem__img">

                <img src={img} alt="img-product"/>

            </Link>

            <div className="cartItem__info">

                <div className="info">

                    <h3 className="info__title"> {name} </h3>
                    <h4 className="info__quantity"> Cantidad : {quantity} </h4>
                    <h5 className="info__price"> $ {price} </h5>
                    <h6 className="info__totalPrice"> Precio Total : $ {price * quantity} </h6>
                    <p className="info__desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quidem. Reprehenderit beatae fugiat, officiis corporis minima ut deserunt minus ex, praesentium quod eius facilis tempore quae, assumenda accusantium velit animi. </p>

                    <div className="info__buttons">

                        <button className="info__buttons--item" onClick={() => removeItem(item)}>

                            <i className="fa-solid fa-xmark"></i>
                            <span> Eliminar por Unidad </span>

                        </button>

                        <button className="info__buttons--items" onClick={() => removeAllItem(item)}>

                            <i className="fa-solid fa-trash"></i>
                            <span> Eliminar Producto </span>

                        </button>

                    </div>
                
                </div>

            </div>

        </article>

    );

};