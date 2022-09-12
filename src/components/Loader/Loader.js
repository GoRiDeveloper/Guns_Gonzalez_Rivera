import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalContext';
import './Loader.css';

export const Loader = () => {

    const { loading } = useContext(GlobalContext);

    return (

        <>

            {loading && (

                <div className="container__loader">

                    <div className="loader">

                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>
                        <span className="loader--span"></span>

                    </div>

                </div>

            )}

        </>

    );

}