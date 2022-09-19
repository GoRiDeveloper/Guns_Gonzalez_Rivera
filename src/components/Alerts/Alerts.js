import React, { useEffect, useContext } from 'react';
import { AddAlert } from './AddAlert/AddAlert';
import { RemoveAlert } from './RemoveAlert/RemoveAlert';
import { BuyAlert } from './BuyAlert/BuyAlert';
import { GlobalContext } from '../../context/GlobalContext';

export const Alerts = () => {

    const {addAlert, setAddAlert, removeAlert, setRemoveAlert, buyAlert, setBuyAlert} = useContext(GlobalContext);

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

    }, [addAlert, removeAlert, setAddAlert, setRemoveAlert]);

    return (

        <>

            { addAlert && <AddAlert /> }
            { removeAlert && <RemoveAlert /> }
            { buyAlert && <BuyAlert handleBuyAlert={handleBuyAlert}/> }

        </>

    );

};