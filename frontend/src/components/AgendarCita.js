import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function AgendarCita() {
    const [mascota, setMascota] = useState({ nombre: '', raza: '', edad: '', tipo: 'Perro' });
    const [fecha, setFecha] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            await axios.post('http://localhost:8000/api/citas/', { mascota, fecha });
            alert("Cita agendada");
        }
        setValidated(true);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Agendar Cita</h2>
            <form onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate>
                <div className="row">
                    <div className="col-md-6 mb-3 text-start" >
                        <label htmlFor="nombre" className="form-label">Nombre de la Mascota</label>
                        <input
                            type="text"
                            id="nombre"
                            className="form-control"
                            placeholder="Nombre de la Mascota"
                            value={mascota.nombre}
                            onChange={e => setMascota({ ...mascota, nombre: e.target.value })}
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor ingrese el nombre de la mascota.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 text-start">
                        <label htmlFor="raza" className="form-label">Raza</label>
                        <input
                            type="text"
                            id="raza"
                            className="form-control"
                            placeholder="Raza"
                            value={mascota.raza}
                            onChange={e => setMascota({ ...mascota, raza: e.target.value })}
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor ingrese la raza de la mascota.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 text-start">
                        <label htmlFor="edad" className="form-label">Edad</label>
                        <input
                            type="number"
                            id="edad"
                            className="form-control"
                            placeholder="Edad"
                            value={mascota.edad}
                            onChange={e => setMascota({ ...mascota, edad: e.target.value })}
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor ingrese la edad de la mascota.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 text-start">
                        <label htmlFor="tipo" className="form-label">Tipo</label>
                        <select
                            id="tipo"
                            className="form-select"
                            value={mascota.tipo}
                            onChange={e => setMascota({ ...mascota, tipo: e.target.value })}
                            required
                        >
                            <option value="Perro">Perro</option>
                            <option value="Gato">Gato</option>
                        </select>
                        <div className="invalid-feedback">
                            Por favor seleccione el tipo de mascota.
                        </div>
                    </div>
                </div>

                <div className="mb-3 text-start">
                    <label htmlFor="fecha" className="form-label">Fecha y Hora</label>
                    <input
                        type="datetime-local"
                        id="fecha"
                        className="form-control"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Por favor seleccione una fecha y hora.
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Agendar Cita</button>
            </form>
        </div>
    );
}

export default AgendarCita;
