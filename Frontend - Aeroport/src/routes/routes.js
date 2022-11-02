import Sillas from '../components/sillas/App';
import Buscar from '../components/reserva/searchReserva';
import { BrowserRouter, Route, Routes } from "react-router-dom";



export default function Rutas() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sillas />} />
          <Route path="/reserva/:id" element={<Buscar />} />


        </Routes>
      </BrowserRouter>
    );
  }
  