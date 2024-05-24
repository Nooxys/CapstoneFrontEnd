import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  POST_RESERVATION_ERRORS,
  POST_RESERVATION_OK,
  addReservation,
  getTrainers,
} from '../redux/actions'

const Trainers = () => {
  // ------------------

  const initialDateTimeForm = {
    date: '',
    time: '',
  }

  const [dateTimeForm, setDateTimeForm] = useState(initialDateTimeForm)

  const handleTimeFormChange = (e, attribute) => {
    setDateTimeForm({
      ...dateTimeForm,
      [attribute]: e.target.value,
    })
  }

  // ------------------

  const initialPostForm = {
    ptId: '',
    date: '',
  }

  const [postForm, setPostForm] = useState(initialPostForm)

  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    dispatch({
      type: POST_RESERVATION_OK,
      payload: false,
    })
    dispatch({
      type: POST_RESERVATION_ERRORS,
      payload: null,
    })
    setDateTimeForm(initialDateTimeForm)
  }
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()
  const token = useSelector((state) => state.authReducer.accessToken)
  const trainers = useSelector((state) => state.userReducer.trainers)
  const addRes = useSelector(
    (state) => state.reservationReducer.newReservationOk
  )
  const addResErrors = useSelector(
    (state) => state.reservationReducer.newReservationErrors
  )

  useEffect(() => {
    window.scrollTo(0, 0)

    dispatch(getTrainers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setPostForm({
      ...postForm,
      date: dateTimeForm.date + dateTimeForm.time,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateTimeForm])

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
                      onClick={() => {
                        handleShow()
                        setPostForm({
                          ...postForm,
                          ptId: trainer.id,
                        })
                      }}
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
        {addResErrors && (
          <div className="text-primary  px-4 mt-5 fw-bold">{addResErrors}</div>
        )}
        {addRes && (
          <>
            <div className="px-4 mt-5 fw-bold">Trainer Booked!</div>
            <p className="px-4 ">
              To see this reservation, go to your personal area!
            </p>
          </>
        )}

        <Modal.Body>
          <Form
            id="reservationForm"
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(addReservation(token, postForm))
            }}
          >
            <Form.Group className="mb-4">
              <Form.Label className="text-black opacity-75 fw-bold ">
                Date
              </Form.Label>
              <Form.Control
                type="date"
                placeholder="DATE"
                required
                value={dateTimeForm.date}
                onChange={(e) => {
                  handleTimeFormChange(e, 'date')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-black opacity-75 fw-bold">
                Time
              </Form.Label>
              <Form.Select
                value={dateTimeForm.time}
                onChange={(e) => {
                  handleTimeFormChange(e, 'time')
                }}
                required
              >
                <option default value="">
                  ---
                </option>
                <option value="T09:00:00.000">9.00</option>
                <option value="T10:00:00.000">10.00</option>
                <option value="T11:00:00.000">11.00</option>
                <option value="T12:00:00.000">12.00</option>
                <option value="T13:00:00.000">13.00</option>
                <option value="T14:00:00.000">14.00</option>
                <option value="T15:00:00.000">15.00</option>
                <option value="T16:00:00.000">16.00</option>
                <option value="T17:00:00.000">17.00</option>
                <option value="T18:00:00.000">18.00</option>
                <option value="T19:00:00.000">19.00</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="mb-3 text-white rounded rounded-0 fw-bold"
            onClick={handleClose}
          >
            Close
          </Button>
          {!addRes && (
            <Button
              className="mb-3 text-white rounded rounded-0 fw-bold"
              form="reservationForm"
              type="submit"
            >
              Confirm
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Trainers
