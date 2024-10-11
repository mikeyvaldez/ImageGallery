import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header  = () => {
    return (
        <Navbar bg="dark" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
        </Container>
      </Navbar>
    )
};

export default Header;






