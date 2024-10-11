import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header  = ({ title }) => {
    return (
        <Navbar bg="dark" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;
