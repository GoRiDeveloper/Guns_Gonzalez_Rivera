import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/index';
import { CartWidget, CartWidgetResp } from './CartWidget/CartWidget';
import { LogoGR } from '../LogoGR/LogoGR';
import './NavBar.css';

export const NavBar = () => {

    const d = document,
    [subNavBarMenuItems, setSubNavBarMenuItems] = useState([]);

    const activeLink = (e) => {

        const listResp = d.querySelectorAll(".ul__list--resp");

        listResp.forEach((item) => 
        item.classList.remove("active"))

        e.currentTarget.classList.add("active");

    };

    const mouseMove = (e) => {

        const listDesk = d.querySelectorAll(".ul__list--desk");

        listDesk.forEach((item) => {

            const x = e.pageX - item.offsetLeft;
            const y = e.pageY - item.offsetTop;

            item.style.setProperty("--x", x + "px");
            item.style.setProperty("--y", y + "px");

        });

    };

    useEffect(() => {

        const getColData = async () => {

            try {
                
                const data = collection(db, "categories");
                const col = await getDocs(data);
                const res = col.docs.map(doc => doc={ id:doc.id, ...doc.data() });
                setSubNavBarMenuItems(res);

            } catch (err) {

                console.log(err);

            }

        };

        getColData();

    }, [subNavBarMenuItems]);

    return (
        
        <header className="header">

            <CartWidget />

            <nav className="header__nav nav">

                <ul className="nav__ul nav__ul--resp">

                    <li onClick={(e) => activeLink(e)} className="ul__list--resp list-categories list active">

                        <NavLink to={'/categories'} className="list__a">

                            <span className="list__a--icon">

                                <i className="fa-solid fa-shop"></i> 

                            </span>
                            <span className="list__a--text"> Categorias </span>

                        </NavLink>

                    </li>

                    <li onClick={(e) => activeLink(e)} className="ul__list--resp list-us list">

                        <NavLink to={'/us'} className="list__a">

                            <span className="list__a--icon">

                                <i className="fa-solid fa-people-group"></i>

                            </span>
                            <span className="list__a--text"> Nosotros </span>

                        </NavLink>

                    </li>

                    <li onClick={(e) => activeLink(e)} className="ul__list--resp list-sign list">

                        <NavLink to={'/sign'} className="list__a">

                            <span className="list__a--icon">

                                <i className="fa-regular fa-user"></i>

                            </span>
                            <span className="list__a--text"> Ingresa </span>
                            
                        </NavLink>

                    </li>

                    <CartWidgetResp actiiveLink={activeLink}/>

                    <div className="indicator"></div>

                </ul>

                <ul className="nav__ul nav__ul--desktop">

                    <li onMouseMove={(e) => mouseMove(e)} className="ul__list--desk list--desk list--desk--select">

                        <NavLink to={'/categories'} className="list__span--desk"> Categorias ▾ </NavLink>

                    </li>

                    <li onMouseMove={(e) => mouseMove(e)} className="ul__list--desk list--desk">

                        <NavLink to={'/us'} className="list__span--desk"> Nosotros </NavLink>

                    </li>

                    <li onMouseMove={(e) => mouseMove(e)} className="ul__list--desk list--desk">

                        <NavLink to={'/sign'} className="list__span--desk"> Ingresa </NavLink>
                        
                    </li>

                    <ul className="ul__ul--desk">{

                        subNavBarMenuItems.map((item) => (

                            <li key={item.key} className="ul__ul--li--desk"> 
                            
                                <NavLink to={`/categories/${item.category}`}> {item.category} </NavLink> 
                            
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