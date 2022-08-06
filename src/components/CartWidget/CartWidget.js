import React from 'react';
import '../Navbar/NavBar.css'
import './CartWidget.css';

export const CartWidget = () => {

    return (

        <div className="header__cart">

            <i className="fa-solid fa-cart-shopping"></i>

        </div>

    );

}

export const CartWidgetResp = () => {

    return (

        <li className="ul__list--resp list">

            <a className="list__a" href="#">

                <span className="list__a--icon">

                    <i className="fa-solid fa-cart-shopping"></i>

                </span>
                <span className="list__a--text"> Carrito </span>

            </a>

        </li>

    );

}