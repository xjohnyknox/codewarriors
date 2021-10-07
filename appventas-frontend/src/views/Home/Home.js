import React, { useEffect, useState, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import NavbarApp from '../Navbar/Navbar';
import CustomCard from './CustomCard';

import BackgroundVideo from '../../assets/video/office.mp4'
import '../../assets/css/home.css'

import {
    faList,
    faPencilAlt,
    faShoppingCart,
    faFileInvoiceDollar,
    faUserCog,
    faStore,
    faProjectDiagram,
    faSearchDollar,
    faBookReader,
    faDollarSign
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    const productos = [
        {
            name: 'Registro de productos',
            description: '',
            icon: faList,
            url: '/productos/registro'
        },{
            name: 'Listar, buscar y actualizar productos',
            description: '',
            icon: faPencilAlt,
            url: '/productos'
        }       
    ]
    const ventas = [
        {
            name: 'Registro de ventas',
            description: '',
            icon: faShoppingCart,
            url: '/ventas/registro'
        },{
            name: 'Listar, buscar y actualizar ventas',
            description: '',
            icon: faFileInvoiceDollar,
            url: '/ventas'
        }        
    ]
    const usuarios = [
        {
            name: 'Gestión de usuarios',
            description: '',
            icon: faUserCog,
            url: '/usuarios'
        }
    ]

    const user = JSON.parse(localStorage.getItem('user'));
    // https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5

    return(
        <>
            <video autoPlay muted loop id="myVideo">
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
            <NavbarApp />
            {user ? <h1 className="title1 mt-4">Bienvenido, {user.name}</h1>:null}

            <Container className="d-flex flex-column min-vh-100 justify-content-center align-items-center">                
                <CustomCard title='Módulo administrador de productos' modulos={productos} />
                <CustomCard title='Módulo administrador de ventas' modulos={ventas} />
                <CustomCard title='Gestión de usuarios' modulos={usuarios} />                    
            </Container>            

        </>
    )
}

export default Home;