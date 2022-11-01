import React, { Fragment } from 'react';
import { useState } from "react";
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import swal from 'sweetalert';



const Muestra = (props) => {
    const [regDetails, setRegDetails] = useState({  // User 1
        name: "",
        email: "",
        document: "",
    });

    const guardar = () => {
        if(regDetails.document === '' || regDetails.email === '' || regDetails.name === ''){
            swal({
                title: 'Por favor llene todos los campos',
                text: 'Todos los campos son obligatorios',
                icon: 'error', // error, success, info
                button: 'Aceptar',
                timer: '3000'
            })
        }else{
            createReservation();
            CreateUser();
        }
        
    }

    function clear(){
        setRegDetails(regDetails.document = regDetails.document = '');
        setRegDetails(regDetails.name = regDetails.name = '');
        setRegDetails(regDetails.email = regDetails.email = '');
    }

    async function createReservation() {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        
        let reservation = { idCliente: regDetails.document, idSilla: String(props.id), Fecha: hoy.toDateString()}
        console.log("reservaaaaaaaaa")
        console.log(reservation);

        let res = await axios.post('http://localhost:3001/Reserva', reservation);
        let data = res.data;
        console.log(data);
        swal({
            title: 'Reserva creada con exito',
            text: `Reserva a nombre de ${regDetails.name}`,
            icon: 'success', // error, success, info
            button: 'Aceptar',
            timer: '3000'
        })
        clear()
    }

    async function CreateUser() {

        let user = { Cedula: regDetails.document, Nombre: regDetails.name, Correo: regDetails.email };

        console.log(user)

        let res = await axios.post('http://localhost:3001/cliente/create', user);

        let data = res.data;
        console.log(data);
    }

    const mostrar = () => {
        console.log("jooaoaooaoaao")
    }

    return (
        <div className="login-container">

            <h2 style={{ textAlign: "center" }}>Reservar silla {props.id}</h2>
            <div className="register-form-container">
                <h2>Información de contacto</h2>
                <form className="register-form">
                    <label htmlFor="">Nombre completo</label>
                    <input
                        required
                        type="text"
                        placeholder="Nombre completo"
                        value={regDetails.name}
                        onChange={(e) =>
                            setRegDetails({ ...regDetails, name: e.target.value })
                        }
                    />

                    <label htmlFor="">Correo electronico</label>
                    <input
                        required
                        type="email"
                        placeholder="Correo electronico"
                        value={regDetails.email}
                        onChange={(e) =>
                            setRegDetails({ ...regDetails, email: e.target.value })
                        }
                    />
                    <label htmlFor="">Número de documento</label>
                    <input
                        required
                        type="text"
                        placeholder="Documento"
                        value={regDetails.document}
                        onChange={(e) =>
                            setRegDetails({ ...regDetails, document: e.target.value })
                        }
                    />
                    <Button
                        style={{ marginTop: "20px" }}
                        color="primary"
                        onClick={guardar}
                    >
                        Confirmar Reserva
                    </Button>
                </form>
            </div>
        </div>
    )
};

export default Muestra;