import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import '../NavBar.css'
import './CartWidget.css';

export const CartWidget = () => {

    const { unit } = useContext(CartContext);

    return (

        <NavLink to={'/cart'} className="header__cart">

            <i className="fa-solid fa-cart-shopping"></i>
            {unit > 0 && <span> {unit} </span>}

        </NavLink>

    );

}

export const CartWidgetResp = ({ actiiveLink }) => {

    const { unit } = useContext(CartContext);

    return (

        <li onClick={(e) => actiiveLink(e)} className="ul__list--resp list-cart list">

            <NavLink to={'/cart'} className="list__a">

                <span className="list__a--icon">

                    <i className="fa-solid fa-cart-shopping"></i>

                </span>
                <span className="list__a--text"> Carrito </span>
                {unit > 0 && <span className="list__a--unit"> {unit} </span>}

            </NavLink>

        </li>

    );

}