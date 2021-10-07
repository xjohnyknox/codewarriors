import React, { useEffect, useState, Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import GoogleButton from './GoogleButton';
// import {GoogleLoginButton} from "react-social-login-buttons";
import '../../assets/css/login.css'


const Login = () => {

    // const google_client_id = "1032737344007-pjh91kjvfauebcadt1s0rooplvk8q66o.apps.googleusercontent.com";
    const google_client_id = process.env.REACT_APP_CLIENTID

    let history = useHistory();
    
    const authSucceeded = (response) => {
        // window.setTimeout(() => {            
        // },3000)
        // console.log(response);        
        // console.log(response.profileObj)
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        history.push('/home')
    }

    const authFailed = (response) => {
        alert("Ha ocurrido un error al autenticarse")
        console.log(response);
    }

    return (
        <>  
            <div id="logindiv">
                <Container>                
                    <Row className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                        <Col md="6" mt="5" className="mx-auto" >
                        <GoogleLogin
                            clientId={google_client_id}                            
                            onSuccess={authSucceeded}
                            onFailure={authFailed}
                            // cookiePolicy={'single_host_origin'}

                            render={(renderProps) => (

                                <center>
                                    {/* <form onSubmit={renderProps.onClick}> */}
                                    <GoogleButton
                                        block
                                        onClick={renderProps.onClick}
                                        // onClick={() => alert("Hello")}
                                    />
                                    {/* </form> */}
                                </center>

                                // <div>
                                // <GoogleLoginButton
                                //     block
                                //     onClick={renderProps.onClick}                                    
                                // />
                                // <span>Sign Up with Google</span>
                                // </div>

                                // <GoogleLoginButton iconSize="50px" size="100px">
                                //     <span style={{width: '10px'}}>Inicia sesión con Google</span>
                                // </GoogleLoginButton>



                            )}
                        />
                        {/* document.getElementById('googleButton') */}



                        {/* <GoogleLogin
                            clientId='1093095963919-nbs7i6rkpv1vl52hh0jg7vakt5526l1p.apps.googleusercontent.com'
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            render={(renderProps) => (
                            <GoogleLoginButton
                                block
                                onClick={renderProps.onClick}
                            />
                            )} */}

                                
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )


}

export default Login;

