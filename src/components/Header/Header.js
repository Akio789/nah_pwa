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
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;