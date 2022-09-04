import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { ItemCount } from '../../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ item }) => {

    const { addToCart } = useContext(CartContext);

    const onAdd = (counter) => {

        let saleItem = {

            ...item,
            quantity: counter

        };

        addToCart(saleItem);

    };

    return (

        <article className="itemDetail">

            <div className="itemDetail__img">

                <img className="itemDetail__img--img" src={item.img || '/images/default-img.png'} alt="itemdetail-img"/>

            </div>

            <div className="itemDetail__details details">

                <div className="details__content">

                    <h2 className="details__content--title"> {item.name} </h2>
                    <p className="details__content--p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis corporis explicabo similique maiores illo qui consequuntur provident molestiae sunt ea soluta, quod nesciunt voluptate libero ipsa esse autem nihil. </p>
                    <h3 className="details__content--price"> $ {item.price} </h3>
                    <label className="details__content--count"> Cantidad : </label>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    <label className="details__content--stock"> Stock : {item.stock} </label>

                </div>

            </div>
        
        </article>

    );

};