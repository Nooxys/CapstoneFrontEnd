import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { POST_SUB_ERRORS, POST_SUB_OK, addSub, getSubs } from '../redux/actions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const newSubErrors = useSelector((state) => state.subReducer.newSubErrors)
  const newSubOk = useSelector((state) => state.subReducer.newSubOk)
  const token = useSelector((state) => state.authReducer.accessToken)
  const subs = useSelector((state) => state.subReducer.subs)

  const initialForm = {
    title: '',
    description: '',
    price: 0,
    daysOfDuration: 0,
  }
  const [form, setForm] = useState(initialForm)

  const handleSubFormChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    })
  }

  useEffect(() => {
    dispatch({
      type: POST_SUB_OK,
      payload: false,
    })
    dispatch({
      type: POST_SUB_ERRORS,
      payload: null,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [currentFile, setCurrentFile] = useState(null)

  const handleSubmit = async (e, id) => {
    e.preventDefault()
    if (currentFile) {
      const formData = new FormData()
      formData.append('cover', currentFile)
      try {
        const response = await fetch(
          'http://localhost:3001/subscriptions/upload/' + id,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        )
        if (response.ok) {
          console.log('uploaded')
        }
      } catch (error) {
        console.log(error)
      } finally {
        setTimeout(() => {
          dispatch(getSubs())
        }, '1000')
      }
    } else console.log('no file selected')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getSubs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="mb-5">
      <Row>
        <h1 className="text-center fw-bold my-5"> ADMIN DASHBOARD </h1>
        <hr />
        <Row>
          <h3 className="text-center fw-bold">Actives Subscriptions</h3>
          <h6 className="text-center fw-bold fst-italic ">
            Click on the subscription to change the image
          </h6>
        </Row>
        <Row>
          {subs === null && (
            <Col className="mt-5 d-flex justify-content-center align-items-center">
              <Spinner animation="border" variant="primary"></Spinner>
            </Col>
          )}
          {subs !== null &&
            subs.content.map((sub) => {
              return (
                <Col xs={12} md={6} xl={4} key={sub.id} className="g-2">
                  <Form
                    onSubmit={(e) => {
                      console.log(sub.id)
                      handleSubmit(e, sub.id)
                    }}
                  >
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Label className="fw-bold  mb-1 mt-5">
                        <Card>
                          <Card.Img src={sub.cover} alt="sub cover" />
                          <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white subscriptions">
                            <Card.Title>{sub.title}</Card.Title>
                            <Card.Text>
                              € {sub.price} - {sub.daysOfDuration} days
                            </Card.Text>
                            <Card.Text>{sub.description}</Card.Text>
                          </Card.ImgOverlay>
                        </Card>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        size="sm"
                        className="d-none"
                        onChange={(e) => {
                          setCurrentFile(e.target.files[0])
                        }}
                      />
                      <Button type="submit"> submit</Button>
                    </Form.Group>
                  </Form>{' '}
                </Col>
              )
            })}
        </Row>
      </Row>
      <Row>
        <h3 className="text-center fw-bold mt-5">Create Subscription</h3>
      </Row>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={6} lg={4} className="formGrap p-5 mb-5 ">
          {newSubOk === false && newSubErrors !== null && (
            <div className="text-primary mb-3">{newSubErrors}</div>
          )}
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(addSub(token, form))
              setForm(initialForm)
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sub Title"
                className="rounded-0"
                required
                value={form.title}
                onChange={(e) => {
                  handleSubFormChange(e, 'title')
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold ">
                Description
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Sub Description"
                className="rounded-0"
                required
                value={form.description}
                onChange={(e) => {
                  handleSubFormChange(e, 'description')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white fw-bold">Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Sub Price"
                className="rounded-0"
                required
                value={form.price}
                onChange={(e) => {
                  handleSubFormChange(e, 'price')
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3  " controlId="formBasicEmail">
              <Form.Label className="text-white fw-bold ">Duration</Form.Label>
              <Form.Control
                type="number"
                placeholder="Days Of Sub duration"
                className="rounded-0"
                required
                value={form.daysOfDuration}
                onChange={(e) => {
                  handleSubFormChange(e, 'daysOfDuration')
                }}
              />
            </Form.Group>

            <Row className="justify-content-center">
              <Col xs={4}>
                <Button
                  variant="primary"
                  type="submit"
                  className="text-white my-4 rounded-0 fw-bold "
                >
                  SAVE
                </Button>
              </Col>
              {newSubOk && (
                <div className="mb-3 text-center text-white">
                  Subscription created!
                </div>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard