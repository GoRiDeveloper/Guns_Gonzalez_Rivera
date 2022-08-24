import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../ItemList/Item/Item';
import { Loader } from '../Loader/Loader';
import Png1 from '../../images/Accesorio-Glock.png';
import Png2 from '../../images/Glock.png';
import Png3 from '../../images/Rifle.png';
import Png4 from '../../images/Municion.png';
import Png5 from '../../images/pistol/CZp-10m.png';
import Png6 from '../../images/pistol/revolver610.png';
import Png7 from '../../images/pistol/thomson1911.png';
import Png8 from '../../images/pistol/glock19-4punto5.png';

export const ItemPrevListContainer = () => {

    const [prodA, setProdA] = useState([]),
    [prodB, setProdB] = useState([]);

    useEffect(() => {

        const dataBestSellers = [

            {id: 1, name: "Glock-32", price: 1800, img: Png2},
            {id: 2, name: "Munición .30", price: 300,img: Png4},
            {id: 3, name: "Cargador 9mm", price: 100, img: Png1},
            {id: 4, name: "Rifle .300 Win", price: 4000, img: Png3}
    
        ];

        const dataNewProducts = [

            {id: 5, name: "CZp-10m", price: 1000, img: Png5},
            {id: 6, name: "Revolver 610", price: 882, img: Png6},
            {id: 7, name: "Thompson 1911", price: 550, img: Png7},
            {id: 8, name: "Glock 19", price: 1500, img: Png8}

        ];

        const taskA = new Promise((resolve, rejected) => {

            setTimeout(() => {

                resolve(dataBestSellers);

            }, 6000);

        });

        taskA
            .then(res => setProdA(res))
            .catch(err => console.log(err))
            .finally(() => console.log("Se finalizo la promesa."));

        const taskB = new Promise ((resolve, rejected) => {

            setTimeout(() => {

                resolve(dataNewProducts);

            }, 4500);

        });

        taskB
            .then(res => setProdB(res))
            .catch(err => console.log(err))
            .finally(() => console.log("Se finalizo la promesa."));

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
                            prodA.map((item, index) => <Item key={item.id * index * 2} item={item} index={item.id}/>)
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
                            prodB.map((item, index) => <Item key={item.id + index} item={item} index={item.id}/>)
                        )
                    }

                </div>

            </ItemList>

        </>

    );

};