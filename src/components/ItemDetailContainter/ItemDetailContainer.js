import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {

    let detailShow = {

        categories: false,
        us: false,
        sign: false,
        cart: false,
        noList: true

    };

    const { cartActive } = useContext(CartContext),
    { id } = useParams(),
    newID = parseInt(id),
    [item, setItem] = useState({});

    const navRespItem = (element) => {

        cartActive(element);

    };

    navRespItem(detailShow);

    useEffect(() => {

        const data = [

            {id: 1, name: "Glock-32", category: "Arma Corta", stock: 10, price: 1800, img: '/images/Glock.png'},
            {id: 2, name: "Munición .30", category: "Municiones", stock: 6, price: 300,img: '/images/Municion.png'},
            {id: 3, name: "Cargador 9mm", category: "Accesorios", stock: 20, price: 100, img: '/images/Accesorio-Glock.png'},
            {id: 4, name: "Rifle .300 Win", category: "Arma Larga", stock: 4, price: 4000, img: '/images/Rifle.png'},
            {id: 5, name: "CZp-10m", category: "Arma Corta", stock: 14, price: 1000, img: '/images/pistol/CZp-10m.png'},
            {id: 6, name: "Revolver 610", category: "Arma Corta", stock: 3, price: 882, img: '/images/pistol/revolver610.png'},
            {id: 7, name: "Thompson 1911", category: "Arma Corta", stock: 8, price: 550, img: '/images/pistol/thomson1911.png'},
            {id: 8, name: "Glock 19", category: "Arma Corta", stock: 18, price: 1500, img: '/images/pistol/glock19-4punto5.png'},
            {id: 9, name: "Deportiva DX 17", category: "Arma Corta", stock: 45, price: 150, img: '/images/pistol/deportivadx-17.png'},
            {id: 10, name: "Deportiva TDP45", category: "Arma Corta", stock: 33, price: 300, img: '/images/pistol/Pistola Deportiva Umarex Campismo TDP45.png'},
            {id: 11, name: "Exterminator 4 Air", category: "Arma Corta", stock: 13, price: 100, img: '/images/pistol/exterminator4.png'},
            {id: 12, name: "Automática M1611", category: "Arma Corta", stock: 2, price: 150, img: '/images/pistol/pistolaM1611.png'},
            {id: 13, name: "Pistola HS H11", category: "Arma Corta", stock: 22, price: 650, img: '/images/pistol/pistola-hs-h11.png'},
            {id: 14, name: ".15 automática", category: "Arma Corta", stock: 10, price: 1000, img: '/images/pistol/pistolapunto45_Auto.png'},
            {id: 15, name: "Pistola HS SF19", category: "Arma Corta", stock: 7, price: 800, img: '/images/pistol/sf194punto5.png'}

        ];

        const getItem = new Promise((resolve, rejected) => {

            setTimeout(() => {

                resolve(data.find(el => el.id === newID));

            }, 5000);

        });

        getItem
            .then(res => setItem(res))
            .catch(err => console.log(err))
            .finally(() => console.log("Se finalizo la promesa. (ItemDetailContainer)"));

        return () => {};

    }, [newID]);

    return (

        <>
        
            {Object.keys(item).length === 0
                
                ? (<Loader />) 
                : (
                
                    <ItemDetail item={item}/>
                    
                )

            }
        
        </>

    );

};