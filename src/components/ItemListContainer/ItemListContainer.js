import React from 'react';
import './ItemListContainer.css';

export const ItemListContainer = (props) => {

    return (
        
        <div className="container__greeting">

            <h2 className="greeting">{props.greeting}</h2>

        </div>

    );

}