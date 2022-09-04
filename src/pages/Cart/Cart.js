import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

    const { cart, clear } = useContext(CartContext);

    console.log(cart);

    return (

        <main className="main__cart">
        
            <section className="section__cart cart">

                <h2 className="cart__title"> Carrito </h2>

                <article className="cart__article">

                    <a><img alt="img-product"/></a>

                    <div>

                        <h3></h3>
                        <h4></h4>
                        <p></p>
                        <button onClick={() => clear()}>vaciar</button>

                    </div>

                </article>

            </section>

        </main>

    );

};