import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../services/index'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../ItemList/Item/Item';
import { GlobalContext } from '../../context/GlobalContext';

export const ItemPrevListContainer = () => {

    const [prodA, setProdA] = useState([]),
    [prodB, setProdB] = useState([]),
    {setLoading} = useContext(GlobalContext);

    useEffect(() => {

        const getDataA = async () => {
    
            setLoading(true)
            try {
                
                const data = collection(db, "products");
                const prods = query(data, where("offer", "==", true));
                const col = await getDocs(prods);
                const res = col.docs.map(doc => doc = { id:doc.id, ...doc.data() });
                setProdA(res);
                setLoading(false);
    
            } catch (err) {
    
                console.log(err);
                
            }
    
        };
    
        const getDataB = async () => {
    
            setLoading(true)
            try {
    
                const data = collection(db, "products");
                const prods = query(data, where("new", "==", true));
                const col = await getDocs(prods);
                const res = col.docs.map(doc => doc = { id:doc.id, ...doc.data() });
                setProdB(res);
                setLoading(false);
                
            } catch (err) {
    
                console.log(err);
    
            }
    
        };

        if (prodA.length === 0) {

            getDataA();

        }

        if (prodB.length === 0) {

            getDataB();
            
        }

    }, [prodA, prodB, setLoading, setProdA, setProdB]);

    return (
        
        <>

            <ItemList>

                <div className="secItemList__title">

                    <h3> Ofertas </h3>

                </div>

                <div className="secItemList__products">

                    { prodA && prodA.map((item) => <Item key={item.id} item={item}/>) }

                </div>

            </ItemList>

            <ItemList>

                <div className="secItemList__title">

                    <h3> Productos Nuevos </h3>

                </div>

                <div className="secItemList__products">

                    { prodB && prodB.map((item, index) => <Item key={item.id + index} item={item}/>) }

                </div>

            </ItemList>

        </>

    );

};