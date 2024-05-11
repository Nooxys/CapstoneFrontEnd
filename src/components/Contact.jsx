import { Container, Row, Col, Accordion } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container className="mb-5">
      <Row>
        <h1 className="text-center fw-bold mb-5"> CONTACT US</h1>
        <hr />
      </Row>
      <Row className="mb-5">
        <Col xs={12} lg={6}>
          <h2 className="fw-bold mb-4  text-center text-md-start">
            We listen to you, tell us what you think!
          </h2>
          <p className="mb-5 opacity-75 ">
            Do you have any questions to ask us? Check the FAQ section, if you
            don&apos;t find what you&apos;re looking for, don&apos;t hesitate to
            contact us:
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
              <div className="d-flex justify-content-center justify-content-lg-start    align-items-center  h-100">
                <p className="px-2 pb-3  ">+39 0541 0110101</p>
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
                  <span className="d-block">Noctfit@Noctfit.com</span>
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6} className="mb-5 mb-lg-0">
              <h4 className="fw-bold border-bottom border-primary border-3 pb-1 py-3 text-center text-lg-start">
                Follow Us
              </h4>
              <br />
              <div className="d-flex justify-content-start   align-items-center justify-content-center justify-content-lg-start ">
                <i className="bi bi-facebook display-6 mx-2 "></i>
                <i className="bi bi-instagram display-6  mx-2"></i>
                <i className="bi bi-twitter-x display-6  mx-2"></i>
                <i className="bi bi-youtube display-6 mx-2"></i>
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
                Yes, it is necessary for internal politics. You can easily do it
                from your GP and then bring it to us within 3 days of
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
              <Accordion.Body>Your identity card and tax code.</Accordion.Body>
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
      <hr />
      <Row>
        <h2 className="text-center fw-bold mb-5">Leave a review!</h2>
      </Row>
    </Container>
  )
}

export default Contact
