import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../services/index'
import { collection, getDocs } from 'firebase/firestore';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../ItemList/Item/Item';
import { GlobalContext } from '../../context/GlobalContext';

export const ItemListContainer = ({ categ }) => {

    const [data, setData] = useState([]),
    {setLoading} = useContext(GlobalContext);

    useEffect(() => {

        const getProdsData = async () => {

            setLoading(true);
            try {
                const prods = collection(db, "products");
                const col = await getDocs(prods);
                const res = col.docs.map(doc => doc = { id:doc.id, ...doc.data() });
                setData(res);
                setLoading(false);
            } catch (err) { 
                console.log(err); 
            }
    
        };

        if (data.length === 0) {

            getProdsData();

        }

        return () => {}

    }, [data, setLoading, setData]);

    const productsFiltered = categ

        ? data.filter(prod => prod.category === categ) 
        : data;

    return (

        <ItemList>

            <div className="secItemList__title">

                <h3> Categorias </h3>

            </div>

            <div className="secItemList__products">

                { productsFiltered && 

                    productsFiltered.map((item, index) => <Item key={item.id + index} item={item}/>)

                }

            </div>

        </ItemList>

    );

};