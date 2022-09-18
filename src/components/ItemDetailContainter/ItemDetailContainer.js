import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../services/index';
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { GlobalContext } from '../../context/GlobalContext';

export const ItemDetailContainer = () => {

    let detailShow = {

        categories: false,
        us: false,
        sign: false,
        cart: false,
        noList: true

    };

    const { setLoading, cartActive } = useContext(GlobalContext),
    [prod, setProd] = useState({}),
    { id } = useParams();

    const navRespItem = (element) => {

        cartActive(element);

    };

    navRespItem(detailShow);

    useEffect(() => {

        const getProdData = async ({ id }) => {

            setLoading(true);
            try {
                
                const data = doc(db, "products", id);
                const prod = await getDoc(data);
                let res = prod.data(); 
                setProd({ id: prod.id, ...res });
                setLoading(false);
    
            } catch (err) {
                
                console.log(err);
    
            }
    
        };

        getProdData({id});

    }, []);

    return (

        <>
        
            { prod && <ItemDetail item={prod}/> }
        
        </>

    );

};