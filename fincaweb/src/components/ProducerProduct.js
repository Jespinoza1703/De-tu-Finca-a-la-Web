import React,{Fragment} from "react";
const ProducerProduct = ({id, product}) => {


    return (
        <div className="card container-fluid">

            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>

                <h5 className="card-title">Precio del pedido: {product.price}</h5>
                <h5 className="card-title">Unidades: {product.units}</h5>
            </div>
        </div>
    );
};

export default ProducerProduct;
