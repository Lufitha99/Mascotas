import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                email,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error en el login:', error);
        }
    };

    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 col-lg-4'>
                    <h2 className='text-center mb-4'>Iniciar Sesión</h2>
                    <form className='p-4 border rounded shadow-sm' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input
                                id='email'
                                className='form-control'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
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
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <button className='btn btn-primary w-100' type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
