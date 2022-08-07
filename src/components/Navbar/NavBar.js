import React from 'react';
import { CartWidget, CartWidgetResp } from './CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {

    const subNavBarMenuItems = ["Pistolas", "Subfusiles", "Fusiles", "Protección"];

    return (
        
        <header className="header">

            <CartWidget />

            <nav className="header__nav nav">

                <ul className="nav__ul nav__ul--resp">

                    <li className="ul__list--resp list active">

                        <a className="list__a" href="#">

                            <span className="list__a--icon">

                                <i className="fa-solid fa-shop"></i> 

                            </span>
                            <span className="list__a--text"> Categorias </span>

                        </a>

                    </li>

                    <li className="ul__list--resp list">

                        <a className="list__a" href="#">

                            <span className="list__a--icon">

                                <i className="fa-solid fa-people-group"></i>

                            </span>
                            <span className="list__a--text"> Nosotros </span>

                        </a>

                    </li>

                    <li className="ul__list--resp list">

                        <a className="list__a" href="#">

                            <span className="list__a--icon">

                                <i className="fa-regular fa-user"></i>

                            </span>
                            <span className="list__a--text"> Ingresa </span>
                            
                        </a>

                    </li>

                    <CartWidgetResp />

                    <div className="indicator"></div>

                </ul>

                <ul className="nav__ul nav__ul--desktop">

                    <li className="ul__list--desk list list--select">

                        <span className="list__span"> Categorias ▾ </span>

                    </li>

                    <li className="ul__list--desk list">
                        <span className="list__span"> Nosotros </span>
                    </li>

                    <li className="ul__list--desk list">
                        <span className="list__span"> Ingresa </span>
                    </li>

                    <ul className="ul__ul">{

                        subNavBarMenuItems.map((item) => (

                            <li className="ul__ul--li"> {item} </li>                          

                        ))

                        }

                    </ul>

                </ul>

            </nav>

            <div className="header__logo"> 

                <i className="header__logo--i fa-solid fa-gun"></i>
                <h1 className="header__logo--h1" data-text="GunsGR"> GunsGR </h1>

            </div>

        </header>

    );

}

const d = document,
   listResp = d.querySelectorAll(".ul__list--resp"),
   listDesk = d.querySelectorAll(".ul__list--desk");

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

listResp.forEach(item => 
    
    item.addEventListener("click", activeLink)

);

listDesk.forEach(item =>

    item.addEventListener("mousemove", mouseMoveA)
    
);