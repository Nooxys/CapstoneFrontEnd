import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import photo from '../assets/compress-strong-man-training-gym-min-scaled.webp'
import { Link } from 'react-router-dom'
import athlete from '../assets/transparent-sports-fitness-exercise-workout-squats-man-and-woman-working-out-together-closely65fff7049969f3.83515924.png'
const Subscriptions = () => {
  return (
    <Container className="mb-5">
      <Row>
        <h1 className="text-center fw-bold my-5"> SUBSCRIPTIONS </h1>

        <hr />
        <Row className="justify-content-center justify-content-md-around my-4">
          <Col xs={10} md={6}>
            <h4 className="fw-bold mb-4 text-center text-md-start mt-lg-5  ">
              For Every Need
            </h4>
            <h2 className="fw-bold mb-4  text-center text-md-start">
              Subscriptions Carefully Designed To Help You Get The Best
            </h2>
            <p className="mb-5 opacity-75 ">
              We always look for the best solution for our customers to help
              them achieve their goals. Subscribe to Noctfit by choosing the
              package that best meets your needs!
            </p>
            <h4 className="fw-bold mb-4 text-center text-md-start mt-5 mt-xl-0">
              You Are Not Alone
            </h4>
            <p className="mb-5 opacity-75 ">
              If you need an expert to guide you step by step at every goal,
              check out our best personal trainers and choose the one
              that&apos;s right for you!
            </p>
            <Link to={'/trainers'}>
              <Button className="text-white rounded-0 fw-bold py-3 px-4 customButton ">
                CHECK PT <i className="bi bi-arrow-right"></i>
              </Button>
            </Link>
          </Col>
          <Col xs={10} md={5} className="d-none d-md-block mb-5">
            <img src={athlete} alt="athlete_celebrating" width={450} />
          </Col>
        </Row>
      </Row>
      <hr />
      <Row>
        <Col xs={12} xl={4}>
          <Card>
            <Card.Img src={photo} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white subscriptions">
              <Card.Title>Card title</Card.Title>
              <Card.Text>placeholder - placeholder</Card.Text>
              <Button
                className="
              mb-2 text-white rounded rounded-0 fw-bold"
              >
                DETAILS <i className="bi bi-arrow-right"></i>
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Subscriptions
