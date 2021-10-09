import React, { useEffect, useState, Fragment , setShow } from 'react';
import NavbarApp from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import '../../assets/css/sales.css'


const Ventas = () => {
    return (
        <>
            <NavbarApp />

            <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>LISTAR, BUSCAR Y ACTUALIZAR VENTAS</Accordion.Header>
                <Accordion.Body>
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

                    <ButtonGroup aria-label="Opciones_Botones">
                        <Button variant="primary">Guardar</Button>

                        <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Generar Reporte (Periodo)
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Semanal</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Mensual</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Trimestral</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Semestral</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Anual</Dropdown.Item>

                        </Dropdown.Menu>
                        </Dropdown>


                        <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Generar Gráfica
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Generar gráfica de ventas</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Generar gráfica proyección vs ventas</Dropdown.Item>

                        </Dropdown.Menu>
                        </Dropdown>




                        <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Generar Reporte
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Generar Reporte por Vendedor</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Generar Reporte por Cliente</Dropdown.Item>

                        </Dropdown.Menu>
                        </Dropdown>

                    </ButtonGroup>

                </center>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Consultas en Registro de Ventas</Accordion.Header>
                <Accordion.Body>
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
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>







                                                         

        </>
    )
}
export default Ventas