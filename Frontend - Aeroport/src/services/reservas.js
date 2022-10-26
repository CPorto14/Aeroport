import axios from 'axios';

const Load = async (state) => {
    const peticion = await axios.get('http://localhost:3001/silla')
    state(peticion.data)
  }


  export {
    Load,
  }