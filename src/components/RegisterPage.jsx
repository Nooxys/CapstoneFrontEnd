import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import logo from '../assets/man-reglogin.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { REGISTER_ERRORS, REGISTER_OK, register } from '../redux/actions'

const RegisterPage = () => {
  const dispatch = useDispatch()

  const registerErrors = useSelector(
    (state) => state.authReducer.registerErrors
  )

  const registerOk = useSelector((state) => state.authReducer.registerOk)

  const initialForm = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    birthDate: '',
  }

  const [form, setForm] = useState(initialForm)

  const handleChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    })
  }

  useEffect(() => {
    dispatch({
      type: REGISTER_OK,
      payload: false,
    })
    dispatch({
      type: REGISTER_ERRORS,
      payload: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <div className="position-relative z-2   ">
        <h1 className="text-center text-primary py-5 display-3 fw-bold mt-5">
          SIGN UP
        </h1>
        <img
          src={logo}
          width={100}
          alt="logo"
          className="position-absolute top-0 start-50 translate-middle-x z-n1"
        />
      </div>
      <div>
        <hr className=" z-n1 position-relative z-1 " />
      </div>

      <Row className="justify-content-center my-5">
        <Col xs={10} md={6} lg={4} className="formGrap p-5 mb-5 ">
          {registerOk === false && registerErrors !== null && (
            <div className="text-primary mb-3">{registerErrors}</div>
          )}
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(register(form))
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                className="rounded-0"
                required
                value={form.name}
                onChange={(e) => {
                  handleChange(e, 'name')
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold ">Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Surname"
                className="rounded-0"
                required
                value={form.surname}
                onChange={(e) => {
                  handleChange(e, 'surname')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Username"
                className="rounded-0"
                required
                value={form.username}
                onChange={(e) => {
                  handleChange(e, 'username')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label className="text-white fw-bold ">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Noctfit@Noctfit.com"
                className="rounded-0"
                required
                value={form.email}
                onChange={(e) => {
                  handleChange(e, 'email')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="rounded-0"
                required
                value={form.password}
                onChange={(e) => {
                  handleChange(e, 'password')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Birth Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Your Birth Date "
                className="rounded-0"
                required
                value={form.birthDate}
                onChange={(e) => {
                  handleChange(e, 'birthDate')
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Row className="justify-content-center">
              <Col xs={4} md={5} lg={6} xl={4}>
                <Button
                  variant="primary"
                  type="submit"
                  className="text-white my-4 rounded-0 fw-bold "
                >
                  REGISTER
                </Button>
              </Col>
              {registerOk && (
                <div className="mb-3 text-center text-white">
                  Registration complete!
                  <Link className="text-decoration-none" to="/login">
                    <span className="text-primary fw-bold hoverable ms-2">
                      Login
                    </span>
                  </Link>
                </div>
              )}
              {!registerOk && (
                <p className="text-center text-white pt-2">
                  Already have an account?
                  <Link
                    className="text-primary link-offset-2 link-underline link-underline-opacity-0 ms-1 fw-bold"
                    to="/login"
                  >
                    Login here!
                  </Link>
                </p>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage
