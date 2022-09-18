import React from 'react';
import './BuyAlert.css';

export const BuyAlert = ({ handleBuyAlert }) => {

    return (

        <article className="container__buyAlert">

            <div className="buyAlert">

                <div className="buyAlert__checkbox">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 512 512">
                        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>

                </div>

                <div className="buyAlert__info">

                    <h4> ¡Gracias Por Tu Compra! </h4>
                    <h5> Tus Productos Se Te Enviaran Muy Pronto... </h5>

                </div>

                <button onClick={() => {handleBuyAlert()}} className="buyAlert__button"> Ok </button>

            </div>

        </article>

    );

};