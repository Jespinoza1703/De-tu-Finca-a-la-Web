import React, {useState} from "react";
import ProductsService from "../services/products.service";

const ProducerOrders = () => {

    const [orders, setOrders] = useState({
        products: [],
    });


    const getPendingOrders = () => {
        let list = [];
        ProductsService.getPendingOrders().then(response => {
            for (let i = 0; i < response.data.length; i++) {
                let option = {
                    product: response.data[i].name,
                    totalPrice: response.data[i].totalPrice,
                    quantity: response.data[i].quantity,
                    state: response.data[i].state,
                };
                list.push(option);
                console.log(option);
            }
            setOrders({
                products: list
            });
        });
    };

    return (
        <div>
            <button onClick={getPendingOrders}>Ordenes</button>
        </div>
    )
};


export default ProducerOrders;
