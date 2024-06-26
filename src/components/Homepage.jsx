/* eslint-disable react/no-unknown-property */
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Offcanvas,
  Row,
  Spinner,
} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import athlete from '../assets/athlete_celebrating.png'
import image1 from '../assets/pesi.png'
import image2 from '../assets/pesi2.png'
import image3 from '../assets/pesi3.png'
import gains from '../assets/gains.png'
import rest from '../assets/rest.png'
import friendly from '../assets/friendly.png'
import custom from '../assets/custom.png'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews, getMe, getSubs, getTrainers } from '../redux/actions'
import redCircle from '../assets/red-circle.svg'
import baffo from '../assets/baffo.svg'
import weFamily from '../assets/we_are_a_family.png'

const Homepage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const trainers = useSelector((state) => state.userReducer.trainers)
  const subs = useSelector((state) => state.subReducer.subs)
  const reviews = useSelector((state) => state.reviewReducer.reviews)
  const token = useSelector((state) => state.authReducer.accessToken)

  const initialForm = {
    heightValue: '',
    weightValue: '',
  }

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
    window.scrollTo(0, 0)
    if (token !== '') {
      dispatch(getMe(token))
    }
    dispatch(getTrainers())
    dispatch(getSubs())
    dispatch(getAllReviews())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container fluid className="p-0 border-bottom border-primary border-3">
        <div className="hero py-5 d-flex flex-column justify-content-between ">
          <Row className=" ">
            <Col xs={12} md={4}>
              <div className="position-relative z-3 ms-2 d-flex justify-content-start  text-white">
                <img
                  src={baffo}
                  alt="baffo"
                  className="position-absolute whiteBaffo"
                  width={320}
                />
                <h4 className=" ms-5 pt-3 mb-4 mt-xl-0 z-2 position-relative text-black">
                  BUILD YOUR BODY
                </h4>
              </div>
              <h1 className="text-white ps-5 mt-4 fw-bold">MAKE IT FIT </h1>
              <h1 className="text-white ps-5 mt-3 mb-5 ">& STRONG </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className="d-flex flex-column ">
              <h4 className="text-white ps-5 fst-italic">- TAKE A TOUR -</h4>
              <Link to={'/subscriptions'}>
                <Button className="text-white rounded-0 fw-bold py-3 px-4 my-2 customButton ms-5 ">
                  SUBSCRIPTIONS <i className="bi bi-arrow-right"></i>
                </Button>
              </Link>
              <Link to={'/trainers'}>
                <Button className="text-white rounded-0 fw-bold py-3 px-5 my-2 customButton ms-5 ">
                  TRAINERS <i className=" ps-1 bi bi-arrow-right"></i>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={4}
              className="d-flex flex-column align-items-start"
            >
              <h5 className="text-white ps-5 fw-bold">FOLLOW US</h5>
              <div className=" ms-4 d-flex justify-content-start   align-items-center justify-content-center justify-content-lg-start text-white ">
                <a href="https://www.facebook.com/">
                  <i className="bi bi-facebook fs-3 mx-2 "></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="bi bi-instagram fs-3  mx-2"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="bi bi-twitter-x fs-3  mx-2"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="bi bi-youtube fs-3 mx-2"></i>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="my-5 ">
        <Row className="justify-content-center justify-content-md-around my-5">
          <Col xs={10} lg={6}>
            <div className="position-relative z-3 d-flex justify-content-center text-white">
              <img
                src={baffo}
                alt="baffo"
                className="position-absolute z-"
                width={270}
              />
              <h4 className="fw-bold pt-2 mb-4 mt-xl-0 z-2 position-relative">
                WHY NOCTFIT?
              </h4>
            </div>
            <h2 className="fw-bold mb-4  text-center text-md-start">
              We Can Give You All The Tools To Success
            </h2>
            <p className="mb-5 opacity-75 ">
              Commitment, perseverance and determination is what we will help
              you maintain perpetually,
              <span className=" ms-1 fw-bold">Noctfit</span> will do the rest!
            </p>
            <Row className="my-4  d-none d-lg-flex">
              <Col
                xs={12}
                lg={4}
                className="border-end py-3 border-dark-subtle text-center"
              >
                <img src={image1} alt="icon_lift1" width={60} />
                <h5 className="fw-bold mt-3">CERTIFIED TRAINERS</h5>
              </Col>
              <Col
                xs={12}
                lg={4}
                className="border-end py-3 border-dark-subtle text-center "
              >
                {' '}
                <img src={image2} alt="icon_lift2" width={60} />
                <h5 className="fw-bold mt-3">MODERN EQUIPMENTS </h5>
              </Col>
              <Col xs={12} lg={4} className=" py-3 text-center ">
                {' '}
                <img src={image3} alt="icon_lift3" width={60} />
                <h5 className="fw-bold mt-3">SAFE GYM MACHINES</h5>
              </Col>
            </Row>
            <Row className="my-4 d-lg-none ">
              <Col
                xs={12}
                lg={4}
                className=" py-3 border-dark-subtle text-center"
              >
                <img src={image1} alt="icon_lift1" width={60} />
                <h5 className="fw-bold mt-3">CERTIFIED TRAINERS</h5>
              </Col>
              <Col
                xs={12}
                lg={4}
                className=" py-3 border-dark-subtle text-center "
              >
                {' '}
                <img src={image2} alt="icon_lift2" width={60} />
                <h5 className="fw-bold mt-3">MODERN EQUIPMENTS </h5>
              </Col>
              <Col xs={12} lg={4} className=" py-3 text-center ">
                {' '}
                <img src={image3} alt="icon_lift3" width={60} />
                <h5 className="fw-bold mt-3">SAFE GYM MACHINES</h5>
              </Col>
            </Row>
            <Row className="text-center text-lg-start">
              <Link to={'/about'}>
                <Button className="text-white rounded-0 fw-bold py-3 px-4 customButton mb-5 ">
                  ABOUT US <i className="bi bi-arrow-right"></i>
                </Button>
              </Link>
            </Row>
          </Col>
          <Col
            xs={10}
            md={5}
            className="d-none d-lg-block mb-5 mt-5 mt-lg-0 position-relative"
          >
            <img
              src={athlete}
              alt="athlete_celebrating "
              width={350}
              className="position-absolute z-3"
            />
            <img
              src={redCircle}
              alt="red circle"
              className="z-1 redCircle position-absolute"
            />
          </Col>
        </Row>
      </Container>

      <div className="bg-danger text-white py-5 border-bottom border-top border-2 border-primary">
        <Container>
          <Row className="justify-content-center justify-content-md-around my-5">
            <Col
              xs={10}
              lg={6}
              className="d-none d-lg-block  position-relative pt-5 "
            >
              <img
                src={weFamily}
                alt="family "
                width={400}
                className="position-absolute z-3"
              />
              <img
                src={redCircle}
                alt="red circle"
                className="z-1 whiteCircle position-absolute"
              />
            </Col>
            <Col xs={10} lg={6}>
              <div className="position-relative z-3 d-flex justify-content-center text-black">
                <img
                  src={baffo}
                  alt="baffo"
                  className="position-absolute whiteBaffo"
                  width={330}
                />
                <h4 className="fw-bold pt-3 mb-4 mt-xl-0 z-2 position-relative">
                  WE ARE A FAMILY
                </h4>
              </div>
              <h2 className="fw-bold mb-4  text-center text-md-start">
                Meet Fitness Experts And Join Them
              </h2>
              <p className="mb-5 opacity-75 ">
                Not just a gym, but a place to feel at home. Meet many other
                fitness enthusiasts and take part in targeted meetings where you
                can unlock your full potential!
              </p>
              <Row className="my-4 ">
                <Col
                  xs={12}
                  md={6}
                  className=" py-3 border-dark-subtle text-center "
                >
                  <Row className="text-start">
                    <Col xs={3}>
                      <img
                        src={friendly}
                        alt="icon_lift3"
                        width={60}
                        className="rounded-circle heroPng p-2"
                      />
                    </Col>

                    <Col xs={9}>
                      <h5 className="fw-bold mt-3">Friendly People</h5>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className=" py-3 border-dark-subtle text-center "
                >
                  <Row className="text-start">
                    <Col xs={3}>
                      <img
                        src={gains}
                        alt="gains"
                        width={60}
                        className="rounded-circle heroPng p-2"
                      />
                    </Col>

                    <Col xs={9}>
                      <h5 className="fw-bold mt-3 ">Gains Guaranteed</h5>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className=" py-3 border-dark-subtle text-center "
                >
                  <Row className="text-start">
                    <Col xs={3}>
                      <img
                        src={rest}
                        alt="icon_lift3"
                        width={60}
                        className="rounded-circle heroPng p-2"
                      />
                    </Col>

                    <Col xs={9}>
                      <h5 className="fw-bold mt-3">Free Rest Room</h5>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className=" py-3 border-dark-subtle text-center "
                >
                  <Row className="text-start">
                    <Col xs={3}>
                      <img
                        src={custom}
                        alt="icon_lift3"
                        width={60}
                        className="rounded-circle heroPng p-2"
                      />
                    </Col>

                    <Col xs={9}>
                      <h5 className="fw-bold mt-3">
                        Custom Plans For Every Age
                      </h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Link to={'/contacts'}>
                <Button className="text-white rounded-0 fw-bold py-3 px-4 customButton ">
                  CONTACT US <i className="bi bi-arrow-right"></i>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <div className="position-relative z-3 d-flex justify-content-center text-white">
          <img
            src={baffo}
            alt="baffo"
            className="position-absolute "
            width={320}
          />
          <h5 className="fw-bold pt-3 mb-4 mt-xl-0 z-2 position-relative">
            OUR SUBSCRIPTIONS
          </h5>
        </div>
        <h2 className="fw-bold text-center">
          We Offer Many Flexible Susbscriptions
        </h2>
        <Row className="mt-5 g-3 mb-5 ">
          {subs === null && (
            <Col className="mt-5 d-flex justify-content-center align-items-center">
              <Spinner animation="border" variant="primary"></Spinner>
            </Col>
          )}
          {subs !== null && (
            <>
              <Col xs={12} lg={6}>
                <Card>
                  <Card.Img
                    src={subs.content[0].cover}
                    alt="Card image"
                    height={350}
                    className="homeSub"
                  />
                  <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white homeSub">
                    <Card.Title>{subs.content[0].title}</Card.Title>
                    <Card.Text>
                      € {subs.content[0].price} -{' '}
                      {subs.content[0].daysOfDuration} Days
                    </Card.Text>
                    <Button
                      onClick={() => {
                        navigate('/details/' + subs.content[0].id)
                      }}
                      className="
            mb-2 text-white rounded rounded-0 fw-bold"
                    >
                      DETAILS <i className="bi bi-arrow-right"></i>
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} lg={3}>
                <Card>
                  <Card.Img
                    src={subs.content[1].cover}
                    alt="Card image"
                    height={350}
                    className="homeSub"
                  />
                  <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white homeSub">
                    <Card.Title>{subs.content[1].title}</Card.Title>€{' '}
                    {subs.content[1].price} - {subs.content[1].daysOfDuration}{' '}
                    Days
                    <Button
                      onClick={() => {
                        navigate('/details/' + subs.content[1].id)
                      }}
                      className="
            mb-2 text-white rounded rounded-0 fw-bold"
                    >
                      DETAILS <i className="bi bi-arrow-right"></i>
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} lg={3}>
                <Card>
                  <Card.Img
                    src={subs.content[2].cover}
                    alt="Card image"
                    height={350}
                    className="homeSub"
                  />
                  <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white homeSub">
                    <Card.Title>{subs.content[2].title}</Card.Title>€{' '}
                    {subs.content[2].price} - {subs.content[2].daysOfDuration}{' '}
                    Days
                    <Button
                      onClick={() => {
                        navigate('/details/' + subs.content[2].id)
                      }}
                      className="
            mb-2 text-white rounded rounded-0 fw-bold"
                    >
                      DETAILS <i className="bi bi-arrow-right"></i>
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} lg={3}>
                <Card>
                  <Card.Img
                    src={subs.content[3].cover}
                    alt="Card image"
                    height={350}
                    className="homeSub"
                  />
                  <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white homeSub">
                    <Card.Title>{subs.content[3].title}</Card.Title>€{' '}
                    {subs.content[3].price} - {subs.content[3].daysOfDuration}{' '}
                    Days
                    <Button
                      onClick={() => {
                        navigate('/details/' + subs.content[3].id)
                      }}
                      className="
            mb-2 text-white rounded rounded-0 fw-bold"
                    >
                      DETAILS <i className="bi bi-arrow-right"></i>
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} lg={3}>
                <Card>
                  <Card.Img
                    src={subs.content[4].cover}
                    alt="Card image"
                    height={350}
                    className="homeSub"
                  />
                  <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white homeSub ">
                    <Card.Title>{subs.content[4].title}</Card.Title>€{' '}
                    {subs.content[4].price} - {subs.content[4].daysOfDuration}{' '}
                    Days
                    <Button
                      onClick={() => {
                        navigate('/details/' + subs.content[4].id)
                      }}
                      className="
            mb-2 text-white rounded rounded-0 fw-bold"
                    >
                      DETAILS <i className="bi bi-arrow-right"></i>
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} lg={6}>
                <Card>
                  <Card.Img
                    src={subs.content[5].cover}
                    alt="Card image"
                    height={350}
                    className="homeSub"
                  />
                  <Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end text-white homeSub">
                    <Card.Title>{subs.content[5].title}</Card.Title>€{' '}
                    {subs.content[5].price} - {subs.content[5].daysOfDuration}{' '}
                    Days
                    <Button
                      onClick={() => {
                        navigate('/details/' + subs.content[5].id)
                      }}
                      className="
            mb-2 text-white rounded rounded-0 fw-bold"
                    >
                      DETAILS <i className="bi bi-arrow-right"></i>
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </>
          )}
        </Row>
        <Row className="justify-content-end align-items-center text-end mb-4">
          <Col xs={5} sm={6} md={8} lg={9}>
            <span className="fst-italic">Check all our Subscriptions</span>
          </Col>
          <Col xs={7} sm={6} md={4} lg={3} className="text-start">
            <Link to={'/subscriptions'}>
              <Button className="text-white rounded-0 fw-bold py-3 px-4 customButton ">
                CHECK <i className="bi bi-arrow-right"></i>
              </Button>
            </Link>
          </Col>
        </Row>

        <hr className="mb-5" />
        <div className="position-relative z-3 d-flex justify-content-center text-white">
          <img
            src={baffo}
            alt="baffo"
            className="position-absolute "
            width={320}
          />
          <h5 className="fw-bold pt-3 mb-4 mt-xl-0 z-2 position-relative">
            OUR TRAINERS
          </h5>
        </div>
        <h2 className="fw-bold text-center mb-5">Team Of Expert Trainers</h2>
        <Row className="justify-content-center g-4">
          {trainers === null && (
            <Col className="mt-5 d-flex justify-content-center align-items-center">
              <Spinner animation="border" variant="primary"></Spinner>
            </Col>
          )}
          {trainers !== null && (
            <>
              <Col xs={12} md={6} lg={4}>
                <div className="trainers">
                  <div className="d-flex justify-content-center ">
                    <img
                      src={trainers[0].avatar}
                      alt="trainer"
                      className="w-50 graytrain"
                      style={{ minHeight: 340 }}
                    />
                  </div>
                  <div className="underTrainers pt-4 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="fw-bold text-center ">
                      {trainers[0].name} {trainers[0].surname}
                    </h5>
                    <p className="text-center fw-semibold opacity-50">
                      Nutritionist && Cardio Trainer
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="trainers">
                  <div className="d-flex justify-content-center ">
                    <img
                      src={trainers[1].avatar}
                      alt="trainer"
                      className="w-50 graytrain"
                      style={{ minHeight: 340 }}
                    />
                  </div>
                  <div className="underTrainers pt-4 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="fw-bold text-center ">
                      {' '}
                      {trainers[1].name} {trainers[1].surname}
                    </h5>
                    <p className="text-center fw-semibold opacity-50">
                      Yoga Trainer
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className="trainers">
                  <div className="d-flex justify-content-center ">
                    <img
                      src={trainers[2].avatar}
                      alt="trainer"
                      className="w-50 graytrain"
                      style={{ minHeight: 340 }}
                    />
                  </div>
                  <div className="underTrainers pt-4 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="fw-bold text-center ">
                      {' '}
                      {trainers[2].name} {trainers[2].surname}
                    </h5>
                    <p className="text-center fw-semibold opacity-50">
                      Power Lifting Trainer
                    </p>
                  </div>
                </div>
              </Col>
            </>
          )}
        </Row>
        <Row className="justify-content-end align-items-center text-end  mt-5 mb-4 ">
          <Col xs={5} sm={6} lg={9}>
            <span className="fst-italic">Check all our Trainers</span>
          </Col>
          <Col xs={7} sm={6} lg={3} className="text-start">
            <Link to={'/trainers'}>
              <Button className="text-white rounded-0 fw-bold py-3 px-4 customButton ">
                CHECK <i className="bi bi-arrow-right"></i>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="calculate-section text-white py-5 border-bottom border-top border-2 border-primary d-flex flex-column justify-content-center align-items-center">
        <Container>
          <Row className="justify-content-center justify-content-md-end ">
            <Col xs={10} sm={8} md={6} xl={4} className="text-center">
              <h2 className="fw-bold text-center">
                Calculate Your <span className="text-primary">BMI</span>!
              </h2>
              <Form className=" px-4 mb-5 text-white">
                <Form.Group className="mb-3" controlId="height">
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="bg-transparent rounded-0"
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
                    className="bg-transparent rounded-0"
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
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <div className="position-relative z-3 d-flex justify-content-center text-white mb-3">
          <img
            src={baffo}
            alt="baffo"
            className="position-absolute  "
            width={250}
          />
          <h5 className="fw-bold pt-2 mb-4 mt-xl-0 z-2 position-relative">
            REVIEWS
          </h5>
        </div>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <Carousel className="w-100">
              {reviews === null && (
                <Col className="mt-5 d-flex justify-content-center align-items-center">
                  <Spinner animation="border" variant="primary"></Spinner>
                </Col>
              )}
              {reviews !== null &&
                reviews.content.slice(0, 6).map((review) => {
                  return (
                    <Carousel.Item key={review.id}>
                      <div className="divouterrew">
                        <div className="divreview">
                          <img
                            src={review.user.avatar}
                            alt="user_avatar"
                            className="rounded-circle  ms-4 mt-3  profileImg"
                            width={90}
                            height={90}
                          />

                          <Carousel.Caption className="p-0">
                            <h3 className="mb-3 fw-bold fst-italic">
                              {review.title}
                            </h3>
                            <p className="fst-italic">{review.description}</p>
                            <p className="mb-0 text-center  mb-4 mb-lg-2">
                              {[1, 2, 3, 4, 5].map((value) => (
                                <i
                                  key={value}
                                  className={
                                    value <= review.rating
                                      ? 'bi bi-star-fill text-primary  me-1 fs-4 '
                                      : 'bi bi-star text-primary fs-4 '
                                  }
                                ></i>
                              ))}
                            </p>
                          </Carousel.Caption>
                        </div>
                      </div>
                    </Carousel.Item>
                  )
                })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homepage
