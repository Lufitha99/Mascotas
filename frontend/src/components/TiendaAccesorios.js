import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TiendaAccesorios() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/productos/')
            .then(response => {
                setProductos(response.data);
            })
            .catch(error => {
                console.error('Error al obtener productos:', error);
            });
    }, []);

    return (
        <div>
            <h2>Tienda de Accesorios</h2>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <strong>{producto.nombre}</strong>: {producto.descripcion} - ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TiendaAccesorios;
