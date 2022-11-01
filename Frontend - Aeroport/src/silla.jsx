import React, { useState } from "react";


export default function Silla() {
    const [regDetails, setRegDetails] = useState({  // User 1
        name: "",
        email: "",
        document: "",
    });

    return (
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
                <h2 style={{ textAlign: "center" }}>Reservar silla </h2>
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
    )
}