import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import Registro from './components/registro';
import AgendarCita from './components/AgendarCita';
import TiendaAccesorios from './components/TiendaAccesorios';
import TipoProductoCRUD from './components/TipoProducto/TipoProductoCRUD';
import axios from 'axios';
import './App.css';
import { Button } from '@mui/material';

function App() {
    return (
        <Router>
            <div>
                <h1>Tienda de Mascotas</h1>
                <nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/registro">Registro</Link></li>
                        <li><Link to="/agendar-cita">Agendar Cita</Link></li>
                        <li><Link to="/tienda-accesorios">Tienda de Accesorios</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/agendar-cita" element={<AgendarCita />} />
                    <Route path="/tienda-accesorios" element={<TiendaAccesorios />} />
                    <Route  path="/dashboard" element={<Dashboard />} />
                    <Route  path="/productos" element={<productos />} />
                    <Route  path="/tipoproductos" element={<TipoProductoCRUD />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;



