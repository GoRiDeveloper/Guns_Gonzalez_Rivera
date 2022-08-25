import React from 'react';
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

export const Categories = () => {

    const { category } = useParams();

    return (

        <>

            <ItemListContainer categ={category}/>

        </>

    );

};