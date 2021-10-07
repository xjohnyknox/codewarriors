import React, { useEffect, useState, Fragment } from 'react';
import NavbarApp from '../Navbar/Navbar';
import Container from 'react-bootstrap/Container'
//Importo las tablas de bootstrap
import Table from 'react-bootstrap/Table'

const Productos = () => {
    return(
        <>
            <NavbarApp />
            <center><h1>LISTAR, BUSCAR Y ACTUALIZAR PRODUCTOS</h1></center>

            <div>
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
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </>
    )
}

export default Productos