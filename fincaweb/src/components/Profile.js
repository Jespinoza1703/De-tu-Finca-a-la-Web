import React, {Fragment, useEffect, useState} from "react";


const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    const [role, setRole] = useState({
        role: ''
    });

    const getVars = () =>{
        if (user.role === 'regularConsumer'){
            setRole({
                role: 'Consumidor Regular'
            })
        }
        if (user.role === 'producer'){
            setRole({
                role: 'Productor'
            })
        }
        if (user.role === 'wholesaleConsumer'){
            setRole({
                role: 'Consumidor al por Mayor'
            })
        }
    };

    useEffect(()=>{
        getVars();
    },[]);

    console.log(role.role);
    return (
        <div className="card card-container" align="center">

            <div className="card-body">
                <h2 className="card-title" align="center">Bienvenido a tu perfil, {user.name}!</h2>
                <br />
                <br />
                <h2 className="card-title" align="center">Datos personales:</h2>
                <br />
                <h4 className="card-title" align="center">Nombre: {user.name}</h4>
                <br />
                <h4 className="card-title" align="center">Apellido: {user.lastname}</h4>
                <br />
                <h4 className="card-title" align="center">Correo Electrónico: {user.email}</h4>
                <br />
                <h4 className="card-title" align="center">Teléfono: {user.phone}</h4>
                <br />
                <h4 className="card-title" align="center">Rol: {role.role}</h4>
            </div>
        </div>
    );
};

export default Profile;
