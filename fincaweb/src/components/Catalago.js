import React, { Fragment } from "react";
import Producto from "./Producto";
const Catalago = ({ productos }) => {

    const tipoImagen=nombre=>{
        let image="";
        switch (nombre) {
          
            case "papa":
                image = "https://images.unsplash.com/photo-1573196444577-af471298e034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
              break;
            case "tomate":
                image = "https://images.unsplash.com/photo-1523591967366-7ab89ed62207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80";
              break;
            case "arroz":
                image = "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
              break;
            case "brocoli":
                image = "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
              break;
            case "zanahoria":
                image = "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
              
            
          }
          return image
    }
  const image =
    "https://images.unsplash.com/photo-1489450278009-822e9be04dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80";

  return (
    <Fragment>
      <div className="container mt-5">
        <h1 className="titulo text-left">
          {" "}
          Productos de tu <span className="subrayado">Zona</span>
        </h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {productos.map((producto) => (
            <Producto
              key={producto._id}
/*               image={"https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
 */              image={tipoImagen(producto.name)}
              producto={producto}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Catalago;
