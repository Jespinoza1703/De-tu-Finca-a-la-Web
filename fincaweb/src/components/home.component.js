import React from "react";
import ProductsService from "../services/products.service";

const Home = () => {

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
            <button onClick={getPendingOrders}>Click me!</button>
        </div>
    )
};
export default Home;
