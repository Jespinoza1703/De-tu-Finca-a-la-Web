import React, {useEffect, useState} from "react";
import ProductsService from "../services/products.service";
import FlipMove from "react-flip-move";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Producto from "./Producto";
import Order from "./Order";

const ProducerOrders = () => {

    const [orders, setOrders] = useState({
        orders: [],
    });

    const getPendingOrders = () => {
        let list = [];
        ProductsService.getPendingOrders().then(response => {
            for (let i = 0; i < response.data.length; i++) {
                let option = {
                    id: response.data[i].productId,
                    name: response.data[i].name,
                    totalPrice: response.data[i].totalPrice,
                    quantity: response.data[i].quantity,
                    state: response.data[i].state,
                };
                list.push(option);
            }
            setOrders({
                orders: list
            });
        });
    };

    useEffect(()=>{
        getPendingOrders()
    },[]);


    return (
        <div className="row row-cols-1">
            {!orders.orders ? null :
                    orders.orders.map((order) => (
                        <Order
                            key={order.id}
                            order={order}
                        />
                    ))
            }
        </div>
    );
};


export default ProducerOrders;
