import React,{Fragment} from "react";
const Order = ({id, order}) => {


    return (
        <div className="card card-container" align="center">

            <div className="card-body">
                <h4 className="card-title" align="center">{order.name.toUpperCase()}</h4>

                <h5 className="card-title">Cantidad de productos: {order.quantity}</h5>
                <h5 className="card-title">Total ${order.totalPrice}</h5>
            </div>
        </div>
    );
};

export default Order;
