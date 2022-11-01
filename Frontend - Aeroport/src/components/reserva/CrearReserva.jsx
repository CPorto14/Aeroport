import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import "./Register.css";




export default function CrearReserva() {

    let lista = useParams();

    console.log(lista.silla)

    let seats = lista.silla.split(',')

    console.log(seats)

    

    

    const [regDetails, setRegDetails] = useState({  // User 1
        name: "",
        email: "",
        document: "",
    });
    const [regDetails1, setRegDetails1] = useState({ // User 2
        name: "",
        email: "",
        document: "",
    });
    const [regDetails2, setRegDetails2] = useState({ // User 3
        name: "",
        email: "",
        document: "",
    });
    const users = seats.length;

    return (

        <>
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
                <h2 style={{ textAlign: "center" }}>Reservar silla {seats[0]}</h2>
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
                                setRegDetails({ ...regDetails, first_name: e.target.value })
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
                                setRegDetails({ ...regDetails, password: e.target.value })
                            }
                        />
                        
                    </form>
                </div>
            </div>


            {users === 2 ? (
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
                    <h2 style={{ textAlign: "center" }}>Reservar silla {seats[1]}</h2>
                    <div className="register-form-container">
                        <h2>Información de contacto</h2>
                        <form className="register-form">
                            <label htmlFor="">Nombre completo</label>
                            <input
                                required
                                type="text"
                                placeholder="Nombre completo"
                                value={regDetails1.name}
                                onChange={(e) =>
                                    setRegDetails1({ ...regDetails1, first_name: e.target.value })
                                }
                            />

                            <label htmlFor="">Correo electronico</label>
                            <input
                                required
                                type="email"
                                placeholder="Correo electronico"
                                value={regDetails1.email}
                                onChange={(e) =>
                                    setRegDetails1({ ...regDetails1, email: e.target.value })
                                }
                            />
                            <label htmlFor="">Número de documento</label>
                            <input
                                required
                                type="text"
                                placeholder="Documento"
                                value={regDetails1.document}
                                onChange={(e) =>
                                    setRegDetails1({ ...regDetails1, password: e.target.value })
                                }
                            />
                            
                        </form>
                    </div>
                    <center>
                <Button
                    style={{ marginTop: "20px" }}
                    color="primary"
                    auto
                    ghost
                >
                    Confirmar Reserva
                </Button>
                </center>
                </div>
                

            ) : ((users === 3 ? (
                <>
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
                        <h2 style={{ textAlign: "center" }}>Reservar silla {seats[1]}</h2>
                        <div className="register-form-container">
                            <h2>Información de contacto</h2>
                            <form className="register-form">
                                <label htmlFor="">Nombre completo</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Nombre completo"
                                    value={regDetails1.name}
                                    onChange={(e) =>
                                        setRegDetails1({ ...regDetails1, first_name: e.target.value })
                                    }
                                />

                                <label htmlFor="">Correo electronico</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="Correo electronico"
                                    value={regDetails1.email}
                                    onChange={(e) =>
                                        setRegDetails1({ ...regDetails1, email: e.target.value })
                                    }
                                />
                                <label htmlFor="">Número de documento</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Documento"
                                    value={regDetails1.document}
                                    onChange={(e) =>
                                        setRegDetails1({ ...regDetails1, password: e.target.value })
                                    }
                                />
                                
                            </form>
                        </div>
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
                        <h2 style={{ textAlign: "center" }}>Reservar silla {seats[2]}</h2>
                        <div className="register-form-container">
                            <h2>Información de contacto</h2>
                            <form className="register-form">
                                <label htmlFor="">Nombre completo</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Nombre completo"
                                    value={regDetails2.name}
                                    onChange={(e) =>
                                        setRegDetails2({ ...regDetails2, first_name: e.target.value })
                                    }
                                />

                                <label htmlFor="">Correo electronico</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="Correo electronico"
                                    value={regDetails2.email}
                                    onChange={(e) =>
                                        setRegDetails2({ ...regDetails2, email: e.target.value })
                                    }
                                />
                                <label htmlFor="">Número de documento</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Documento"
                                    value={regDetails2.document}
                                    onChange={(e) =>
                                        setRegDetails2({ ...regDetails2, password: e.target.value })
                                    }
                                />

                            </form>
                        </div>
                    </div>
                    <center>
                    <Button
                        style={{ marginTop: "20px" }}
                        color="primary"
                        auto
                        ghost
                    >
                        Confirmar Reserva

                    </Button>
                    </center>
                </>
            ) : (
                <center>
                <Button
                    style={{ marginTop: "20px" }}
                    color="primary"
                    auto
                    ghost
                >
                    Confirmar Reserva
                </Button>
                </center>
            ))



            )}
        </>
    );
}