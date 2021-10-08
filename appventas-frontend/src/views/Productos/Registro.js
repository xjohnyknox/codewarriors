import React, { useEffect, useState, Fragment } from 'react';
import NavbarApp from '../Navbar/Navbar';

//Importar los componentes de bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

//Importar estilos
import '../../assets/css/products.css'

const RegistroProductos = () => {

    const handleSubmit = e => {
        alert("Ha registrado un producto nuevo!")
    }

    return (
        <>
            <NavbarApp />
            <div className="fondo_productos">
            <center><h1>REGISTRO DE PRODUCTOS</h1></center>
            <Container>           


                <Row className="d-flex flex-column min-vh-100 align-items-center" style={{paddingTop: '50px'}}>
                    <Col md="6" mt="5" className="mx-auto" >
                        <Form onSubmit={handleSubmit} >
                            <h1 className="h3 mb-3 font-weight-normal">Nuevo Producto</h1>
                            
                            <Form.Group as={Row} className="mb-3" controlId="id_producto">
                                <Form.Label column sm="3">ID Producto</Form.Label>
                                <Col sm="10">
                                <Form.Control
                                    type="text"
                                    name="id_producto"
                                    placeholder=""
                                    //value={state.user}
                                    //onChange={onChangeHandler}
                                    required
                                />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="descripcion">
                                <Form.Label>Descripción</Form.Label>
                                <Col sm="10">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="descripcion"
                                    placeholder=""
                                    //value={state.user}
                                    //onChange={onChangeHandler}
                                    required
                                
                                />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="valor">
                                <Form.Label column sm="3">Valor Unitario</Form.Label>
                                <Col sm="10">
                                <Form.Control
                                    type="text"
                                    name="valor"
                                    placeholder="$"
                                    //value={state.user}
                                    //onChange={onChangeHandler}
                                    required
                                />
                                </Col>
                            </Form.Group>
                            
                            <Col sm="10">
                            <FloatingLabel controlId="floatingSelect" label="Seleccione un estado">                               
                                <Form.Select aria-label="Seleccione el estado del producto">
                                    <option value="1">Disponible</option>
                                    <option value="2">No Disponible</option>
                                </Form.Select>
                            </FloatingLabel>
                            </Col>
                            
                            <div className="text-center mt-5">
                                <Button variant="success" type="submit">
                                    Guardar
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

export default RegistroProductos