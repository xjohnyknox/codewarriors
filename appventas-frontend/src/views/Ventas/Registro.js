import React, { useEffect, useState, Fragment } from 'react';
import NavbarApp from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../../assets/css/sales.css'

const RegistroVentas = () => {
    return (
        <>
            <NavbarApp />
            <center><h1>REGISTRO DE VENTAS</h1></center>
            <Breadcrumb class="breadcrumb">
            <Breadcrumb.Item href="/home">Principal</Breadcrumb.Item>
            <Breadcrumb.Item>Ventas</Breadcrumb.Item>
            <Breadcrumb.Item active>Registro de Ventas</Breadcrumb.Item>
            </Breadcrumb>

            <center>                
                <table border="1">
                    <tr>
                        <th>Fecha</th>
                        <th>IDVendedor</th>
                        <th>ID Cliente</th>
                        <th>Cantidad Unidades</th>
                        <th>Referencia</th>
                        <th>Valor Unitario</th>
                        <th>Valor Total</th>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="20" /> </td>
                    </tr>
                </table>
                <ButtonGroup aria-label="Opciones_Botones">
                    <Button variant="primary">Guardar</Button>
                    <Button variant="primary">Generar Factura</Button>
                    <Button variant="primary">Ver Factura</Button>
                    <Button variant="primary">Corregir Factura</Button>
                    <Button variant="primary">Imprimir Factura</Button>
                </ButtonGroup>
                
            </center>


        </>
    )
    


}

export default RegistroVentas