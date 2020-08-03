import React, { Fragment,useState } from "react";
const Producto = ({ image, producto, key,tipoProducto,agregarCarrito }) => {
  return (
    <div className="card container-fluid">
      <div className="cabeza">
        <img src={image} alt="Avatar" className="image card-img-top" />
        <div className="middle">
          <div className="text"></div>
        </div>
      </div>
      {/* <p className="img__description">This image looks super neat.</p> */}
      <div className="card-body">
        <h4 className="card-title">  cultivado por :{producto.name} </h4>
        <form>
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Cantidad"
          />
          <button type="button" class="btn btn-primary">
            Agregar al carrito
          </button>
        </form>
      </div>
    </div>
  );
};

export default Producto;
