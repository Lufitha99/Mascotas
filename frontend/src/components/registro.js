// src/components/Registro.js
import React, { useState } from 'react';
import axios from 'axios';

function Registro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        const data = {
            username: 'andres',
            email: 'ragnarokman1995@gmail.com',
            password1: 'yourpassword',
            password2: 'confirmpassw'
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
        <div>
            <h1>Registro de Usuario</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre de Usuario:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Registrar</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Registro;