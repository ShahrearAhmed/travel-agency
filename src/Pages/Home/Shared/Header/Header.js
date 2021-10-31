import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home"><h4>Lotif TourX</h4></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/offering">Offer</Nav.Link>
                        <Nav.Link as={HashLink} to="/addService">Add Booking</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageServices">Manage All Orders</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Log Out </Button> :
                            <Nav.Link as={HashLink} to="/login"><h5>Log In</h5></Nav.Link>}
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;