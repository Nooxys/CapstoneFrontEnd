import { Button, Col, Container, Modal, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTrainers } from '../redux/actions'

const Trainers = () => {
  const initialForm = {
    date: '',
    time: '',
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()
  const token = useSelector((state) => state.authReducer.accessToken)
  const trainers = useSelector((state) => state.userReducer.trainers)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getTrainers(token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        {trainers === null && (
          <Col className="mt-5 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary"></Spinner>
          </Col>
        )}
        {trainers !== null &&
          trainers.map((trainer) => {
            return (
              <Col xs={12} md={6} xl={4} key={trainer.id} className="mb-4">
                <div className="trainers">
                  <div className="d-flex justify-content-center ">
                    <img
                      src={trainer.avatar}
                      alt="trainer"
                      className="w-50 graytrain"
                    />
                  </div>
                  <div className="underTrainers pt-4 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="fw-bold text-center ">
                      {trainer.name} {trainer.surname}
                    </h5>
                    <p className="text-center fw-semibold opacity-50">
                      Crossfit Trainer
                    </p>
                    <Button
                      className="
                mb-3 text-white rounded rounded-0 fw-bold"
                      onClick={handleShow}
                    >
                      BOOK
                    </Button>
                  </div>
                </div>
              </Col>
            )
          })}
      </Row>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="mb-3 text-white rounded rounded-0 fw-bold"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className="mb-3 text-white rounded rounded-0 fw-bold"
            onClick={handleClose}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Trainers
