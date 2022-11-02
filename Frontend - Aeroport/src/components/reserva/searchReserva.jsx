import React from "react";
import { Button } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import "./Register.css";
import { useState, useEffect } from "react";

import { Load, Clients, Busy } from '../../services/reservas'


let nombre = '';
let correo = '';
let fecha = '';
let ubicacion = '';
let valor = '';
let sillaId = '';
let count = [];

let clientes = [];

let sillas = [];


export default function Buscar() {

    let id = useParams();

    id = id.id

    const [reservas, setReservas] = useState([]);
    const [cliente, setCliente] = useState([]);
    const [silla, setSilla] = useState([]);
    const [buscar, setBuscar] = useState({
        search: '',
    });


    useEffect(() => {
        Load(setSilla);
    }, [])

    useEffect(() => {
        Busy(setReservas);
    }, [])

    useEffect(() => {
        Clients(setCliente);
    }, [])

    silla.map((silla) => (
        sillas.push(silla)

    ))


    cliente.map((cliente) => (
        clientes.push(cliente)

    ))



    reservas.map((reservas) => (
        count.push(reservas)

    ))


    for (let index = 0; index < clientes.length; index++) {
        if (clientes[index].cedula === parseInt(id)) {
            nombre = clientes[index].nombre;
            correo = clientes[index].correo;
            break;
        }
    }
    console.log(nombre, correo)

    for (let index = 0; index < count.length; index++) {
        if (count[index].idCliente === id) {
            sillaId = count[index].idSilla;
            fecha = count[index].fecha;
            break;
        }
    }
    for (let index = 0; index < sillas.length; index++) {
        if (sillas[index].idSilla === parseInt(sillaId)) {
            valor = sillas[index].costo;
            ubicacion = sillas[index].ubicacion;
            break;
        }
    }





    







    return (

        <>
            <div class="topnav">
                <a class="active" href="http://localhost:3000/">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <input type="text" placeholder="Search.." value={buscar.search} onChange={(e) =>
                    setBuscar({ ...buscar, search: e.target.value })
                } />
                <a href={`http://localhost:3000/reserva/${buscar.search}`}>
                    <button>Buscar</button>
                </a>
            </div>
            <div className="login-container">
                <div class="area">
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <h2 style={{ textAlign: "center" }}>Reserva </h2>
                <div className="register-form-container">
                    <h2>Información de contacto</h2>
                    <form className="register-form">
                        <label htmlFor="">Número de documento {id}</label>
                        <label htmlFor="">Nombre completo: {nombre}</label>
                        <label htmlFor="">Correo electronico: {correo}</label>



                    </form>
                </div>
                <div className="register-form-container">
                    <h2>Información de reserva</h2>
                    <form className="register-form">
                        <label htmlFor="">Numero de silla: {sillaId}</label>
                        <label htmlFor="">Ubicacion: {ubicacion}</label>
                        <label htmlFor="">Fecha: {fecha}</label>
                        <label htmlFor="">Costo: {valor}</label>





                    </form>
                </div>
            </div>



        </>
    );
}