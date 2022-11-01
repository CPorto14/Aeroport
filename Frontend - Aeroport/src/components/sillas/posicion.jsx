import { textTransforms } from "@nextui-org/react";
import { useState, useEffect } from "react";

const Ocupada = (props) => {
    let seats = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    let ocupadas = [1,2,3,4,5,6,7,8,45,26,30]
    
    const [ocupada, setOcupada] = useState([])
    
    

    function verificar() {
        let check = false
        for (let i = 0; i < seats.length; i++) {
            if(props.id === ocupadas[i]){
                check = true
                return 'silla2'
            }
        }
        if (check === false){
            return 'silla'
        }
    }

    function verifica2() {
        let check = false
        for (let i = 0; i < seats.length; i++) {
            if(props.id === ocupadas[i]){
                check = true
                return props.id
            }
        }
        if (check === false){
            return props.id
        }
        
    }
    
    return (
        <div class={verificar()}>{verifica2()}</div>
    )

}

export default Ocupada;