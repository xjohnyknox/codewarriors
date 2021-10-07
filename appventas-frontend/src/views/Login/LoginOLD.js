import React, { useEffect, useState, Fragment } from 'react';
// import React, { Component } from 'react'
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { login, userInfo, dominio } from '../UserFunctions';
// import jwt_decode from 'jwt-decode';
// import jwt from 'jsonwebtoken';

// import { withRouter } from 'react-router-dom'
import '../../assets/css/login.css'

// import { notificacion } from '../../api/apiRoutes';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Login = () => {

    const [state, setState] = useState({
        user: "",
        password: "",
        error: "",
        loading: false
    })

    // setState({...setState})
    // console.log(state);

    const onChangeHandler = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        alert('A name was submitted: ' + JSON.stringify(state));
        e.preventDefault();

        setState(prevState => ({
            ...prevState,
            loading: true
        }));

    }

    return (
        <>  
            <div id="logindiv">
                <Container>                
                    <Row className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                        <Col md="6" mt="5" className="mx-auto" >
                            <Form onSubmit={handleSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal white">CodeWarriors - Inicio sesión</h1>                                
                                <Form.Group className="mb-3" controlId="formBasicUser">
                                    <Form.Label className="white">Usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="user"
                                        placeholder="Ingrese su usuario"
                                        value={state.user}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="white">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={state.password}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                </Form.Group>
                                

                                {/* className="text-center" */}
                                <div>
                                <Button variant="primary" type="submit">
                                    Ingresar{' '}
                                    {state.loading ? <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        /> : null}
                                </Button>
                                </div>

                                
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )


}

export default Login;

