import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={6} lg={4} className="formGrap p-5 mb-5 ">
          <Form className="py-2 ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white fw-bold">
                Old Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="rounded-0"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white fw-bold">
                New Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="rounded-0 "
              />
              <Row className="justify-content-center">
                <Button
                  variant="primary"
                  className="text-white mt-4 rounded-0 fw-bold w-50 "
                >
                  UPDATE
                </Button>

                <p className="text-center text-white pt-2 mb-0 mt-3">
                  Go back to
                  <Link
                    className="text-primary link-offset-2 link-underline link-underline-opacity-0 ms-1 fw-bold "
                    to="/profile"
                  >
                    My Profile
                  </Link>
                </p>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ChangePassword
