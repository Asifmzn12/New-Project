import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
function Header() {
    const [activeLink, setActiveLink] = useState("/"); 
    
    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary py-2 py-md-1 text-capitalize navlinks bg-color"
            fixed="top"
        >
            <Container className="py-1 text-white">
                <Navbar.Brand to="/">
                    <img src="logo.png" className="img-fluid"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link to="/">
                            <span
                                className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                                onClick={() => setActiveLink("/")}
                            >
                                Home
                            </span>{" "}
                        </Nav.Link>
                        <Nav.Link to="/about">
                            <span
                                className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
                                onClick={() => setActiveLink("/about")}
                            >
                                About Us
                            </span>{" "}
                        </Nav.Link>
                        <Nav.Link to="/membership">
                            <span
                                className={`nav-link ${activeLink === "/membership" ? "active" : ""}`}
                                onClick={() => setActiveLink("/membership")}
                            >
                                Membership
                            </span>{" "}
                        </Nav.Link>
                        <Nav.Link to="/ancestor">
                            <span
                                className={`nav-link ${activeLink === "/ancestor" ? "active" : ""}`}
                                onClick={() => setActiveLink("/ancestor")}
                            >
                                Ancestor
                            </span>{" "}
                        </Nav.Link>
                        <Nav.Link to="/officers">
                            <span
                                className={`nav-link ${activeLink === "/officers" ? "active" : ""}`}
                                onClick={() => setActiveLink("/officers")}
                            >
                                Officers
                            </span>{" "}
                        </Nav.Link>
                        <Nav.Link to="/contactus">
                            <span
                                className={`nav-link ${activeLink === "/contactus" ? "active" : ""}`}
                                onClick={() => setActiveLink("/contactus")}
                            >
                                Contact Us
                            </span>{" "}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
