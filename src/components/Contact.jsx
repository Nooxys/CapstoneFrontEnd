import { useEffect, useState } from 'react'
import { Container, Row, Col, Accordion, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  POST_RESERVATION_ERRORS,
  POST_REVIEW_ERRORS,
  POST_REVIEW_OK,
  addReview,
} from '../redux/actions'
import baffo from '../assets/baffo.svg'
import { Link } from 'react-router-dom'

const Contact = () => {
  const initialForm = {
    title: '',
    description: '',
    rating: null,
  }

  const [form, setForm] = useState(initialForm)
  const handleChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    })
  }

  const dispatch = useDispatch()
  const token = useSelector((state) => state.authReducer.accessToken)
  const newReview = useSelector((state) => state.reviewReducer.newReviewOk)
  const newReviewErrors = useSelector(
    (state) => state.reviewReducer.newReviewErrors
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({
      type: POST_REVIEW_OK,
      data: false,
    })
    dispatch({
      type: POST_REVIEW_ERRORS,
      data: null,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container className="mb-5">
        <Row>
          <div className="position-relative z-3 d-flex justify-content-center my-4 text-white">
            <img
              src={baffo}
              alt="baffo"
              className="position-absolute mt-2"
              width={400}
            />
            <h1 className="fw-bold   mb-4 mt-xl-0 z-2 position-relative pt-3">
              CONTACT US
            </h1>
          </div>
          <hr />
        </Row>
        <Row className="mb-5">
          <Col xs={12} lg={6}>
            <h2 className="fw-bold mb-4  text-center text-md-start">
              We listen to you, tell us what you think!
            </h2>
            <p className="mb-5 opacity-75 ">
              Do you have any questions to ask us? Check the FAQ section, if you
              don&apos;t find what you&apos;re looking for, don&apos;t hesitate
              to contact us:
            </p>
            <Row>
              <Col xs={12} lg={6}>
                <h4 className="fw-bold border-bottom border-primary border-3 pb-1 text-center text-lg-start">
                  Opening Hours
                </h4>
                <p className="px-2 py-3 text-center text-lg-start">
                  <span className="d-block">
                    Monday to Friday: 8:00 am - 23.00 pm
                  </span>
                  <span className="d-block">Saturday: 8.00 am - 2.00 am</span>
                  <span className="d-block">Sunday: 9.00 am - 13.00 pm</span>
                </p>
              </Col>
              <Col xs={12} lg={6}>
                <h4 className="fw-bold border-bottom border-primary border-3 pb-1 text-center text-lg-start ">
                  Information
                </h4>
                <div className="d-flex flex-column justify-content-center    align-items-lg-start  align-items-center  mt-4 mb-3">
                  <p className="m-0">+39 0541 0110101</p>
                  <p>Noctfit@Noctfit.com</p>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <h4 className="fw-bold border-bottom border-primary border-3 pb-1 py-3 text-center text-lg-start ">
                  Rimini, Italy
                </h4>
                <div className="d-flex justify-content-start   align-items-center  h-100 justify-content-center justify-content-lg-start ">
                  <p className="px-2 pb-3   ">
                    <span className="d-block">Piazza Garibaldi,</span>
                    <span className="d-block">Via Roma, 07</span>
                  </p>
                </div>
              </Col>
              <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                <h4 className="fw-bold border-bottom border-primary border-3 pb-1 py-3 text-center text-lg-start">
                  Follow Us
                </h4>
                <br />
                <div className="d-flex justify-content-start   align-items-center justify-content-center justify-content-lg-start ">
                  <a href="https://www.facebook.com/" className="text-black">
                    <i className="bi bi-facebook display-6 mx-2 "></i>{' '}
                  </a>
                  <a href="https://www.instagram.com/" className="text-black">
                    <i className="bi bi-instagram display-6  mx-2"></i>
                  </a>
                  <a href="https://www.twitter.com/" className="text-black">
                    <i className="bi bi-twitter-x display-6  mx-2"></i>
                  </a>
                  <a href="https://www.youtube.com/" className="text-black">
                    <i className="bi bi-youtube display-6 mx-2"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <hr className="d-lg-none" />
          <Col xs={12} lg={6}>
            <h2 className="fw-bold mb-5  text-center mt-2 mt-lg-0 ">F.A.Q</h2>
            <Accordion className="px-5 pt-lg-4 ">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Is a medical certificate necessary to train?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, it is necessary for internal politics. You can easily do
                  it from your GP and then bring it to us within 3 days of
                  registering.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Am I insured against theft?</Accordion.Header>
                <Accordion.Body>
                  The gym does not take care of goods, therefore you are not
                  insured.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Am I insured if I get hurt?</Accordion.Header>
                <Accordion.Body>
                  The gym is covered by Liability Insurance Civil, therefore for
                  every accident that is objectively caused you are covered by a
                  liability of the structure insurance. If you were to hurt
                  yourself or because you use a tool incorrectly, you are not
                  covered.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What does it take to join the gym?
                </Accordion.Header>
                <Accordion.Body>
                  Your identity card and tax code.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Is it possible to have a free trial entry?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, absolutely. it is always possible to do a free trial day.
                  We are waiting for you!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <div className=" calculate-section text-white py-5 border-bottom border-top border-2 border-primary d-flex flex-column justify-content-center align-items-center">
        <Container>
          <Row className="justify-content-center justify-content-md-end ">
            <Col xs={10} sm={8} md={6} xl={4} className="text-center">
              <h2 className="fw-bold text-center">Leave A Review!</h2>
              <Form
                id="initialForm"
                onSubmit={(e) => {
                  e.preventDefault()
                  dispatch(addReview(token, form))
                  setForm(initialForm)
                }}
                className=" px-4 mb-5 text-white"
              >
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="bg-transparent rounded-0"
                    required
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => {
                      handleChange(e, 'title')
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="bg-transparent rounded-0 text-white"
                    required
                    as="textarea"
                    rows={4}
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => {
                      handleChange(e, 'description')
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <i
                      key={value}
                      onClick={() => {
                        setForm({
                          ...form,
                          rating: value,
                        })
                      }}
                      className={
                        value <= form.rating
                          ? 'bi bi-star-fill text-primary ms-2 fs-5 revRating'
                          : 'bi bi-star text-primary ms-2 fs-5 revRating'
                      }
                    ></i>
                  ))}
                </Form.Group>
                {!newReview && token !== '' && (
                  <Button
                    type="submit"
                    variant="primary"
                    className="text-white  rounded-0 fw-bold"
                    form="initialForm"
                  >
                    SEND
                  </Button>
                )}
                {!newReview && token === '' && (
                  <p className="opacity-75">
                    <Link
                      className="text-primary link-offset-2 link-underline link-underline-opacity-0 ms-1 fw-bold"
                      to="/login"
                    >
                      Login
                    </Link>{' '}
                    to send a review!
                  </p>
                )}

                {newReview && (
                  <div className="mb-3 text-center text-white">
                    Review sent!
                  </div>
                )}
                {newReviewErrors !== null && (
                  <div className="text-primary my-3">{newReviewErrors}</div>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contact
