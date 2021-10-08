import React, { useEffect, useState, Fragment } from 'react';
import NavbarApp from '../Navbar/Navbar';

const Ventas = () => {
    return (
        <>
            <NavbarApp />
            <center><h1>LISTAR, BUSCAR Y ACTUALIZAR VENTAS</h1></center>

            <center>
                <h1>Reporte de ventas</h1>
                <table border="1">
                    <tr>
                        <th>Fecha</th>
                        <th>Factura</th>
                        <th>ID Vendedor</th>
                        <th>ID Cliente</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Valor</th>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                    <tr>
                        <td> <input type="date" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="number" size="10" /> </td>
                        <td> <input type="text" size="20" /> </td>
                        <td> <input type="number" size="6" /> </td>
                        <td> <input type="number" size="10" /> </td>
                    </tr>
                </table>
                <input type="submit" value="Guardar" />                
                <input type="submit" value="Generar Reporte Semanal" />
                <input type="submit" value="Generar Reporte Mensual" />
                <input type="submit" value="Generar Reporte Trimestral" />
                <input type="submit" value="Generar Reporte Semestral" />
                <input type="submit" value="Generar Reporte Anual" />
                <input type="submit" value="Generar Reporte por Vendedor" />
                <input type="submit" value="Generar Reporte por Cliente" />
                <input type="submit" value="Generar grafica de ventas" />
                <input type="submit" value="Generar grafica proyeccion vs ventas" />
            </center>

            <center>
                <div>
                    <form>
                        <h1>Consultas en Registro de Ventas</h1>
                        <p>
                            Factura de venta: <input type="text" placeholder="Ingrese el numero"/> <input type="submit" value="Ir" />
                        </p>
                        <p>
                            ID Cliente: <input type="number" placeholder="Ingrese el ID"/> <input type="submit" value="Ir" />
                        </p>
                        <p>
                            Nombre cliente: <input type="text" placeholder="Ingrese el Nombre"/> <input type ="submit" value="Ir"/>
                        </p>
                    </form>
                </div>
            </center>                                               

        </>
    )
}
export default Ventas