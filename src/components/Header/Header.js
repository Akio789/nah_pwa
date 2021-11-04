import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoNAH from '../../assets/export.png';
import styles from './Header.module.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import LogoutButton from '../../components/Auth/LogoutButton'
import { getLatestLesson } from '../../api/latestLesson';

const Header = () => {
    const [latestLesson, setLatestLesson] = useState(1);
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user) {
            getLatestLesson(user.email)
                .then(({ latest_lesson }) => setLatestLesson(latest_lesson))
        }
    }, [user])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">N A H</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href={'/lecciones/' + latestLesson}>Lecciones</Nav.Link>
                        <Nav.Link href="/dictionary">Diccionario</Nav.Link>
                        <Nav.Link href="/about-us">Conoce al equipo</Nav.Link>
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