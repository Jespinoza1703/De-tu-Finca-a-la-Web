import React, {useState} from "react";
import ProductsService from "../services/products.service";

const ProducerHome = () => {

    const [products, setProducts] = useState({
        products: [],
    });

    const getCurrentProducerProducts = () => {
        let list = [];
        ProductsService.getCurrentProducerProducts().then(response => {
            for (let i = 0; i < response.data.length; i++) {
                let option = {
                    product: response.data[i].name,
                    price: response.data[i].price,
                    units: response.data[i].units,
                };
                console.log(option);
                list.push(option);
            }
            setProducts({
                products: list
            });
        })
    };


    return (
        <div>
            <button onClick={getCurrentProducerProducts}>Productor!</button>
        </div>
    )
};


export default ProducerHome;
