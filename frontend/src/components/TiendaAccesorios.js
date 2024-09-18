import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function TiendaAccesorios() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Simular productos para demostración
        const productosSimulados = Array.from({ length: 10 }, (_, index) => ({
            id: index + 1,
            nombre: `Accesorio ${index + 1}`,
            descripcion: `Descripción del accesorio ${index + 1}`,
            precio: (Math.random() * 100).toFixed(2)
        }));

        // Establecer productos simulados
        setProductos(productosSimulados);
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tienda de Accesorios</h2>
            <div className="row">
                {productos.map((producto) => (
                    <div className="col-md-4 mb-4" key={producto.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p className="card-text"><strong>${producto.precio}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TiendaAccesorios;