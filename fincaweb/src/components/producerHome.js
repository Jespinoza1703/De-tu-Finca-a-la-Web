import React from "react";
import ProductsService from "../services/products.service";

const ProducerHome = () => {

    const getCurrentProducerProducts = () => {
        ProductsService.getCurrentProducerProducts().then(response => {
                console.log(response);
            }
        );
    };

    const getPendingOrders = () => {
        ProductsService.getPendingOrders().then(response => {
                console.log(response);
            }
        );
    };

    return (
        <div>
            <button onClick={getPendingOrders}>Productor!</button>
        </div>
    )
};


export default ProducerHome;
