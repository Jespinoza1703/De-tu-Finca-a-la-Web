import React from "react";
import Titulo from "./Titulo";
const Banner = () => {
  return (
    <div className="container ">
      <div className="container banner_contenedor">
        <div className="row">
          <div className="col-lg">
              <h1 className="titulo">Porque siempre lo mejor es   <span className="subrayado">Local</span></h1>
              <p className="parrafito">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="col-lg">
          <img src="https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class=" img-fluid imagen-banner" alt="Responsive image"/>
          </div>
        </div>
        <div class="row">
            
        </div>
      </div>
    </div>
  );
};

export default Banner;