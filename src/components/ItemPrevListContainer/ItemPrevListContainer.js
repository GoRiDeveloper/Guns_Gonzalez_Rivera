import React, { useState, useEffect } from 'react';
/*import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/index';*/
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../ItemList/Item/Item';
import { Loader } from '../Loader/Loader';

export const ItemPrevListContainer = () => {

    const [prodA, setProdA] = useState([]),
    [prodB, setProdB] = useState([]);

    useEffect(() => {

        /*const getColData = async () => {

            try {
    
                const data = collection(db, "products");
                const col = await getDocs(data);
                const res = col.docs.map(doc => doc={ id:doc.id, ...doc.data() });
                console.log(res);

            } catch (err) {
                
                console.log(err);

            }

        };

        getColData();*/

        const dataBestSellers = [

            {id: 1, name: "Glock-32", category: "Arma Corta", stock: 10, price: 1800, img: '/images/Glock.png'},
            {id: 2, name: "Munición .30", category: "Municiones", stock: 6, price: 300,img: '/images/Municion.png'},
            {id: 3, name: "Cargador 9mm", category: "Accesorios", stock: 20, price: 100, img: '/images/Accesorio-Glock.png'},
            {id: 4, name: "Rifle .300 Win", category: "Arma Larga", stock: 4, price: 4000, img: '/images/Rifle.png'}
    
        ];

        const dataNewProducts = [

            {id: 5, name: "CZp-10m", category: "Arma Corta", stock: 14, price: 1000, img: '/images/pistol/CZp-10m.png'},
            {id: 6, name: "Revolver 610", category: "Arma Corta", stock: 3, price: 882, img: '/images/pistol/revolver610.png'},
            {id: 7, name: "Thompson 1911", category: "Arma Corta", stock: 8, price: 550, img: '/images/pistol/thomson1911.png'},
            {id: 8, name: "Glock 19", category: "Arma Corta", stock: 18, price: 1500, img: '/images/pistol/glock19-4punto5.png'}

        ];

        const taskA = new Promise((resolve, rejected) => {

            setTimeout(() => {

                resolve(dataBestSellers);

            }, 6000);

        });

        taskA
            .then(res => setProdA(res))
            .catch(err => console.log(err))
            .finally();

        const taskB = new Promise ((resolve, rejected) => {

            setTimeout(() => {

                resolve(dataNewProducts);

            }, 4500);

        });

        taskB
            .then(res => setProdB(res))
            .catch(err => console.log(err))
            .finally();

        return () => {};

    }, []);

    return (
        
        <>

            <ItemList>

                <div className="secItemList__title">

                    <h3> Más Vendidos </h3>

                </div>

                <div className="secItemList__products">

                    {prodA.length < 1 
                        ? (<Loader />)
                        : (
                            prodA.map((item, index) => <Item key={item.id * index * 2} item={item}/>)
                        )
                    }

                </div>

            </ItemList>

            <ItemList>

                <div className="secItemList__title">

                    <h3> Productos Nuevos </h3>

                </div>

                <div className="secItemList__products">

                    {prodB.length < 1 
                        ? (<Loader />)
                        : (
                            prodB.map((item, index) => <Item key={item.id + index} item={item}/>)
                        )
                    }

                </div>

            </ItemList>

        </>

    );

};