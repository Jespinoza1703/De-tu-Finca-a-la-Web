import React,{Fragment} from "react";
const Order = ({id, order}) => {


    return (
        <div className="card container-fluid">

            <div className="card-body">
                <h4 className="card-title">{order.name}</h4>

                <h5 className="card-title">Precio del pedido: {order.totalPrice}</h5>
            </div>
        </div>
    );
};

export default Order;
