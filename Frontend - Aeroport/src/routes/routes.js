import Sillas from '../App';
import CrearReserva from '../CrearReserva';
import { BrowserRouter, Route, Routes } from "react-router-dom";



export default function Rutas() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sillas />} />
          <Route path="/create/:silla" element={<CrearReserva />} />
          <Route path="/create/" element={<CrearReserva />} />

        </Routes>
      </BrowserRouter>
    );
  }
  