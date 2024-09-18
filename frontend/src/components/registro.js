// src/components/Registro.js
import React, { useState } from 'react';
import axios from 'axios';

function Registro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password1: password,  // Cambiar nombre a password1 para el backend
            password2: password   // Cambiar nombre a password2 para el backend
        };

        try {
            const response = await axios.post('http://localhost:8000/auth/register/', data);
            console.log('Usuario registrado exitosamente', response);
        } catch (error) {
            console.error('Error en el registro:', error.response ? error.response.data : error.message);
            setError('Error al registrar el usuario'); // Muestra el mensaje de error en la UI
        }
    };

    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 col-lg-4'>
                    <h1 className='text-center mb-4'>Registro de Usuario</h1>
                    <form className='p-4 border rounded shadow-sm' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>Nombre de Usuario</label>
                            <input
                                id='username'
                                className='form-control'
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input
                                id='email'
                                className='form-control'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>Contraseña</label>
                            <input
                                id='password'
                                className='form-control'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className='btn btn-primary w-100' type="submit">Registrar</button>
                        {error && <p className='text-danger mt-3'>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registro;