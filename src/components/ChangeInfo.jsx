import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_ERRORS, UPDATE_OK, updateMe } from '../redux/actions'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ChangeInfo = () => {
  const initialForm = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    birthDate: '',
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
  const updateOk = useSelector((state) => state.userReducer.updateOk)
  const updateErrors = useSelector((state) => state.userReducer.updateErrors)

  useEffect(() => {
    dispatch({
      type: UPDATE_OK,
      payload: false,
    })
    dispatch({
      type: UPDATE_ERRORS,
      payload: null,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={6} lg={4} className="formGrap p-5 mb-5 ">
          {updateOk === false && updateErrors !== null && (
            <div className="text-primary mb-3">{updateErrors}</div>
          )}
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(updateMe(token, form))
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                className="rounded-0"
                required
                value={form.name}
                onChange={(e) => {
                  handleChange(e, 'name')
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold ">Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Surname"
                className="rounded-0"
                required
                value={form.surname}
                onChange={(e) => {
                  handleChange(e, 'surname')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Username"
                className="rounded-0"
                required
                value={form.username}
                onChange={(e) => {
                  handleChange(e, 'username')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label className="text-white fw-bold ">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Noctfit@Noctfit.com"
                className="rounded-0"
                required
                value={form.email}
                onChange={(e) => {
                  handleChange(e, 'email')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="rounded-0"
                required
                value={form.password}
                onChange={(e) => {
                  handleChange(e, 'password')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Birth Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Your Birth Date "
                className="rounded-0"
                required
                value={form.birthDate}
                onChange={(e) => {
                  handleChange(e, 'birthDate')
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Row className="justify-content-center">
              <Col xs={4}>
                <Button
                  variant="primary"
                  type="submit"
                  className="text-white my-4 rounded-0 fw-bold "
                >
                  UPDATE
                </Button>
              </Col>
              {updateOk && (
                <div className="mb-3 text-center text-white">
                  Updated! Go back to
                  <Link className="text-decoration-none" to="/profile">
                    <span className="text-primary fw-bold hoverable ms-2">
                      Profile
                    </span>
                    !
                  </Link>
                </div>
              )}
              {!updateOk && (
                <p className="text-center text-white pt-2">
                  Go back to
                  <Link
                    className="text-primary link-offset-2 link-underline link-underline-opacity-0 ms-1 fw-bold"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </p>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ChangeInfo
