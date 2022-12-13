import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar expand="md" color='dark' >
        <NavbarBrand href="/" className="text-white col-md-4">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} className="bg-white" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto py-2" navbar>
            <NavItem>
              <NavLink href="/" className="text-white mx-md-3">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"className="text-white mx-md-3">
                Hotel
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"className="text-white mx-md-3">
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"className="text-white mx-md-3">
                Special Deals
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="py-2" navbar>
          <NavItem>
              <NavLink href="/"className="text-white">
                Login
              </NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  )
}

export default CustomNavbar;