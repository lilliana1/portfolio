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
                        
                            <a className="icon" href="https://www.linkedin.com/in/lillianaramos/" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </a>

                            <a className="icon" href="https://github.com/lilliana1" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github fa-2x"></i>
                            </a>
                            <a className="icon" href="mailto:lilliana.cramos@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-envelope-open-text fa-2x"></i>
                            </a>
                        
                        {/* <p>
                            Lilliana Ramos 2020 <i class="far fa-copyright fa-xs"></i> 
                        </p> */}
                    {/* <img src={logo}/>                     */}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;