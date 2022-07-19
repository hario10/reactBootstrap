import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import '../index.css';


const Navigasi = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigasi;