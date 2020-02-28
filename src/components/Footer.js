import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import logo from '../assets/images/logo.png'


function Footer() {
    return(
        
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 d-flex justify-content-center" md={12}>
                        <p>Lilliana Ramos</p>
                    {/* <img src={logo}/>                     */}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;