import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ACCESS_TOKEN, getMe } from '../redux/actions'

const Profile = () => {
  const dispatch = useDispatch()
  const initialForm = {
    heightValue: '',
    weightValue: '',
  }

  const accessToken = useSelector((state) => state.authReducer.accessToken)
  const user = useSelector((state) => state.userReducer.user)
  // const isLoading = useSelector((state) => state.userReducer.isLoading)

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

  useEffect(() => {
    dispatch(getMe(accessToken))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="mb-5">
      <Row>
        <h1 className="text-center fw-bold my-5"> MY PROFILE</h1>
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
                className="rounded-circle ms-4 mt-4 mt-md-0"
                width={80}
                height={80}
              />
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
              <div>
                <p className="fw-bold  mb-1 mt-5">change avatar</p>
                <Link
                  className="text-black link-underline link-underline-opacity-0"
                  to={'/update'}
                >
                  <p className="fw-bold  my-1">update info</p>
                </Link>

                <Link
                  className="text-black link-underline link-underline-opacity-0"
                  to={'/password'}
                >
                  <p className="fw-bold  my-1">change password</p>
                </Link>
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
                      // dispatch({
                      //   type: GET_ME,
                      //   payload: null,
                      // })
                    }}
                    className="fw-bold  mb-3"
                  >
                    LOGOUT <i className="bi bi-person-down"></i>
                  </p>
                </Link>
              </div>
            </Row>
          </Col>
          <hr className="d-lg-none" />

          <Col xs={12} lg={6} xl={4} className="text-center mt-4 mt-lg-0 ">
            <h2 className="text-center fw-bold mb-5">
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
          <Col xs={12} lg={6} className="mb-5 mb-md-0">
            <h2 className="fw-bold mb-4 text-center text-md-start  mt-xl-0 ">
              Your Reviews:
            </h2>
            <p className="fw-bold mb-0 text-center text-md-start ">
              PlaceholderTitle
            </p>
            <p className="mb-0 text-center text-md-start mb-5 mb-lg-0">
              PlaceHolderRating
            </p>
          </Col>
          <Col xs={12} lg={6} className="mb-5 mb-md-0">
            <h2 className="fw-bold mb-4 text-center text-md-start  mt-xl-0">
              Your Subscriptions:
            </h2>
            <p className="fw-bold mb-0 text-center text-md-start">
              PlaceholderTitle
            </p>
            <p className=" mb-0 text-center text-md-start">PlaceholderDays</p>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Profile
