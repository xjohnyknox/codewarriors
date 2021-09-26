import React, { useEffect, useState, Fragment } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import '../../assets/css/card.css'

const CustomCard = (props) => {

    const [modulos, setModulos] = useState(props.modulos);

    let history = useHistory();

    return(
        <>
        {/* <h2 style={{textAlign:'left' }}>{props.title}</h2> */}
        <Row className="justify-content-center align-items-center">
            <Col key={`col-${props.title}`}>
                <Card
                    // bg='dark'
                    key={props.title}
                    text='white'
                    style={{ width: '25rem'}}
                    className="mb-2 text-center customCard"
                    >
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                        {modulos.map((element, idx) => (
                            <Button
                                key={idx}
                                variant="primary"
                                className="mt-2"
                                style={{width: '300px'}}
                                onClick={()=>{
                                    history.push(element.url);
                                }}
                            >
                                <FontAwesomeIcon icon={element.icon} size="1x" style={{color: "#ffffff"}}/>{' '}{element.name}
                            </Button>
                        ))}                        
                        </Card.Text>
                    </Card.Body>
                </Card>

            
            </Col>
        </Row>
        </>
    )
}

export default CustomCard;