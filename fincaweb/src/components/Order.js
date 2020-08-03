import React, {Fragment, useEffect, useState} from "react";
import ProductsService from "../services/products.service";
const Order = ({id, order, key}) => {

    const [state, setState] = useState({
        state: ''
    });

    const getVars = () =>{
        if (order.state === 'pendingConfirm'){
            setState({
                state: 'Confirmación Pendiente'
            })
        }
        if (order.state === 'pendingDelivery'){
            setState({
                state: 'Entrega Pendiente'
            })
        }
        if (order.state === 'pendingValidation'){
            setState({
                state: 'Validación del Usuario Pendiente'
            })
        }
    };

    useEffect(()=>{
        getVars();
    },[]);


    const confirmOrder = () =>{
        ProductsService.changePackageState(id, "pendingDelivery").then(r =>{
            console.log(r);
        })
    };


    return (
        <div className="card card-container" align="center">

            <div className="card-body">
                <h4 className="card-title" align="center">{order.name.toUpperCase()}</h4>

                <h5 className="card-title">Cantidad de productos: {order.quantity}</h5>
                <h5 className="card-title">Total ${order.totalPrice}</h5>
                <h5 className="card-title">Estado: {state.state}</h5>
                {order.state === 'pendingConfirm'? (
                    <button className="btn btn-success ml-3" onClick={confirmOrder}>Confimar</button>
                ) : (
                    <button className="btn btn-success ml-3" disabled>Confimar</button>
                )

                }
                {order.state === 'pendingDelivery'? (
                    <button className="btn btn-success ml-3">Entregado</button>
                ) : (
                    <button className="btn btn-success ml-3" disabled>Entregado</button>
                )

                }
            </div>
        </div>
    );
};

export default Order;
