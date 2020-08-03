import React,{Fragment} from "react";
const Producto = ({image}) => {
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
            <a href="#" className="btn btn-primary">
              Comprar
            </a>
          </div>
        </div>
      </div>
      {/* <p className="img__description">This image looks super neat.</p> */}
      <div className="card-body">
        <h4 className="card-title">Papas</h4>
        <p className="card-text">
        <span class="badge badge-pill badge-success">Success</span>
        </p>
        <h5 className="card-title">$80</h5>
      </div>
    </div>
  );
};

export default Producto;
