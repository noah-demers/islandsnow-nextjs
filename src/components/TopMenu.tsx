'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  Facebook,
  TwitterX,
  Pinterest,
  Instagram,
  HouseFill,
  Search,
  PersonFill,
  Cart,
} from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="sm">
    <Container>
      {/* Left-side social icons */}
      <Nav className="me-auto">
        <Nav.Link href="#"><Facebook className="p-1" /></Nav.Link>
        <Nav.Link href="#"><TwitterX className="p-1" /></Nav.Link>
        <Nav.Link href="#"><Pinterest className="p-1" /></Nav.Link>
        <Nav.Link href="#"><Instagram className="p-1" /></Nav.Link>
      </Nav>

      {/* Right-side utility icons */}
      <Nav>
        <Nav.Link href="#"><HouseFill className="p-1" /></Nav.Link>
        <Nav.Link href="#"><Search className="p-1" /></Nav.Link>
        <Nav.Link href="#"><PersonFill className="p-1" /></Nav.Link>
        <NavDropdown
          align="end"
          title={
            <span>
              <Cart className="p-1" /> 0
            </span>
          }
          id="cart-dropdown"
        >
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
