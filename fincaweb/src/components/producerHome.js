import React, {useEffect, useState} from "react";
import ProductsService from "../services/products.service";
import ProducerProduct from "./ProducerProduct";

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

    useEffect(()=>{
        getCurrentProducerProducts()
    },[]);


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {!products.products ? null :
                products.products.map((product) => (
                    <ProducerProduct
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    )
};


export default ProducerHome;
