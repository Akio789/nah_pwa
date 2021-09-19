import React from 'react';
import { NavLink } from 'react-router-dom';
import logoNAH from '../../assets/export.png';
import styles from './Header.module.css';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const Header = () => {
    return(
        // <nav className="navbar navbarBack navbar-expand-lg navbar-mainbg"  className={styles.navbarBack}>
        //     <NavLink className="navbar-brand navbar-logo" to="/" exact>
        //     N
        //     <img src={logoNAH} alt="Logo Nah" height="60"></img>
        //     H
        //     </NavLink>
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-toggle="collapse">
        //         <i className="fas fa-bars text-white"></i>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav ml-auto">
        //                 <div className="hori-selector">
        //                     <div className="left"></div>
        //                     <div className="right"></div>
        //                 </div>
        //                 <li className="nav-item active">
        //                     <NavLink className="nav-link" to="/home" exact>
        //                         <i className="fas fa-tachometer-alt">
        //                         </i> Home
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <NavLink className="nav-link" to="/home" exact>
        //                         <i className="fas fa-tachometer-alt">
        //                         </i> Lecciones
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item active">
        //                     <NavLink className="nav-link" to="/home" exact>
        //                         <i className="fas fa-tachometer-alt">
        //                         </i>Consulta
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //     </div>
        // </nav>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">N A H</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Lecciones</Nav.Link>
                    <Nav.Link href="#link">Códices</Nav.Link>
                    <Nav.Link href="#link">Mapas</Nav.Link>
                    <Nav.Link href="#link">ML</Nav.Link>
                    <Nav.Link href="#link">Glorario</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;