import React, { useContext } from "react";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import { ItemPrevListContainer } from '../../components/ItemPrevListContainer/ItemPrevListContainer';
import { Link } from 'react-router-dom';
import { GlobalContext } from "../../context/GlobalContext";
import './Home.css';

export const Home = () => {

    let homeShow = {

        categories: false,
        us: false,
        sign: false,
        cart: false,
        noList: true

    };

    const { cartActive } = useContext(GlobalContext);

    const navRespItem = (element) => {

        cartActive(element);

    };

    navRespItem(homeShow);

    return (

        <main className="main__home">

            <Slideshow>

                <div className="secSlide__show--slide slide">

                    <Link to={"/product/wi0g5Lkd2p9MWMKod7rR"}>

                        <img className="slide__a--img" src={'/images/Fondo-Accesorio-Glock.png'} alt="pre-acc-glock"/>

                    </Link>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <Link to={"/product/WVHNEBMZ40MbBt0JVvhi"}>

                        <img className="slide__a--img" src={'/images/Fondo-Glock.png'} alt="pre-glock"/>

                    </Link>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <Link to={"/product/zeoiQllLbGAMwZfYqnJk"}>

                        <img className="slide__a--img" src={'/images/Fondo-Rifle.png'} alt="pre-rifle"/>

                    </Link>

                    <div className="slide__text">

                        <p> ¡Ofertas! </p>

                    </div>

                </div>

                <div className="secSlide__show--slide slide">

                    <Link to={"/product/VohU1n7nWJDeocwx7pBC"}>

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