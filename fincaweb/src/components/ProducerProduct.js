import React,{Fragment} from "react";
const ProducerProduct = ({id, product}) => {


    return (
        <div className="card card-container" align="center">

            <div className="card-body">
                <h4 className="card-title" align="center">{product.product.toUpperCase()}</h4>

                <h5 className="card-title">${product.price}</h5>
                <h5 className="card-title">Unidades: {product.units}</h5>
            </div>
        </div>
    );
};

export default ProducerProduct;
