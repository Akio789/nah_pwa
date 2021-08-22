import React from 'react';
import { NavLink } from 'react-router-dom';
import logoNAH from '../../assets/export.png';
import styles from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className="navbar navbarBack navbar-expand-lg navbar-mainbg"  className={styles.navbarBack}>
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
            N
            <img src={logoNAH} alt="Logo Nah" height="60"></img>
            H
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home" exact>
                                <i className="fas fa-tachometer-alt">
                                </i> Home
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home" exact>
                                <i className="fas fa-tachometer-alt">
                                </i> Lecciones
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home" exact>
                                <i className="fas fa-tachometer-alt">
                                </i>Consulta
                            </NavLink>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar;