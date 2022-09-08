import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { LogoGR } from '../../components/LogoGR/LogoGR';
import { CartItem } from './CartItem/CartItem';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

export const Cart = () => {

    let cartShow = {

        categories: false,
        us: false,
        sign: false,
        cart: true,
        noList: false

    };
    
    const { cart, unit, total, removeItem, removeAllItem, clear, cartActive } = useContext(CartContext);
    //console.log(cart);

    const navRespItem = (element) => {

        cartActive(element);

    };

    navRespItem(cartShow);

    return (

        <main className="main__cart">
    
            <section className={`section__cart ${cart.length < 1 && "cart"}`}>

                <h2 className="cart__title"> Carrito </h2>

                {cart.length < 1 && 

                    <>

                        <h3 className="cart__title"> No hay productos </h3>   
                        <Link to={"/"} className="cart__logo">
                            <LogoGR />
                        </Link>

                    </>
                    
                }

                {cart.length > 0 && (

                    cart.map((item, index) => (
                    
                        
                        <CartItem key={index} item={item} removeItem={removeItem} removeAllItem={removeAllItem}/>
                        
                        
                    ))

                )}

                {cart.length > 0 && (

                    <div className="cart__footer">

                        <div className="footer__info">

                            <label> Total de Productos : {unit} </label>

                            <label> Total de la Compra : $ {total} </label>

                        </div>

                        <div className="footer__line"></div>

                        <div className="footer__buttons buttons">

                            <Link to={"/sign"} className="buttons__shop">

                                <i className="fa-solid fa-basket-shopping"></i>
                                <span> Terminar Compra </span>

                            </Link>

                            <button className="buttons__clear" onClick={() => clear()}>

                                <i className="fa-solid fa-dumpster"></i>
                                <span> Vaciar Carrito </span>

                            </button>

                        </div>

                    </div>

                )}

            </section>

        </main>

    );

};