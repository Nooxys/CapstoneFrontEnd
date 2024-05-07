import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={6} lg={4} className="formGrap rounded-2  p-3 ">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Surname</Form.Label>
              <Form.Control type="text" placeholder="Your Surname" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Username</Form.Label>
              <Form.Control type="text" placeholder="Your Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control type="password" placeholder="Your Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Birth Date</Form.Label>
              <Form.Control type="date" placeholder="Your Birth Date " />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Row className="justify-content-center">
              <Col xs={3}>
                <Button variant="primary" type="submit" className="text-white">
                  REGISTER
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage
