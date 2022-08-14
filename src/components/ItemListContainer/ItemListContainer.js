import React from 'react';
import { ItemCount } from './ItemCount/ItemCount';
import './ItemListContainer.css';

export const ItemListContainer = () => {

    return (
        
        <main className='main'>

            <ItemCount stock={5} initial={1}/>

        </main>

    );

}