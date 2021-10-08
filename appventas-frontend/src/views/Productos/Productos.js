import React, { useEffect, useState, Fragment } from 'react';
import NavbarApp from '../Navbar/Navbar';

//Importar los componentes de bootstrap
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

const Productos = () => {
    return(
        <>
            <NavbarApp />
            <center><h1>LISTAR, BUSCAR Y ACTUALIZAR PRODUCTOS</h1></center>
            <Container>
            <div>
                <h1 className="h3 mb-3 font-weight-normal">Productos</h1>
                <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>Id producto</th>
                            <th>Descripción</th>
                            <th>Valor Unitario</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Producto 1</td>
                            <td>$100.000</td>
                            <td>Disponible</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </Container> 
        </>
    )
}

export default Productos