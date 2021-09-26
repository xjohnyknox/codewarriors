import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { GoogleLogout } from 'react-google-login';
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTh,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const NavbarApp = () => {

    let history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/home"><FontAwesomeIcon icon={faTh} size="1x" style={{color: "#ffffff"}}/> CodeWarriors - App Ventas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/productos/registro">Registro</NavDropdown.Item>
                    <NavDropdown.Item href="/productos">Listar, buscar y actualizar</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Ventas" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/ventas/registro">Registro</NavDropdown.Item>
                    <NavDropdown.Item href="/ventas">Listar, buscar y actualizar</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/usuarios">Gestión de usuarios</Nav.Link>
                </Nav>
                <Nav>
                {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                {/* <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link> */}
                
                {user ?
                <GoogleLogout
                    clientId = {process.env.REACT_APP_CLIENTID}
                    onLogoutSuccess={()=>{
                        localStorage.clear();
                        history.push('/');
                        alert("Ha cerrado sesion");
                    }}
                    render={renderProps => (
                        // <button className="btn btn-warning" onClick={renderProps.onClick} disabled={renderProps.disabled}></button>
                        <Button
                            variant="danger"
                            type="button"
                            onClick={
                                // renderProps.onClick                            
                                () => {                                    
                                    let c = window.confirm("Realmente desea salir ?")
                                    if(c) {
                                        renderProps.onClick()
                                    }
                                }
                            }
                        >
                            Cerrar sesión{' '}
                            <FontAwesomeIcon icon={faSignOutAlt} size="1x" style={{color: "#ffffff"}}/>
                        </Button>
                    )}
                    >
                </GoogleLogout>:null}

                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavbarApp;