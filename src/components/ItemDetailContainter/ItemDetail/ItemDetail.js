import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { ItemCount } from '../../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ item }) => {

    const [newStock, setNewStock] = useState(),
    { cart, addToCart } = useContext(CartContext),
    { id, img, name, price, stock } = item;

    const onAdd = (counter) => {

        addToCart(item, counter);

    };

    useEffect(() => {

        let inStock = cart.find(prod => prod.id === id);

        setNewStock(

            (inStock === undefined) 

                ? stock 
                : inStock.stock

        );

    }, [newStock, cart, id, stock, setNewStock]);

    return (

        <article className="itemDetail">

            <div className="itemDetail__img">

                <img className="itemDetail__img--img" src={img || '/images/default-img.png'} alt="itemdetail-img"/>

            </div>

            <div className="itemDetail__details details">

                <div className="details__content">

                    <h2 className="details__content--title"> {name} </h2>
                    <p className="details__content--p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis corporis explicabo similique maiores illo qui consequuntur provident molestiae sunt ea soluta, quod nesciunt voluptate libero ipsa esse autem nihil. </p>
                    <h3 className="details__content--price"> $ {price} </h3>
                    <label className="details__content--count"> Cantidad : </label>
                    <ItemCount stock={newStock} initial={1} onAdd={onAdd}/>
                    <label className="details__content--stock"> Stock : {newStock} </label>

                </div>

            </div>
        
        </article>

    );

};