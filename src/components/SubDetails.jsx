import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSub } from '../redux/actions'
const SubDetails = () => {
  const param = useParams().id
  const dispatch = useDispatch()

  const token = useSelector((state) => state.authReducer.accessToken)
  const sub = useSelector((state) => state.subReducer.singleSub)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getSub(token, param))

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
                    <Button
                      className="
              mb-2 text-white rounded rounded-0 fw-bold"
                    >
                      ADD TO CART <i className="bi bi-arrow-right"></i>
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={4} lg={6}>
                <div className="border border-3 border-primary ">
                  <h3 className=" p-3 text-center">{sub.title}</h3>
                  <h6>prezzo</h6>
                  <h6>durata</h6>

                  <h3 className=" p-3 text-center">Description</h3>
                  <p className=" p-3">{sub.description}</p>
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
