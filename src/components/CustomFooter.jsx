import { Link } from 'react-router-dom'

const CustomFooter = () => {
  return (
    <div className="row justify-content-center pt-5  ">
      <div className="col col-6">
        <div className="row">
          <div className="col mb-2">
            <a href="https://www.facebook.com/">
              <i className="bi bi-facebook footer-icon me-2"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="bi bi-instagram footer-icon me-2"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="bi bi-twitter-x footer-icon me-2"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="bi bi-youtube footer-icon"></i>
            </a>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <Link className="" to="/about">
                    Our Brand Center
                  </Link>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Where to find us
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <Link className="" to="/contacts">
                    Contact us
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Gym Description
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Legal Notices
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Tools
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Join us
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Corporate Information
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
            <button
              type="button"
              id="footerbutton"
              className="btn btn-sm  rounded-0 mt-3 "
            >
              <span className="spanbutton">
                <a
                  href="https://www.linkedin.com/in/ciro-vitiello/"
                  className="link-secondary"
                >
                  <i className="bi bi-linkedin mx-3"></i>
                </a>
                <a href="https://github.com/Nooxys" className="link-secondary">
                  <i className="bi bi-github me-3"></i>
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col mb-5 mt-2 copyright">
            © {new Date().getFullYear()} NOCTFIT by Ciro Vitiello
          </div>
        </div>
      </div>
    </div>
  )
}
export default CustomFooter
