import React from "react";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import { ItemPrevListContainer } from '../../components/ItemPrevListContainer/ItemPrevListContainer';
import Img1 from '../../images/Fondo-Accesorio-Glock.png';
import Img2 from '../../images/Fondo-Glock.png';
import Img3 from '../../images/Fondo-Rifle.png';
import Img4 from '../../images/Fondo-Municion.png';
import './Home.css';

export const Home = () => {

    return (

        <main className="main__home">

            <Slideshow>

                <div className="secSlide__show--slide slide">

                    <a>

                        <img className="slide__a--img" src={Img1} alt="pre-acc-glock"/>

                    </a>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <a>

                        <img className="slide__a--img" src={Img2} alt="pre-glock"/>

                    </a>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <a>

                        <img className="slide__a--img" src={Img3} alt="pre-rifle"/>

                    </a>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <a>

                        <img className="slide__a--img" src={Img4} alt="pre-munition"/>

                    </a>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

            </Slideshow>

            <ItemPrevListContainer />

        </main>

    );

};