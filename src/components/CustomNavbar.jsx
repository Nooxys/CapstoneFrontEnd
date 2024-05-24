import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/NOCTFIT_final.png'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CustomNavbar() {
  const location = useLocation().pathname

  const token = useSelector((state) => state.authReducer.accessToken)
  const role = useSelector((state) => state.userReducer.role)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary p-0"
      data-bs-theme="dark"
      bg="dark"
    >
      <Container
        fluid
        className="navBack p-0 border-3 border-bottom border-primary "
      >
        <Link
          className={
            location === '/'
              ? 'nav-link active d-lg-none'
              : 'nav-link d-lg-none '
          }
          to="/"
        >
          <img src={logo} width={200} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto d-flex align-items-lg-center ps-3 ps-lg-0 ">
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
              to="/subscriptions"
            >
              SUBSCRIPTIONS
            </Link>
            <Link
              className={
                location === '/trainers' ? 'nav-link active ' : 'nav-link'
              }
              to="/trainers"
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
            <Link
              className={
                location === '/about' ? 'nav-link active ' : 'nav-link'
              }
              to="/about"
            >
              ABOUT US
            </Link>
            <Link
              className={
                location === '/contacts' ? 'nav-link active ' : 'nav-link'
              }
              to="/contacts"
            >
              CONTACT
            </Link>
            <Link
              className={
                location === '/login' ||
                location === '/register' ||
                location === '/profile'
                  ? 'nav-link active '
                  : 'nav-link '
              }
              to={token !== '' ? '/profile' : '/login'}
            >
              <i className="bi bi-person-up me-1"></i>
              {token !== '' ? 'PROFILE' : 'LOGIN'}
            </Link>
            {role === 'ADMIN' && (
              <Link
                className={
                  location === '/dashboard' ? 'nav-link active' : 'nav-link '
                }
              >
                | ADMIN PAGE
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
