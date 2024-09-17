import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';

function AgendarCita() {
    const [mascota, setMascota] = useState({ nombre: '', raza: '', edad: '', tipo: 'Perro' });
    const [fecha, setFecha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/citas/', { mascota, fecha });
        alert("Cita agendada");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre Mascota" value={mascota.nombre} onChange={e => setMascota({ ...mascota, nombre: e.target.value })} />
            <input type="text" placeholder="Raza" value={mascota.raza} onChange={e => setMascota({ ...mascota, raza: e.target.value })} />
            <input type="number" placeholder="Edad" value={mascota.edad} onChange={e => setMascota({ ...mascota, edad: e.target.value })} />
            <select value={mascota.tipo} onChange={e => setMascota({ ...mascota, tipo: e.target.value })}>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
            </select>
            <input type="datetime-local" value={fecha} onChange={e => setFecha(e.target.value)} />
            <button type="submit" classNAME="boton-agendar">Agendar Cita</button>
        </form>
    );
}

export default AgendarCita;
