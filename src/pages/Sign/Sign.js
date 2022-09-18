import React, { useContext } from 'react';
import { Form } from '../../components/Form/Form';
import { GlobalContext } from '../../context/GlobalContext';
import { CartContext } from '../../context/CartContext';
import './Sign.css';

export const Sign = () => {

    let signShow = {

        categories: false,
        us: false,
        sign: true,
        cart: false,
        noList: false

    };

    const { cart, unit, total, clear } = useContext(CartContext),
    { cartActive } = useContext(GlobalContext),
    d = document;

    const handleSignIn = () => {

        const formForm = d.querySelector(".form__form");

        formForm.classList.remove("active--form");

    };

    const handleSignUp = () => {

        const formForm = d.querySelector(".form__form");

        formForm.classList.add("active--form");

    };

    const navRespItem = (element) => {

        cartActive(element);

    };

    navRespItem(signShow);

    return (

        <main className="main__sign">
        
            <section className="main__sign--section">

                <h2> Ingresa </h2>

                <Form purchase={cart} purchaseUnit={unit} purchaseTotal={total} clear={clear} handleSignIn={handleSignIn} handleSignUp={handleSignUp}/>

            </section>
        
        </main>

    );

};