import React, { Fragment } from 'react';
import Producto from './Producto';
const Catalago = () => {
    const image="https://images.unsplash.com/photo-1489450278009-822e9be04dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80";

    return ( 
        <Fragment>
            
            <div className="container mt-5">
            <h1 className="titulo text-left"> Productos de tu <span className="subrayado">Zona</span></h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <Producto
                image="https://images.unsplash.com/photo-1573196444577-af471298e034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
             <Producto
                image="https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
             <Producto
                image={image}
            />
           
           <Producto
                image={image}
            />
             <Producto
                image={image}
            />
             <Producto
                image={image}
            />
            <Producto
                image={image}
            />
             <Producto
                image={image}
            />
             <Producto
                image={image}
            />
        </div>

            </div>
        
        </Fragment>
     );
}
 
export default Catalago;