import { Button, Col, Container, Row } from 'react-bootstrap'
import photo2 from '../assets/transparent-healthy-lifestyle-fit-man-with-clipboard-in-gym66006193dcf420.52604586.png'
const Trainers = () => {
  return (
    <Container className="mb-5">
      <Row>
        <h1 className="text-center fw-bold my-5"> PERSONAL TRAINERS </h1>
        <hr />
      </Row>
      <Row className="mb-5">
        <h2 className="fw-bold   text-center">Discover Our Professionals!</h2>
        <p className="text-center">
          Our personal trainers are all qualified, they will help you achieve
          any goal with specific workouts and targeted diets.
        </p>
      </Row>
      <Row>
        <Col xs={12} md={6} xl={4}>
          <div className="trainers">
            <div className="d-flex justify-content-center ">
              <img src={photo2} alt="trainer" className="w-50 graytrain" />
            </div>
            <div className="underTrainers pt-4 d-flex flex-column justify-content-center align-items-center">
              <h5 className="fw-bold text-center ">NAME SURNAME</h5>
              <p className="text-center fw-semibold opacity-50">
                Crossfit Trainer
              </p>
              <Button
                className="
              mb-3 text-white rounded rounded-0 fw-bold"
              >
                BOOK
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Trainers
