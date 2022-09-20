import React from 'react';
import './FeatureList.css';

export const FeatureList = () => {

    return (

        <section className="secFeatureList">

            <div className="secFeatureList__list">

                <i className="fa-sharp fa-solid fa-truck-fast"></i>
                <h3> ¡Envios Gratis! </h3>
                <p> Envios gratis en compras mayores a $500 </p>

            </div>

            <div className="secFeatureList__list">

                <i className="fa-sharp fa-solid fa-boxes-packing"></i>
                <h3> 30 Días de Devolución </h3>
                <p> Ante cualquier fallo o diferencia, puedes regresar el producto fácilmente en los primeros 14 días </p>

            </div>

            <div className="secFeatureList__list">

                <i className="fa-sharp fa-solid fa-gift"></i>
                <h3> Tarjetas de Regalo </h3>
                <p> Compra tarjetas de regalo y canjea cupones fácilmente </p>

            </div>

            <div className="secFeatureList__list">

                <i className="fa-sharp fa-solid fa-envelope-open-text"></i>
                <h3> Contactanos </h3>
                <p> Puedes contactarnos por E-Mail <a href="mailto:gunsgroficial@gmail.com"> GunsGR </a> con tu número de compra </p>

            </div>

        </section>

    );

};