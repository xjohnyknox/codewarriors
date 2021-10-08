import React, { useEffect, useState, Fragment } from 'react';
import NavbarApp from '../Navbar/Navbar';

const RegistroVentas = () => {
    return (
        <>
            <NavbarApp />
            <center><h1>REGISTRO DE VENTAS</h1></center>

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
                <input type="submit" value="Guardar" />
                <input type="submit" value="Generar Factura" />
                <input type="submit" value="Ver Factura" />
                <input type="submit" value="Corregir Factura" />
                <input type="submit" value="Imprimir Factura" />
            </center>


        </>
    )
}

export default RegistroVentas