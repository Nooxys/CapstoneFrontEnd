import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  ASSIGN_SUB_ERRORS,
  ASSIGN_SUB_OK,
  assignSub,
  getSub,
} from '../redux/actions'
const SubDetails = () => {
  const param = useParams().id
  const dispatch = useDispatch()

  const token = useSelector((state) => state.authReducer.accessToken)
  const sub = useSelector((state) => state.subReducer.singleSub)
  const assignOK = useSelector((state) => state.subReducer.assignOK)
  const assignErrors = useSelector((state) => state.subReducer.assignErrors)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getSub(param))
    dispatch({
      type: ASSIGN_SUB_OK,
      data: false,
    })
    dispatch({
      type: ASSIGN_SUB_ERRORS,
      data: null,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container className="py-5">
        <Row className="mt-5 ">
          {sub === null && (
            <Col className="mt-5 d-flex justify-content-center align-items-center">
              <Spinner animation="border" variant="primary"></Spinner>
            </Col>
          )}
          {sub !== null && (
            <>
              <Col xs={12} lg={6} key={sub.id}>
                <Card>
                  <Card.Img
                    src={sub.cover}
                    alt="Card image"
                    className="homeSub"
                  />
                  <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white homeSub">
                    {token !== '' && (
                      <Button
                        onClick={() => {
                          dispatch(assignSub(token, param))
                        }}
                        className="
              mb-2 text-white rounded rounded-0 fw-bold"
                      >
                        ADD TO PROFILE
                      </Button>
                    )}
                    {token === '' && (
                      <Link to={'/login'}>
                        <Button
                          className="
              mb-2 text-white rounded rounded-0 fw-bold"
                        >
                          LOGIN
                        </Button>
                      </Link>
                    )}
                    {assignOK === true ? (
                      <p className="fw-bold "> Sub added to profile!</p>
                    ) : (
                      <p className="fw-bold"> {assignErrors}</p>
                    )}
                  </Card.ImgOverlay>
                </Card>
                <p className="text-center  pt-2">
                  <i className="bi bi-arrow-left"></i> Go Back To
                  <Link
                    className="text-primary link-offset-2 link-underline link-underline-opacity-0 ms-1 fw-bold"
                    to="/subscriptions"
                  >
                    Subscriptions
                  </Link>
                </p>
              </Col>
              <Col
                xs={12}
                lg={6}
                className="d-flex flex-column justify-content-around"
              >
                <hr className="d-lg-none mt-5 mt-lg-0" />
                <div>
                  <Row className="justify-content-start align-items-center">
                    <Col xs={2} className="mb-2">
                      <i className="bi bi-feather text-primary display-5"></i>
                    </Col>
                    <Col
                      xs={8}
                      className="border-bottom border-2 border-primary text-center"
                    >
                      {' '}
                      <h2>{sub.title}</h2>
                    </Col>
                  </Row>
                  <Row className="justify-content-start align-items-center">
                    <Col xs={2} className="mb-2">
                      <i className="bi bi-clock-history text-primary display-5"></i>
                    </Col>
                    <Col
                      xs={8}
                      className="border-bottom border-2 border-primary text-center"
                    >
                      {' '}
                      <h2>{sub.daysOfDuration} Days of Subsription</h2>
                    </Col>
                  </Row>
                  <Row className="justify-content-start align-items-center">
                    <Col xs={2} className="mb-2">
                      <i className="bi bi-tags text-primary display-5"></i>
                    </Col>
                    <Col
                      xs={8}
                      className="border-bottom border-2 border-primary text-center"
                    >
                      {' '}
                      <h2>{sub.price} €</h2>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row className="justify-content-start align-items-center">
                    <Col xs={2} className="mb-2 ">
                      <i className="bi bi-book text-primary display-5"></i>
                    </Col>
                    <Col
                      xs={8}
                      className="border-bottom border-2 border-primary text-center"
                    >
                      {' '}
                      <h5>{sub.description}</h5>
                    </Col>
                  </Row>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  )
}

export default SubDetails
