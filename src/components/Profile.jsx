import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Spinner,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  ACCESS_TOKEN,
  GET_ROLE,
  getMe,
  getMyReservations,
  getMyReviews,
  getMySubs,
} from '../redux/actions'
import baffo from '../assets/baffo.svg'

const Profile = () => {
  const dispatch = useDispatch()
  const initialForm = {
    heightValue: '',
    weightValue: '',
  }

  const [currentFile, setCurrentFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (currentFile) {
      const formData = new FormData()
      formData.append('avatar', currentFile)
      try {
        const response = await fetch('http://localhost:3001/users/me/upload', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        })
        if (response.ok) {
          console.log('uploaded')
        }
      } catch (error) {
        console.log(error)
      } finally {
        setTimeout(() => {
          dispatch(getMe(accessToken))
        }, '1000')
      }
    } else console.log('no file selected')
  }

  const accessToken = useSelector((state) => state.authReducer.accessToken)
  const user = useSelector((state) => state.userReducer.user)
  const myReservations = useSelector(
    (state) => state.reservationReducer.myReservations
  )
  const mySubs = useSelector((state) => state.subReducer.mySubs)
  // const isLoading = useSelector((state) => state.userReducer.isLoading)
  const myReviews = useSelector((state) => state.reviewReducer.myReviews)

  const [bmiValue, setBmiValue] = useState('')
  const [bmiMessage, setBmiMessage] = useState('')
  const [form, setForm] = useState(initialForm)

  const handleChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    })
  }

  const calculateBmi = () => {
    if (form.heightValue && form.weightValue) {
      const heightInMeters = form.heightValue / 100
      const bmi = (
        form.weightValue /
        (heightInMeters * heightInMeters)
      ).toFixed(2)
      setBmiValue(bmi)

      let message = ''
      if (bmi < 18.5) {
        message = 'You are Underweight'
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal weight'
      } else if (bmi >= 25 && bmi < 30) {
        message = 'You are Overweight'
      } else {
        message = 'You are very Overweight'
      }
      setBmiMessage(message)
    } else {
      setBmiValue('')
      setBmiMessage('')
    }
  }

  const stringFormatter = (string) => {
    if (string.charAt(11) === '0') {
      return string.slice(0, 10) + ' -- ' + string.slice(12, 16)
    } else return string.slice(0, 10) + ' -- ' + string.slice(11, 16)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getMe(accessToken))
    dispatch(getMyReservations(accessToken))
    dispatch(getMySubs(accessToken))
    dispatch(getMyReviews(accessToken))
    dispatch(getMyReservations(accessToken))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
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
            MY PROFILE
          </h1>
        </div>
        <hr />
      </Row>
      {user === null && (
        <Row className="h-100">
          <Col className="h-100 text-center d-flex align-items-center justify-content-center">
            <Spinner animation="border" variant="primary"></Spinner>
          </Col>
        </Row>
      )}
      {user !== null && (
        <Row>
          <Col xs={12} lg={6}>
            <h2 className="fw-bold mb-4 text-center text-lg-start  mt-xl-0">
              Hello, {user.name}!
              <img
                src={user.avatar}
                alt="user avatar"
                className="rounded-circle ms-4 mt-4 mt-md-0 profileImg"
                width={80}
                height={80}
              />
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  className="text-white rounded-0 mb-3 fw-bold"
                  id="dropdown-basic"
                >
                  Settings
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {' '}
                    <Link
                      className=" text-black link-underline link-underline-opacity-0"
                      to={'/update'}
                    >
                      <p className="fw-bold  my-1">update info</p>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <Link
                      className="text-black link-underline link-underline-opacity-0"
                      to={'/password'}
                    >
                      <p className="fw-bold  my-1">change password</p>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <Link
                      className="text-black link-underline link-underline-opacity-0"
                      to={'/login'}
                    >
                      <p
                        onClick={() => {
                          dispatch({
                            type: ACCESS_TOKEN,
                            payload: '',
                          })
                          dispatch({
                            type: GET_ROLE,
                            payload: null,
                          })
                        }}
                        className="fw-bold  mb-3"
                      >
                        LOGOUT <i className="bi bi-person-down"></i>
                      </p>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </h2>

            <h4 className="fw-bold mb-4 text-center text-md-start  mt-xl-0">
              Your Info:
            </h4>
            <Row>
              <Col xs={3}>
                <p className="fw-bold me-2">name:</p>
                <p className="fw-bold me-2">surname:</p>
                <p className="fw-bold me-2">username:</p>
                <p className="fw-bold me-2">email:</p>
                <p className="fw-bold me-2">password:</p>
                <p className="fw-bold me-2">birth date:</p>
              </Col>
              <Col xs={9} className="p-0 text-center text-sm-start">
                <p>{user.name}</p>
                <p>{user.surname}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>*******</p>
                <p>{user.birthDate}</p>
              </Col>

              <Form
                onSubmit={(e) => {
                  handleSubmit(e)
                }}
              >
                <Form.Group controlId="formFileSm" className="2">
                  <Form.Label className="fw-bold revRating fst-italic mb-1">
                    - change avatar -
                  </Form.Label>
                  <Form.Control
                    type="file"
                    size="sm"
                    className="d-none"
                    onChange={(e) => {
                      setCurrentFile(e.target.files[0])
                    }}
                  />
                </Form.Group>
                <Button
                  className="text-white rounded-0 mb-3 fw-bold"
                  type="submit"
                >
                  {' '}
                  Upload
                </Button>
              </Form>
            </Row>
          </Col>
          <hr className="d-lg-none" />

          <Col xs={12} lg={6} xl={4} className="text-center mt-1 mt-lg-5 ">
            <h2 className="text-center fw-bold mb-5 mt-5">
              {' '}
              Calculate your <span className="text-primary">BMI</span>!
            </h2>
            <Form className="formGrap px-4 mb-5">
              <Form.Group className="mb-3" controlId="height">
                <Form.Label></Form.Label>
                <Form.Control
                  className=""
                  type="number"
                  placeholder="Height / cm"
                  value={form.heightValue}
                  onChange={(e) => {
                    handleChange(e, 'heightValue')
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="weight">
                <Form.Label></Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Weight / kg"
                  value={form.weightValue}
                  onChange={(e) => {
                    handleChange(e, 'weightValue')
                  }}
                />
                <Button
                  variant="primary"
                  className="text-white my-4 rounded-0 fw-bold"
                  onClick={calculateBmi}
                >
                  CALCULATE
                </Button>
                {bmiMessage && bmiValue < 25 && (
                  <div className=" pb-3 text-white">
                    <p>
                      Your BMI: <span>{bmiValue}</span>
                    </p>
                    <p>
                      Result: <span>{bmiMessage}</span>
                    </p>
                  </div>
                )}
                {bmiMessage && bmiValue > 25 && (
                  <div className=" pb-3 text-primary">
                    <p>
                      Your BMI: <span>{bmiValue}</span>
                    </p>
                    <p>
                      Result: <span>{bmiMessage}</span>
                    </p>
                  </div>
                )}
              </Form.Group>
            </Form>
          </Col>

          <hr />
          <Col
            xs={12}
            lg={4}
            className="mb-4 mb-md-0 border-end border-start border-1 px-3 "
          >
            <h2 className="fw-bold mb-4 text-center  mt-xl-0 ">
              Your Reviews:
            </h2>
            {myReviews !== null &&
              myReviews.map((review) => {
                return (
                  <div key={review.id}>
                    <div id={review.id} className="text-center text-lg-start">
                      {' '}
                      <p className="fw-bold mb-0 text-center text-md-start ">
                        {review.title}
                      </p>
                      <p className="mb-0 text-center text-md-start mb-1 mb-lg-0 ">
                        {review.description}
                      </p>
                      <p className="mb-0 text-center text-md-start mb-4 mb-lg-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <i
                            key={value}
                            className={
                              value <= review.rating
                                ? 'bi bi-star-fill text-primary  me-1 fs-6 revRating'
                                : 'bi bi-star text-primary  fs-6 revRating'
                            }
                          ></i>
                        ))}
                      </p>
                      <Button
                        className=" px-3 text-white rounded-0 mb-3 "
                        onClick={async (e) => {
                          console.log(e.target.closest('div').id)
                          try {
                            const response = await fetch(
                              `
                    http://localhost:3001/reviews/${
                      e.target.closest('div').id
                    }`,
                              {
                                method: 'DELETE',
                                headers: {
                                  Authorization: `Bearer ${accessToken}`,
                                },
                              }
                            )
                            if (response.ok) {
                              dispatch(getMyReviews(accessToken))
                            }
                          } catch (error) {
                            console.log(error)
                          }
                        }}
                      >
                        {' '}
                        <i className="bi bi-calendar2-x"></i>
                      </Button>
                    </div>
                  </div>
                )
              })}
          </Col>
          <Col
            xs={12}
            lg={4}
            className="mb-4 mb-md-0 border-end border-start border-1 px-3"
          >
            <h2 className="fw-bold mb-4 text-center   mt-xl-0">
              Your Subscriptions:
            </h2>
            {mySubs !== null &&
              mySubs.content.map((sub) => {
                return (
                  <div
                    key={sub.id}
                    id={sub.id}
                    className="text-center text-lg-start"
                  >
                    <div>
                      <p className="fw-bold mb-0 text-center text-md-start">
                        {sub.title}
                      </p>
                      <p className=" mb-0 text-center text-md-start mb-2">
                        validity:{' '}
                        <span className="fw-bold">{sub.daysOfDuration} </span>
                        days
                      </p>
                    </div>
                  </div>
                )
              })}
          </Col>
          <Col
            xs={12}
            lg={4}
            className="mb-4 mb-md-0 border-end border-start border-1 px-3"
          >
            <h2 className="fw-bold mb-4 text-center   mt-xl-0">
              Your Reservations:
            </h2>
            {myReservations !== null &&
              myReservations.map((reservation) => {
                return (
                  <div
                    key={reservation.id}
                    id={reservation.id}
                    className="text-center text-lg-start"
                  >
                    <div>
                      <p className="fw-bold mb-1 text-center text-md-start ">
                        {reservation.pt.name + ' ' + reservation.pt.surname}{' '}
                      </p>
                      <p className=" mb-0 text-center text-md-start  mb-4 mb-lg-2">
                        {stringFormatter(reservation.date)}
                      </p>
                    </div>

                    <Button
                      className=" px-3 text-white rounded-0 mb-3 "
                      onClick={async (e) => {
                        console.log(e.target.closest('div').id)
                        try {
                          const response = await fetch(
                            `
                    http://localhost:3001/reservations/${
                      e.target.closest('div').id
                    }`,
                            {
                              method: 'DELETE',
                              headers: {
                                Authorization: `Bearer ${accessToken}`,
                              },
                            }
                          )
                          if (response.ok) {
                            dispatch(getMyReservations(accessToken))
                          }
                        } catch (error) {
                          console.log(error)
                        }
                      }}
                    >
                      {' '}
                      <i className="bi bi-calendar2-x"></i>
                    </Button>
                  </div>
                )
              })}
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Profile
