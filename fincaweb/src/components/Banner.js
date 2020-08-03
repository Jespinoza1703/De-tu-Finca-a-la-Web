import React from "react";
import Titulo from "./Titulo";
const Banner = () => {
  return (
    <div className="container ">
      <div className="container banner_contenedor">
        <div className="row">
          <div className="col-lg">
              <h1 className="titulo">Productos  <span className="subrayado">Meals Near You.</span></h1>
              <p className="parrafito">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="col-lg">
          <img src="https://images.unsplash.com/photo-1595336977019-f197d1366c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80" class=" img-fluid imagen-banner" alt="Responsive image"/>
          </div>
        </div>
        <div class="row">
            
        </div>
      </div>
    </div>
  );
};

export default Banner;