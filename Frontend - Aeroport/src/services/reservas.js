import axios from 'axios';

const Load = async (state) => {
  const peticion = await axios.get('http://localhost:3001/silla')
  state(peticion.data)
}

const Busy = async (state) => {
  const peticion = await axios.get('http://localhost:3001/Reserva')
  state(peticion.data)
}

const Clients = async (state) => {
  const peticion = await axios.get('http://localhost:3001/cliente')
  state(peticion.data)

}


export {
  Load,
  Busy,
  Clients,
}