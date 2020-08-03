import React,{Fragment} from "react";
const Producto = ({image,producto,key,seTipoProducto,setStock}) => {
  const definirTipo=()=>{
    seTipoProducto(producto.name)
    setStock(true)

  }
  return (
      <div className="card container-fluid">
        <div className="cabeza">
          <img
              src={image}
              alt="Avatar"
              className="image card-img-top"
          />
          <div className="middle">
            <div className="text">
            <button type="button" class="btn btn-primary" onClick={definirTipo }>
            Ver Opciones
          </button>
            </div>
          </div>
        </div>
        {/* <p className="img__description">This image looks super neat.</p> */}
        <div className="card-body">
          <h4 className="card-title">{producto.name}</h4>
          
          <h5 className="card-title">Tipo:{producto.category}</h5>
        </div>
      </div>
  );
};

export default Producto;
