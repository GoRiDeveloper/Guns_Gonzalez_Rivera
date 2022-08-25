import React from "react";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import { ItemPrevListContainer } from '../../components/ItemPrevListContainer/ItemPrevListContainer';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {

    return (

        <main className="main__home">

            <Slideshow>

                <div className="secSlide__show--slide slide">

                    <Link to={"/product/3"}>

                        <img className="slide__a--img" src={'/images/Fondo-Accesorio-Glock.png'} alt="pre-acc-glock"/>

                    </Link>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <Link to={"/product/1"}>

                        <img className="slide__a--img" src={'/images/Fondo-Glock.png'} alt="pre-glock"/>

                    </Link>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <Link to={"/product/4"}>

                        <img className="slide__a--img" src={'/images/Fondo-Rifle.png'} alt="pre-rifle"/>

                    </Link>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <Link to={"/product/2"}>

                        <img className="slide__a--img" src={'/images/Fondo-Municion.png'} alt="pre-munition"/>

                    </Link>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

            </Slideshow>

            <ItemPrevListContainer />

        </main>

    );

};