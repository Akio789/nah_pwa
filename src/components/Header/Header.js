import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoNAH from '../../assets/export.png';
import styles from './Header.module.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import LogoutButton from '../../components/Auth/LogoutButton'

const Header = ({ latestLesson }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">N A H</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href={'/lecciones/' + latestLesson}>Lecciones</Nav.Link>
                        <Nav.Link href="#link">Códices</Nav.Link>
                        <Nav.Link href="#link">Mapas</Nav.Link>
                        <Nav.Link href="#link">ML</Nav.Link>
                        <Nav.Link href="#link">Glorario</Nav.Link>
                    </Nav>
                    <Nav>
                        <LogoutButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;