import React ,{Fragment,useState,useEffect} from "react";
import axios from "axios";
import Banner from './Banner';
import Catalogo from './Catalago';

const Home = () => {
    const API_URL="https://kz-product-manager-2.herokuapp.com/"
    const [productos,setProduct]=useState(false);
    const [stock,setStock]=useState(false);
    const [tipoProducto,setTipoProducto]=useState("");
    const  [carrito,agregarCarrito]=useState([]);
    //Metodo para hacer el get
    const fetchData = async () => {
        const token = localStorage.getItem("token");
        const data = {
            Authorization: 'Bearer ' + token
        };
        const response = await axios.get(API_URL+"products",{ headers: data} );

        setProduct(response.data)
        console.log(productos)
    }
    //Aqui establecemos el state cuando se crea el componente
    useEffect(()=>{
        fetchData()
    },[]);


    return (
        <Fragment>
            <Banner/>
            {!productos?null :
                <Catalogo
                    productos={productos}
                    stock={stock}
                    setStock={setStock}
                    tipoProducto={tipoProducto}
                    seTipoProducto={setTipoProducto}
                    agregarCarrito={agregarCarrito}
                />

            }


        </Fragment>

    )
};
export default Home;
