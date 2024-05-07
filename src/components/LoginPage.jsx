import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={6} lg={4} className="formGrap rounded-2  p-3 ">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Row className="justify-content-center">
              <Col xs={3}>
                <Button variant="primary" type="submit" className="text-white">
                  LOGIN
                </Button>
              </Col>
              <p className="text-center text-white pt-2">
                Dont have an account yet?
                <Link
                  className="text-primary link-offset-2 link-underline link-underline-opacity-0 ms-1"
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
