import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { CartWidget, CartWidgetResp } from './CartWidget/CartWidget';
import { LogoGR } from '../LogoGR/LogoGR';
import './NavBar.css';

export const NavBar = () => {

    const subNavBarMenuItems = ["Accesorios", "Arma Corta", "Arma Larga", "Municiones"],
                           d = document;
                    
    useEffect(() => {

        const listResp = d.querySelectorAll(".ul__list--resp"),
              listDesk = d.querySelectorAll(".ul__list--desk");

        listResp.forEach(item => 
    
            item.addEventListener("click", activeLink)
        
        );

        listDesk.forEach(item =>

            item.addEventListener("mousemove", mouseMoveA)
            
        );

        function activeLink() {

            listResp.forEach((item) => 
            item.classList.remove("active"))
        
            this.classList.add("active")
        
        }

        function mouseMoveA (e) {

            listDesk.forEach((item) => {
        
                const x = e.pageX - item.offsetLeft;
                const y = e.pageY - item.offsetTop;
        
                item.style.setProperty('--x', x + 'px');
                item.style.setProperty('--y', y + 'px');
        
            })
        
        }

    }, [d]);

    return (
        
        <header className="header">

            <CartWidget />

            <nav className="header__nav nav">

                <ul className="nav__ul nav__ul--resp">

                    <li className="ul__list--resp list active">

                        <NavLink to={'/categories'} className="list__a">

                            <span className="list__a--icon">

                                <i className="fa-solid fa-shop"></i> 

                            </span>
                            <span className="list__a--text"> Categorias </span>

                        </NavLink>

                    </li>

                    <li className="ul__list--resp list">

                        <NavLink to={'/us'} className="list__a">

                            <span className="list__a--icon">

                                <i className="fa-solid fa-people-group"></i>

                            </span>
                            <span className="list__a--text"> Nosotros </span>

                        </NavLink>

                    </li>

                    <li className="ul__list--resp list">

                        <NavLink to={'/sign'} className="list__a">

                            <span className="list__a--icon">

                                <i className="fa-regular fa-user"></i>

                            </span>
                            <span className="list__a--text"> Ingresa </span>
                            
                        </NavLink>

                    </li>

                    <CartWidgetResp />

                    <div className="indicator"></div>

                </ul>

                <ul className="nav__ul nav__ul--desktop">

                    <li className="ul__list--desk list--desk list--desk--select">

                        <NavLink to={'/categories'} className="list__span--desk"> Categorias ▾ </NavLink>

                    </li>

                    <li className="ul__list--desk list--desk">

                        <NavLink to={'/us'} className="list__span--desk"> Nosotros </NavLink>

                    </li>

                    <li className="ul__list--desk list--desk">

                        <NavLink to={'/sign'} className="list__span--desk"> Ingresa </NavLink>
                        
                    </li>

                    <ul className="ul__ul--desk">{

                        subNavBarMenuItems.map((item, index) => (

                            <li key={index} className="ul__ul--li--desk"> 
                            
                                <NavLink to={`/categories/${item}`}> {item} </NavLink> 
                            
                            </li>       

                        ))

                        }

                    </ul>

                </ul>

            </nav>

            <NavLink to={'/'} className="header__logo"> 
            
                <LogoGR />

            </NavLink>

        </header>

    );

}