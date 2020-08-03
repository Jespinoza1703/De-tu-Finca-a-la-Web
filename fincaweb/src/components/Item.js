import React,{Fragment} from "react";
const Item = ({name,quantity,stock,image}) => {
  const definirTipo=()=>{
    

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
            
            </div>
          </div>
        </div>
        {/* <p className="img__description">This image looks super neat.</p> */}
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          
          <h5 className="card-title">Canitdad:{quantity}</h5>
        </div>
      </div>
  );
};

export default Item;
