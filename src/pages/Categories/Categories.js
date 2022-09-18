import React, { useContext } from 'react';
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

export const Categories = () => {

    let categoriesShow = {

        categories: true,
        us: false,
        sign: false,
        cart: false,
        noList: false

    };

    const { category } = useParams(),
    { cartActive } = useContext(GlobalContext);

    const navRespItem = (element) => {

        cartActive(element);

    };

    navRespItem(categoriesShow);

    return (

        <>

            <ItemListContainer categ={category}/>

        </>

    );

};