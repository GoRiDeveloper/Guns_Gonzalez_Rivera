import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';
import Png1 from '../../images/Accesorio-Glock.png';
import Png2 from '../../images/Glock.png';
import Png3 from '../../images/Rifle.png';
import Png4 from '../../images/Municion.png';
import Png5 from '../../images/pistol/CZp-10m.png';
import Png6 from '../../images/pistol/revolver610.png';
import Png7 from '../../images/pistol/thomson1911.png';
import Png8 from '../../images/pistol/glock19-4punto5.png';
import Png9 from '../../images/pistol/deportivadx-17.png';
import Png10 from '../../images/pistol/exterminator4.png';
import Png11 from '../../images/pistol/Pistola Deportiva Umarex Campismo TDP45.png';
import Png12 from '../../images/pistol/pistolaM1611.png';
import Png13 from '../../images/pistol/pistola-hs-h11.png';
import Png14 from '../../images/pistol/pistolapunto45_Auto.png';
import Png15 from '../../images/pistol/sf194punto5.png';

export const ItemDetailContainer = () => {

    const { index } = useParams(),
    newIndex = parseInt(index),
    [prod, setProd] = useState([]);

    useEffect(() => {

        const data = [

            {id: 1, name: "Glock-32", stock: 10, price: 1800, img: Png2},
            {id: 2, name: "Munición .30", stock: 6, price: 300,img: Png4},
            {id: 3, name: "Cargador 9mm", stock: 20, price: 100, img: Png1},
            {id: 4, name: "Rifle .300 Win", stock: 4, price: 4000, img: Png3},
            {id: 5, name: "CZp-10m", stock: 14, price: 1000, img: Png5},
            {id: 6, name: "Revolver 610", stock: 3, price: 882, img: Png6},
            {id: 7, name: "Thompson 1911", stock: 8, price: 550, img: Png7},
            {id: 8, name: "Glock 19", stock: 18, price: 1500, img: Png8},
            {id: 9, name: "Deportiva DX 17", stock: 45, price: 150, img: Png9},
            {id: 10, name: "Deportiva TDP45", stock: 33, price: 300, img: Png11},
            {id: 11, name: "Exterminator 4 Air", stock: 13, price: 100, img: Png10},
            {id: 12, name: "Automática M1611", stock: 2, price: 150, img: Png12},
            {id: 13, name: "Pistola HS H11", stock: 22, price: 650, img: Png13},
            {id: 14, name: ".15 automática", stock: 10, price: 1000, img: Png14},
            {id: 15, name: "Pistola HS SF19", stock: 7, price: 800, img: Png15}

        ];

        const getItem = new Promise((resolve, rejected) => {

            setTimeout(() => {

                resolve(data);

            }, 5000);

        });

        getItem
            .then(res => setProd(res))
            .catch(err => console.log(err))
            .finally(() => console.log("Se finalizo la promesa. (ItemDetailContainer)"));

        return () => {};

    }, []);

    return (

        <>
        
            {prod.length < 1
                
                ? (<Loader />) 
                : (
                
                    <ItemDetail item={prod.find(el => el.id === newIndex)}/>
                    
                )

            }
        
        </>

    );

};