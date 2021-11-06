import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
import img from '../../../images/dp.png'

const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <div id="navBar" className='p-5'>
            <Navbar fixed="top" bg="dark" collapseOnSelect expand="lg">
                <Container fluid className="mx-lg-5">
                    <Navbar.Brand as={Link} to="/home"><h1 className="display-lg-4 font-weight-bold d-inline text-white">MARKAS BEEL </h1> <small className="text-white">RESORT</small> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="text-white navName" as={Link} to="/home">Home</Nav.Link>
                            <NavDropdown className="text-white navName" title="Our Villas" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={HashLink} to="/home#PRESIDENTIAL VILLA">Presidential Villa</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/home#SUPER LUXURY VILLA">Super Luxury Villa</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/home#LUXURY VILLA">Luxury Villa</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/home#LUXURY VILLA 2">Luxury Villa 2</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/home#DELUXE VILLA">Deluxe Villa</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/home#DELUXE VILLA 2">Deluxe Villa(without pool)</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="text-white navName" as={HashLink} to="/home#activities">Activities</Nav.Link>
                            {
                                user?.displayName && <Nav.Link className="text-white navName" as={Link} to="/myorders">My Orders</Nav.Link>
                            }
                            {
                                user?.displayName && <Nav.Link className="text-white navName" as={Link} to="/allorders">All Orders</Nav.Link>
                            }

                            {
                                user?.displayName && <Nav.Link className="text-white navName" as={Link} to="/addservices">Add Services</Nav.Link>
                            }
                            {
                                user?.displayName && <Navbar.Text id="userDisplayName" className="text-white bg-secondary rounded p-2 mx-lg-2 my-sm-2" >
                                    Hello <a style={{ textDecoration: 'none' }} className="text-warning" href="#user">{user.displayName} <img width="30px" height="25px" src={user.photoURL || img} style={{ position: 'relative' }} className="rounded-circle" alt="" /></a>
                                </Navbar.Text>
                            }

                            {
                                !user.displayName ? <Nav.Link className="text-white bg-warning navName" as={Link} to="/login">Login/sign up</Nav.Link> :
                                    <Button onClick={handleSignOut} variant="primary">Log out</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;