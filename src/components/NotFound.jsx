import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={6} lg={4} className="">
          <div className="position position-relative ">
            <h1 className="text-center mb-5">ERROR!</h1>
          </div>
          <p className="text-center fs-2 mb-5">
            the page you are trying to access does not exist!
          </p>
          <p className="text-center fs-4">
            {' '}
            Please return to the{' '}
            <Link
              className="link-offset-2 link-underline link-underline-opacity-0 ms-1"
              to="/"
            >
              <span className="text-primary fw-bold">Homepage</span>!
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}
export default NotFound
