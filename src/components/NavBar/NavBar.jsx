import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { NavLink } from "react-router-dom";
import logo from "./assets/informatica-ar21.png";
/* React Boostrap */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* Mi css */
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
            <Navbar.Brand href="/">
                    <img
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Sobre Nosotros</Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink to='/category/celulares' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/category/tablets' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to='/category/notebooks' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;