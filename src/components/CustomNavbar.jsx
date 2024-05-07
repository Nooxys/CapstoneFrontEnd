import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/NOCTFITSTATIC.png'
import { Link, useLocation } from 'react-router-dom'

function CustomNavbar() {
  const location = useLocation().pathname
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary p-0"
      data-bs-theme="dark"
      bg="dark"
    >
      <Container fluid className="navBack">
        <Link
          className={
            location === '/'
              ? 'nav-link active d-lg-none '
              : 'nav-link d-lg-none '
          }
          to="/"
        >
          <img src={logo} width={200} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto d-flex align-items-md-center ">
            <Link
              className={location === '/' ? 'nav-link active' : 'nav-link'}
              to="/"
            >
              HOME
            </Link>
            <Link
              className={
                location === '/subscriptions' ? 'nav-link active ' : 'nav-link'
              }
              to="/"
            >
              SUBSCRIPTIONS
            </Link>
            <Link
              className={
                location === '/personalTrainers'
                  ? 'nav-link active '
                  : 'nav-link'
              }
              to="/"
            >
              TRAINERS
            </Link>
            <Link
              className={
                location === '/'
                  ? 'nav-link active d-none d-lg-block '
                  : 'nav-link d-none d-lg-block '
              }
              to="/"
            >
              <img src={logo} width={300} alt="logo" />
            </Link>
            <Link className="nav-link" to="/">
              ABOUT US
            </Link>
            <Link className="nav-link" to="/">
              CONTACTS
            </Link>
            <Link
              className={location === '/login' ? 'nav-link active' : 'nav-link'}
              to="/login"
            >
              <i className="bi bi-person-up"></i> LOGIN
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
