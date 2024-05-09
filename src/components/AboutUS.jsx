import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import athlete from '../assets/athlete_celebrating.png'
import photo1 from '../assets/compress-strong-man-training-gym-min-scaled.webp'
import photo2 from '../assets/bft-2.webp'
const AboutUs = () => {
  return (
    <Container className="mb-5">
      <Row>
        <h1 className="text-center fw-bold mb-5"> ABOUT US </h1>
        <hr />
      </Row>

      <Row className="justify-content-center justify-content-md-around my-4">
        <Col xs={10} md={6}>
          <h4 className="fw-bold mb-4 text-center text-md-start mt-5 mt-xl-0">
            NOCTFIT
          </h4>
          <h2 className="fw-bold mb-4  text-center text-md-start">
            We Will Help You Achieve Your Goals
          </h2>
          <p className="mb-5 opacity-75 ">
            At Noctfit, thanks to our expert personal trainers you will be able
            to achieve goals never achieved before, with personalized fitness
            routes and nutritions plans. Our customers confirm it!
          </p>

          <Button className="text-white rounded-0 fw-bold py-3 px-4 customButton ">
            CONTACT US <i className="bi bi-arrow-right"></i>
          </Button>
        </Col>
        <Col xs={10} md={5} className="d-none d-md-block mb-5">
          <img src={athlete} alt="athlete_celebrating" width={350} />
        </Col>
      </Row>
      <hr className="pt-5" />
      <Row className="justify-content-center  my-5 g-0">
        <Col xs={12} xl={6}>
          <Card>
            <Card.Img src={photo1} className="rounded-0 h-100" />
          </Card>
        </Col>
        <Col xs={12} xl={6}>
          <Card className=" h-100 rounded-0">
            <Card.Text>
              <p className="text-center  mt-5 pt-5 pt-lg-2">
                <i className="bi bi-clock-history text-primary fw-bold display-1  "></i>
              </p>
              <h2 className="text-center fw-bold pt-4  pt-xl-0">Our History</h2>
              <p className="text-center px-5 pt-4 pb-2 pb-lg-5 pb-xl-0 ">
                Noctfit was born in 1994 as a small gym that brought together
                all the fitness lovers from the surrounding areas. Today, it is
                a home both for all those who intend to start a new path and for
                those who are already experienced and want the best for
                themselves.
              </p>
            </Card.Text>
          </Card>
        </Col>

        <Col xs={12} xl={6}>
          <Card className=" h-100 rounded-0">
            <Card.Text>
              <p className="text-center  mt-5 pt-5 pt-lg-2">
                <i className="bi bi-calendar-check text-primary fw-bold display-1  "></i>
              </p>
              <h2 className="text-center fw-bold pt-4  pt-xl-0">
                Opening Hours
              </h2>
              <p className="text-center px-5 pt-4 pb-2 pb-lg-5 pb-xl-0 opacity-75">
                <span className="d-block">
                  {' '}
                  Monday to Friday: 8:00 am - 23.00 pm
                </span>
                <span className="d-block">Saturday: 8.00 am - 2.00 am</span>
                <span className="d-block">Sunday: 9.00 am - 13.00 pm</span>
              </p>
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} xl={6}>
          <Card>
            <Card.Img src={photo2} className="rounded-0 " />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default AboutUs
