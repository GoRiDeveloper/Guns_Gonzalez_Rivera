import React, { useState, useEffect} from 'react';
import { Slideshow } from './Slideshow/Slideshow';
import { ItemList } from './ItemList/ItemList';
import { ItemCount } from './ItemCount/ItemCount';
import { Item } from './ItemList/Item/Item';
import { Loader } from './Loader/Loader';
import Img1 from '../../images/Fondo-Accesorio-Glock.png';
import Img2 from '../../images/Fondo-Glock.png';
import Img3 from '../../images/Fondo-Rifle.png';
import Img4 from '../../images/Fondo-Municion.png';
import Png1 from '../../images/Accesorio-Glock.png';
import Png2 from '../../images/Glock.png';
import Png3 from '../../images/Rifle.png';
import Png4 from '../../images/Municion.png';
import './ItemListContainer.css';

export const ItemListContainer = () => {

    const [prod, setProd] = useState([]),
    data = [

        {id: 1, name: "Glock-32", price: 1800, img: Png2},
        {id: 2, name: "Munición .30", price: 300,img: Png4},
        {id: 3, name: "Cargador 9mm", price: 100, img: Png1},
        {id: 4, name: "Rifle .300 Win", price: 4000, img: Png3}

    ];

    useEffect(() => {

        const task = new Promise((resolve, rejected) => {

            setTimeout(() => {

                resolve(data);

            }, 2000);

        });

        task
            .then(res => setProd(res))
            .catch(err => console.log(err))
            .finally(() => console.log("Se finalizo la promesa."));

        return () => {};

    }, []);

    return (
        
        <main className='main'>
        
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

            <ItemList>

                <div className="secItemList__title">

                    <h3> Más Vendidos </h3>

                </div>

                <div className="secItemList__products">

                    {prod.length < 1 
                        ? (<Loader />)
                        : (prod.map((item, index) => <Item key={item.id} item={item}/>)
                    )}

                </div>

            </ItemList>

            <ItemCount stock={5} initial={1}/>

        </main>

    );

}