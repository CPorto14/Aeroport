import { textTransforms } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Busy, Load } from '../../services/reservas'


const Ocupada = (props) => {


    let seats = []
    let ocupadas = []

    const [ocupada, setOcupada] = useState([]);
    const [reservas, setReservas] = useState([]);


    useEffect(() => {
        Load(setReservas);
        Busy(setOcupada);
    }, [])

    

    reservas.map((reservas) => (
        seats.push(reservas.idSilla)

    ))


    let dato = 0

    ocupada.map((ocupada) => (
        ocupadas.push(parseInt(ocupada.idSilla))

    ))




    function verificar() {
        let check = false
        for (let i = 0; i < seats.length; i++) {
            if (props.id === ocupadas[i]) {
                check = true
                return 'silla2'
            }
        }
        if (check === false) {
            return 'silla'
        }
    }

    function verifica2() {
        let check = false
        for (let i = 0; i < seats.length; i++) {
            if (props.id === ocupadas[i]) {
                check = true
                return props.id
            }
        }
        if (check === false) {
            return props.id
        }

    }

    return (
        <div class={verificar()}>{verifica2()}</div>
    )

}

export default Ocupada;