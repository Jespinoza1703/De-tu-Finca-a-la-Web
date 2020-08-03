import React, { Fragment,useState } from "react";
const Producto = ({ image, producto, key,tipoProducto,agregarCarrito,productos,carrito }) => {
  const [cantidad,ponerCantidad]=useState(0)
  const actualizarCantidad=(e)=>{
    ponerCantidad(e.target.value)
  }
  const armarObjeto=()=>{
    const correcto=producto.stock.filter(elemento=>elemento.name===tipoProducto)
    console.log("Est es el correcto")
    //console.log(producto.stock)
    //console.log(correcto[0].price)
  let item={
    _id:correcto[0]._id,
    price:correcto[0].price,
    productId:correcto[0].productId,
    name:tipoProducto,
    units:correcto[0].units
  }
  let elemento={
    stock:item,
    quantity:cantidad
  }
  let items=[
    elemento
  ]
  console.log(elemento)
  agregarCarrito(
    {
      items:[...carrito.items,elemento],
      limitDate:"2002-12-09"
    }
  )

  }

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
            value={cantidad}
            onChange={actualizarCantidad}
          />
          <button type="button" class="btn btn-primary" onClick={armarObjeto}>
            Agregar al carrito
          </button>
        </form>
      </div>
    </div>
  );
};

export default Producto;
