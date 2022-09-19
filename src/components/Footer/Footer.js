import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LogoGR } from '../LogoGR/LogoGR';
import './Footer.css';

export const Footer = () => {

    return (

        <footer className="footer">

            <div className="footer__links links">

                <ul className="links__ul">

                    <Link to={"/us"} className="links__ul--li"> Ayuda </Link>
                    <Link to={"/us"} href="#contact" className="links__ul--li"> Contactanos </Link>
                    <Link to={"/us"} className="links__ul--li"> Condiciones Legales </Link>
                    <Link to={"/us"} className="links__ul--li"> Privacidad y Avisos de Usos </Link>

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