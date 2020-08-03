import React, {useState} from "react";
import ProductsService from "../services/products.service";
import Item from "./Item";
import axios from "axios";
const Cart = ({carrito}) => {
    const postData = async () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        let cuerpo={items:[
            {stock:
                    {
                        _id: "5f27edca04fcca0017a59489",
                        price: "10",
                        productId: "5f27a82082e0ffce65c441d2",
                        name: "zanahoria",
                        units: "kilo"
                    }
                , quantity:5}
        ],
        limitDate:"2002-12-09"}
        console.log(carrito)
        const response =await axios.post( 
          'https://kz-product-manager-2.herokuapp.com/users/carrito',
          carrito,
          config
        )
    }
    const confirmarPedido=()=>{
        const token = localStorage.getItem("token");
        
        let url="https://kz-product-manager-2.herokuapp.com/users/carrito"
        console.log("This is carrito")
        console.log(carrito)

        

        //Prueba de post
        .then(console.log).catch(console.log)


        let cuerpo={items:[
            {stock:
                    {
                        _id: "5f27edca04fcca0017a59489",
                        price: "10",
                        productId: "5f27a82082e0ffce65c441d2",
                        name: "zanahoria",
                        units: "kilo"
                    }
                , quantity:5}
        ],
        limitDate:"2002-12-09"}
        fetch(url, {
            method: 'POST', // or 'PUT'
            //body: JSON.stringify(cuerpo), // data can be string or {object}!
            body:cuerpo,
            headers:{
              'Authorization': 'Bearer ' + token
              
            }
          }).then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(response => console.log('Success:', response));
    }
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

    return (
        <div className="container ">
      <div className="container banner_contenedor">
        <div className="row">
          <div className="col-lg">
              <h1 className="titulo">Revisa tu    <span className="subrayado">compra</span></h1>
              <p className="parrafito">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          </div>
           
          <div class="col-lg">
        
                 {carrito.items.map((item) => (
                     <Item
                     image={tipoImagen(item.stock.name)}
                         key={item.stock._id}
                        
                         name={item.stock.name}
                         
                         quantity={item.quantity}
                         stock={item.stock}
                     />
                 ))}
                 <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Fecha maxima"
            
          />
          <button type="button" class="btn btn-primary" onClick={postData}>
            Confirmar Pedido
          </button>
            
         
         
          </div>
        </div>
        <div class="row">
            
        </div>
      </div>
    </div>
    )
};


export default Cart;
