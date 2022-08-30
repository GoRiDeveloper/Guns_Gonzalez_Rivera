import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

    const { alerta } = useContext(CartContext);

    return (

        <main className="main__cart">
        
            <section className="section__cart cart">

                <h2 className="cart__title"> Carrito </h2>

                <article className="cart__article">

                    <a><img/></a>

                    <div>

                        <h3></h3>
                        <h4></h4>
                        <p></p>

                    </div>

                </article>

            </section>

        </main>

    );

};