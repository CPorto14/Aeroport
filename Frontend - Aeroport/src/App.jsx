import { useState, useEffect } from "react";
import { Load } from './services/reservas'
import { Heading, Box, Image, Flex, Center, Text, Spacer, Tag, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

let count = [];
export default function Sillas() {
    

    let seatsAdded = [54,26]
    
    const [reservas, setReservas] = useState([]);

    function add(e, seat) {
        e.preventDefault();
        let k = 0;
        let check = false;
        if (seatsAdded.length < 3) {
            for (let i = 0; i < seatsAdded.length; i++) {
                if (seatsAdded[i] === seat) {
                    console.log("Eliminado: ", seatsAdded[i])
                    seatsAdded.splice(i, 1);
                    check = true;
                    break
                }

            }

            if (!check) {
                seatsAdded.push(seat)
                console.log("Agregando: ", seat)
            }

        } else {
            for (let i = 0; i < seatsAdded.length; i++) {
                if (seatsAdded[i] === seat) {
                    console.log("Eliminado: ", seatsAdded[i])
                    seatsAdded.splice(i, 1);
                    check = true;
                    break
                }

            }

            if (!check) {
                console.log("Limite maximo de sillas")
                
            }

        }


        console.log("Lista SeatsAddeds",seatsAdded)
        aux = seatsAdded.length
        console.log(aux)
    }

    let aux = seatsAdded.length

    function getList(){
        return seatsAdded
    }

    useEffect(() => {
        Load(setReservas);
    }, [])


    for (let i = 0; i < 60; i++) {
        count.push(i)

    }

    // {reservas.map((reservas) => (
    //   count.push(reservas.idSilla)

    // ))}



    return (
        <>
        

            <Center>
                <Heading as="h1" size="4xl" p={5}>
                    <Box width={400} background="orange.200" borderRadius={20} p={10} m={5} textAlign="center">
                        Sillas
                    </Box>
                </Heading>

            </Center>



            <Center>

                <div class="row" >

                    <button onClick={(e) => add(e, count[0])}>{count[0]}</button>
                    <button onClick={(e) => add(e, count[1])}>{count[1]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[2])}>{count[2]}</button>
                    <button onClick={(e) => add(e, count[3])}>{count[3]}</button>
                </div>
            </Center>
            <Center>

                <div class="row">

                    <button onClick={(e) => add(e, count[4])}>{count[4]}</button>
                    <button onClick={(e) => add(e, count[5])}>{count[5]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[6])}>{count[6]}</button>
                    <button onClick={(e) => add(e, count[7])}>{count[7]}</button>
                </div>
            </Center>
            <Center>
                <div class="row">

                    <button onClick={(e) => add(e, count[8])}>{count[8]}</button>
                    <button onClick={(e) => add(e, count[9])}>{count[9]}</button>
                    <button onClick={(e) => add(e, count[10])}>{count[10]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[11])}>{count[11]}</button>
                    <button onClick={(e) => add(e, count[12])}>{count[12]}</button>
                    <button onClick={(e) => add(e, count[13])}>{count[13]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button onClick={(e) => add(e, count[14])}>{count[14]}</button>
                    <button onClick={(e) => add(e, count[15])}>{count[15]}</button>
                    <button onClick={(e) => add(e, count[16])}>{count[16]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[17])}>{count[17]}</button>
                    <button onClick={(e) => add(e, count[18])}>{count[18]}</button>
                    <button onClick={(e) => add(e, count[19])}>{count[19]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button onClick={(e) => add(e, count[20])}>{count[20]}</button>
                    <button onClick={(e) => add(e, count[21])}>{count[21]}</button>
                    <button onClick={(e) => add(e, count[22])}>{count[22]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[23])}>{count[23]}</button>
                    <button onClick={(e) => add(e, count[24])}>{count[24]}</button>
                    <button onClick={(e) => add(e, count[25])}>{count[25]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button onClick={(e) => add(e, count[26])}>{count[26]}</button>
                    <button onClick={(e) => add(e, count[27])}>{count[27]}</button>
                    <button onClick={(e) => add(e, count[28])}>{count[28]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[29])}>{count[29]}</button>
                    <button onClick={(e) => add(e, count[30])}>{count[30]}</button>
                    <button onClick={(e) => add(e, count[31])}>{count[31]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button onClick={(e) => add(e, count[32])}>{count[32]}</button>
                    <button onClick={(e) => add(e, count[33])}>{count[33]}</button>
                    <button onClick={(e) => add(e, count[34])}>{count[34]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[35])}>{count[35]}</button>
                    <button onClick={(e) => add(e, count[36])}>{count[36]}</button>
                    <button onClick={(e) => add(e, count[37])}>{count[37]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button onClick={(e) => add(e, count[38])}>{count[38]}</button>
                    <button onClick={(e) => add(e, count[39])}>{count[39]}</button>
                    <button onClick={(e) => add(e, count[40])}>{count[40]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[41])}>{count[41]}</button>
                    <button onClick={(e) => add(e, count[42])}>{count[42]}</button>
                    <button onClick={(e) => add(e, count[43])}>{count[43]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button onClick={(e) => add(e, count[44])}>{count[44]}</button>
                    <button onClick={(e) => add(e, count[45])}>{count[45]}</button>
                    <button onClick={(e) => add(e, count[46])}>{count[46]}</button>
                    <Button margin={10}></Button>
                    <button onClick={(e) => add(e, count[47])}>{count[47]}</button>
                    <button onClick={(e) => add(e, count[48])}>{count[48]}</button>
                    <button onClick={(e) => add(e, count[49])}>{count[49]}</button>
                </div>

            </Center>

            <Center>
                <Link to={`/create/${seatsAdded}`}>
                <Button>
                Continuar
                </Button>
                </Link>
            </Center>







        </>
    )












}