import { Container, Row, Col, Alert } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/man-reglogin.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { login } from '../redux/actions'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialForm = {
    email: '',
    password: '',
  }
  const [form, setForm] = useState(initialForm)

  const handleChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    })
  }

  const loginErrors = useSelector((state) => state.authReducer.loginErrors)
  const accessToken = useSelector((state) => state.authReducer.accessToken)

  return (
    <Container>
      <div className="position-relative z-2  ">
        {accessToken !== '' && navigate('/')}
        <h1 className="text-center text-primary py-5 display-3 fw-bold mt-5">
          SIGN IN
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
        <Col xs={10} md={6} lg={4} className="formGrap p-5 mb-5">
          {loginErrors !== null && (
            <div className="text-primary mb-3">{loginErrors}</div>
          )}
          <Form
            className="py-2"
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(login(form))
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Noctfit@Noctfit.com"
                className="rounded-0"
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
                required
                placeholder="Password"
                className="rounded-0"
                value={form.password}
                onChange={(e) => {
                  handleChange(e, 'password')
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Row className="justify-content-center">
              <Col xs={3}>
                <Button
                  variant="primary"
                  type="submit"
                  className="text-white my-4 rounded-0 fw-bold"
                >
                  LOGIN
                </Button>
              </Col>
              <p className="text-center text-white pt-2">
                Don&apos;t have an account yet?
                <Link
                  className="text-primary link-offset-2 link-underline link-underline-opacity-0 ms-1 fw-bold"
                  to="/register"
                >
                  Register here!
                </Link>
              </p>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
