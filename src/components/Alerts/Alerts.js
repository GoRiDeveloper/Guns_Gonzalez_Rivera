import React, { useEffect, useContext } from 'react';
import { AddAlert } from './AddAlert/AddAlert';
import { RemoveAlert } from './RemoveAlert/RemoveAlert';
import { BuyAlert } from './BuyAlert/BuyAlert';
import { StockAlert } from './StockAlert/StockAlert';
import { GlobalContext } from '../../context/GlobalContext';

export const Alerts = () => {

    const {addAlert, setAddAlert, removeAlert, setRemoveAlert, buyAlert, setBuyAlert, stockAlert, setStockAlert, order} = useContext(GlobalContext);

    const handleBuyAlert = () => {

        setBuyAlert(false);

    };

    useEffect(() => {

        if (addAlert) {

            setTimeout(() => {

                setAddAlert(false);

            }, 5000);

        };
        
        if (removeAlert) {

            setTimeout(() => {

                setRemoveAlert(false);

            }, 5000);

        };

        if (stockAlert) {

            setTimeout(() => {

                setStockAlert(false);

            }, 4500);

        };

    }, [addAlert, removeAlert, stockAlert, setAddAlert, setRemoveAlert, setStockAlert]);

    return (

        <>

            { addAlert && <AddAlert /> }
            { removeAlert && <RemoveAlert /> }
            { buyAlert && <BuyAlert handleBuyAlert={handleBuyAlert} order={order}/> }
            { stockAlert && <StockAlert />}

        </>

    );

};