import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css'
import './CartWidget.css';

export const CartWidget = () => {

    return (

        <NavLink to={'/cart'} className="header__cart">

            <i className="fa-solid fa-cart-shopping"></i>

        </NavLink>

    );

}

export const CartWidgetResp = () => {

    return (

        <li className="ul__list--resp list">

            <NavLink to={'/cart'} className="list__a">

                <span className="list__a--icon">

                    <i className="fa-solid fa-cart-shopping"></i>

                </span>
                <span className="list__a--text"> Carrito </span>

            </NavLink>

        </li>

    );

}