import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/Header.css'
import Menu from './Menu';``
function Header() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>

        <Navbar.Brand href="/">Wine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item className='NavMenu' href="#action/3.1">


                <Menu />


              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Signup" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>


              <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;