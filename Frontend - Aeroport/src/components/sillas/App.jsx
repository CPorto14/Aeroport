import { useState, useEffect } from "react";
import { Load } from '../../services/reservas'
import { Heading, Box, Image, Flex, Center, Text, Spacer, Tag, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import "./sillas.css";
import Ocupada from "./posicion";
import Muestra from './sillas2';
import swal from 'sweetalert';

let count = [];
let aux = [];
export default function Sillas() {



    const [reservas, setReservas] = useState([]);
    const [prueba, setPrueba] = useState(0);
    const [seatsAdded, setSeatsAdded] = useState([]);


    function add(e, seat) {


        let k = 0;
        let check = false;
        console.log(seatsAdded)
        if (seatsAdded.length < 3) {
            for (let i = 0; i < seatsAdded.length; i++) {
                if (seatsAdded[i] === seat) {
                    aux.splice(i, 1)
                    console.log("Eliminado: ", seatsAdded[i])
                    console.log("flter", seatsAdded.filter(k => k !== seat));
                    setSeatsAdded(seatsAdded => seatsAdded.filter(k => k !== seat));
                    console.log("Lista SeatsAddeds", seatsAdded)

                    check = true;
                    break
                }

            }

            if (!check) {
                aux.push(seat)
                setSeatsAdded(seatsAdded => seatsAdded.concat(seat))
                console.log("Agregando: ", seat)
                console.log("Lista SeatsAddeds", seatsAdded)

            }

        } else {
            for (let i = 0; i < seatsAdded.length; i++) {
                if (seatsAdded[i] === seat) {
                    aux.splice(i, 1)
                    console.log("Eliminado: ", seatsAdded[i])
                    setSeatsAdded(seatsAdded => seatsAdded.filter(k => k !== seat));
                    console.log("Lista SeatsAddeds", seatsAdded)
                    check = true;
                    break
                }

            }

            if (!check) {
                console.log("Limite maximo de sillas")
                swal({
                    title: 'Limite maximo',
                    text: 'El limite de sillas que puedes comprar por sesión es 3',
                    icon: 'info', // error, success, info
                    button: 'Aceptar',
                    timer: '3000'
                })
                console.log("Lista SeatsAddeds", seatsAdded)


            }

        }
        console.log("update", aux);



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
            <div className="register-form-container">
                <div class="cockpit">



                <Center>
                    <Heading as="h1" size="4xl" p={5}>
                        <Box width={400} background="orange.200" borderRadius={20} p={10} m={5} textAlign="center">
                            Sillas
                        </Box>
                    </Heading>

                </Center>


                
                <Center>

                    <div class="row" >

                        <div onClick={(e) => add(e, count[0])}><Ocupada id={count[0]}/></div>
                        <div onClick={(e) => add(e, count[1])}><Ocupada id={count[1]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[2])}><Ocupada id={count[2]}/></div>
                        <div onClick={(e) => add(e, count[3])}><Ocupada id={count[3]}/></div>
                    </div>
                </Center>
                <Center>

                    <div class="row">

                        <div onClick={(e) => add(e, count[4])}><Ocupada id={count[4]}/></div>
                        <div onClick={(e) => add(e, count[5])}><Ocupada id={count[5]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[6])}><Ocupada id={count[6]}/></div>
                        <div onClick={(e) => add(e, count[7])}><Ocupada id={count[7]}/></div>
                    </div>
                </Center>
                <Center>
                    <div class="row">

                        <div onClick={(e) => add(e, count[8])}><Ocupada id={count[8]}/></div>
                        <div onClick={(e) => add(e, count[9])}><Ocupada id={count[9]}/></div>
                        <div onClick={(e) => add(e, count[10])}><Ocupada id={count[10]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[11])}><Ocupada id={count[11]}/></div>
                        <div onClick={(e) => add(e, count[12])}><Ocupada id={count[12]}/></div>
                        <div onClick={(e) => add(e, count[13])}><Ocupada id={count[13]}/></div>
                    </div>

                </Center>
                <Center>
                    <div class="row">

                        <div onClick={(e) => add(e, count[14])}><Ocupada id={count[14]}/></div>
                        <div onClick={(e) => add(e, count[15])}><Ocupada id={count[15]}/></div>
                        <div onClick={(e) => add(e, count[16])}><Ocupada id={count[16]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[17])}><Ocupada id={count[17]}/></div>
                        <div onClick={(e) => add(e, count[18])}><Ocupada id={count[18]}/></div>
                        <div onClick={(e) => add(e, count[19])}><Ocupada id={count[19]}/></div>
                    </div>

                </Center>
                <Center>
                    <div class="row">
                        <div onClick={(e) => add(e, count[20])}><Ocupada id={count[20]}/></div>
                        <div onClick={(e) => add(e, count[21])}><Ocupada id={count[21]}/></div>
                        <div onClick={(e) => add(e, count[22])}><Ocupada id={count[22]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[23])}><Ocupada id={count[23]}/></div>
                        <div onClick={(e) => add(e, count[24])}><Ocupada id={count[24]}/></div>
                        <div onClick={(e) => add(e, count[25])}><Ocupada id={count[25]}/></div>
                    </div>

                </Center>
                <Center>
                    <div class="row">
                        <div onClick={(e) => add(e, count[26])}><Ocupada id={count[26]}/></div>
                        <div onClick={(e) => add(e, count[27])}><Ocupada id={count[27]}/></div>
                        <div onClick={(e) => add(e, count[28])}><Ocupada id={count[28]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[29])}><Ocupada id={count[29]}/></div>
                        <div onClick={(e) => add(e, count[30])}><Ocupada id={count[30]}/></div>
                        <div onClick={(e) => add(e, count[31])}><Ocupada id={count[31]}/></div>
                    </div>

                </Center>
                <Center>
                    <div class="row">
                        <div onClick={(e) => add(e, count[32])}><Ocupada id={count[32]}/></div>
                        <div onClick={(e) => add(e, count[33])}><Ocupada id={count[33]}/></div>
                        <div onClick={(e) => add(e, count[34])}><Ocupada id={count[34]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[35])}><Ocupada id={count[35]}/></div>
                        <div onClick={(e) => add(e, count[36])}><Ocupada id={count[36]}/></div>
                        <div onClick={(e) => add(e, count[37])}><Ocupada id={count[37]}/></div>
                    </div>

                </Center>
                <Center>
                    <div class="row">
                        <div onClick={(e) => add(e, count[38])}><Ocupada id={count[38]}/></div>
                        <div onClick={(e) => add(e, count[39])}><Ocupada id={count[39]}/></div>
                        <div onClick={(e) => add(e, count[40])}><Ocupada id={count[40]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[41])}><Ocupada id={count[41]}/></div>
                        <div onClick={(e) => add(e, count[42])}><Ocupada id={count[42]}/></div>
                        <div onClick={(e) => add(e, count[43])}><Ocupada id={count[43]}/></div>
                    </div>

                </Center>
                <Center>
                    <div class="row">
                        <div onClick={(e) => add(e, count[44])}><Ocupada id={count[44]}/></div>
                        <div onClick={(e) => add(e, count[45])}><Ocupada id={count[45]}/></div>
                        <div onClick={(e) => add(e, count[46])}><Ocupada id={count[46]}/></div>
                        <Button margin={10}></Button>
                        <div onClick={(e) => add(e, count[47])}><Ocupada id={count[47]}/></div>
                        <div onClick={(e) => add(e, count[48])}><Ocupada id={count[48]}/></div>
                        <div onClick={(e) => add(e, count[49])}><Ocupada id={count[49]}/></div>
                    </div>

                </Center>
                <Center>

                    <Button onClick={() => { setSeatsAdded(seatsAdded => seatsAdded)}}>
                        {seatsAdded.length}
                    </Button>

                </Center>
                </div>



            </div>
            <Center>
                <div class="row">
                    {seatsAdded.length === 1 ? (
                        <Muestra id={seatsAdded[0]} />
                    ) : ((seatsAdded.length === 2 ? (
                        <>
                            <Muestra id={seatsAdded[0]} />
                            <Muestra id={seatsAdded[1]} />
                        </>

                    ) : ((seatsAdded.length === 3 ? (

                        <>
                            <Muestra id={seatsAdded[0]} />
                            <Muestra id={seatsAdded[1]} />
                            <Muestra id={seatsAdded[2]} />
                        </>
                    ) : (
                        <Center>

                            <Button>
                                Continuar
                            </Button>

                        </Center>

                    )))))}
                </div>
            </Center>







        </>
    )












}