import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoGR } from '../LogoGR/LogoGR';
import './Footer.css';

export const Footer = () => {

    return (

        <footer className="footer">

            <div className="footer__links links">

                <ul className="links__ul">

                    <li className="links__ul--li"> Ayuda </li>
                    <li className="links__ul--li"> Contactanos </li>
                    <li className="links__ul--li"> Condiciones Legales </li>
                    <li className="links__ul--li"> Privacidad y Avisos de Usos </li>

                </ul>

            </div>

            <div className="footer__line"></div>
            
            <div className="footer__legend legend">

                <NavLink to={'/'} className="legend__logo">

                    <LogoGR />

                </NavLink>

                <div className="legend__p">

                    <p> © 2022 GunsGR Inc, Todos Los Derechos Reservados. </p>

                </div>

            </div>

        </footer>

    );

};