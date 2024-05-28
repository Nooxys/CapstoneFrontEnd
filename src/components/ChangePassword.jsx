import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PASSWORD_ERRORS, PASSWORD_OK, updatePassword } from '../redux/actions'
import { useEffect, useState } from 'react'

const ChangePassword = () => {
  const initialForm = {
    oldPassword: '',
    newPassword: '',
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
  const passwordOk = useSelector((state) => state.userReducer.passwordOk)
  const passwordErrors = useSelector(
    (state) => state.userReducer.passwordErrors
  )

  useEffect(() => {
    dispatch({
      type: PASSWORD_OK,
      payload: null,
    })
    dispatch({
      type: PASSWORD_ERRORS,
      payload: null,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={6} lg={4} className="formGrap p-5 my-5 ">
          {passwordErrors !== null && (
            <div className="text-primary mb-3">{passwordErrors}</div>
          )}
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(updatePassword(token, form))
            }}
            className="py-2 "
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white fw-bold">
                Old Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="rounded-0"
                required
                onChange={(e) => {
                  handleChange(e, 'oldPassword')
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white fw-bold">
                New Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="rounded-0 "
                required
                onChange={(e) => {
                  handleChange(e, 'newPassword')
                }}
              />
              <Row className="justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="text-white mt-4 mb-3 rounded-0 fw-bold w-25 "
                >
                  UPDATE
                </Button>

                {passwordOk && (
                  <div className=" text-center text-white">
                    {passwordOk} Go Back to
                    <Link className="text-decoration-none" to="/profile">
                      <span className="text-primary fw-bold hoverable ms-2">
                        My profile
                      </span>
                    </Link>
                  </div>
                )}
                {!passwordOk && (
                  <p className="text-center text-white pt-2">
                    Go back to
                    <Link
                      className="text-primary link-offset-2 link-underline link-underline-opacity-0 ms-1 fw-bold"
                      to="/profile"
                    >
                      My profile
                    </Link>
                  </p>
                )}
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ChangePassword
