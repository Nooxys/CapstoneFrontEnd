import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import photo1 from '../assets/compress-strong-man-training-gym-min-scaled.webp'
import photo2 from '../assets/reunion.webp'
import { Link } from 'react-router-dom'
import baffo from '../assets/baffo.svg'
import { useEffect } from 'react'
import couple from '../assets/about_us.png'
import redCircle from '../assets/red-circle.svg'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="mb-5">
      <div className="position-relative z-3 d-flex justify-content-center my-4 text-white">
        <img
          src={baffo}
          alt="baffo"
          className="position-absolute mt-2"
          width={400}
        />
        <h1 className="fw-bold   mb-4 mt-xl-0 z-2 position-relative pt-3">
          ABOUT US
        </h1>
      </div>
      <hr />
      <Row className="justify-content-center justify-content-md-around  rowAboutUs ">
        <Col xs={10} lg={6}>
          <h4 className="fw-bold mb-4 text-center text-md-start mt-lg-2  ">
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
          <h4 className="fw-bold mb-4 text-center text-md-start mt-5 mt-xl-0">
            Our Key To Success
          </h4>
          <p className=" mb-5 opacity-75 ">
            We have modern, safe and efficient equipment available, furthermore,
            you will always have a united community available to help you, at
            any time! Contact us for further information!
          </p>

          <Link to={'/contacts'}>
            <Button className="text-white rounded-0 fw-bold py-3 px-4 mb-4 customButton ">
              CONTACT US <i className="bi bi-arrow-right"></i>
            </Button>
          </Link>
        </Col>
        <Col
          xs={10}
          md={5}
          className="d-none d-lg-block mb-5 position-relative "
        >
          <img
            src={couple}
            alt="athlete_celebrating "
            width={300}
            className="position-absolute z-3"
          />
          <img
            src={redCircle}
            alt="red circle"
            width={250}
            className="z-1 redCircleAbout position-absolute "
          />
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
              <p className="text-center  mt-5  pt-lg-4">
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
              <p className="text-center  mt-5  pt-lg-4">
                <i className="bi bi-calendar-check text-primary fw-bold display-1  "></i>
              </p>
              <h2 className="text-center fw-bold pt-4  pt-xl-0">
                Opening Hours
              </h2>
              <p className="text-center px-5 pt-4 pb-2 pb-lg-5 pb-xl-0 ">
                <span className="d-block">
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
