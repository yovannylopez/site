import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <>
    <section className="footer-bg">
      <div className="container">
        <Row>
          <Col lg="4">
            <div className="mb-5">
              <p className="text-uppercase text-dark footer-title mb-4">About Us</p>
              <p className="text-muted f-14">H</p>
            </div>
          </Col>

          <Col lg="8">
            <Row>
              <Col lg="4">
                <div className="mb-5">
                  <p className="text-uppercase text-dark footer-title mb-4">company</p>
                  <ul className="list-unstyled footer-sub-menu">
                    <li className="f-14"><Link to="/" className="text-muted">Monitoring Grader</Link></li>
                    <li className="f-14"><Link to="/" className="text-muted">Job Opening</Link></li>
                    <li className="f-14"><Link to="/" className="text-muted">Customers</Link></li>
                    <li className="f-14"><Link to="/" className="text-muted">Privacy</Link></li>
                  </ul>
                </div>
              </Col>

              <Col lg="4">
                <div className="mb-5">
                  <p className="text-uppercase text-dark footer-title mb-4">support</p>
                  <ul className="list-unstyled footer-sub-menu">
                    <li className="f-14"><Link to="/" className="text-muted">Get Started</Link></li>
                    <li className="f-14"><Link to="/" className="text-muted">Blog</Link></li>
                    <li className="f-14"><Link to="/" className="text-muted">Knowledge Base</Link></li>
                  </ul>
                </div>
              </Col>

              <Col lg="4">
                <div className="mb-5">
                  <p className="text-uppercase text-dark footer-title mb-4">Legal</p>
                  <ul className="list-unstyled footer-sub-menu">
                    <li className="f-14"><Link to="/" className="text-muted">Terms & Conditions</Link></li>
                    <li className="f-14"><Link to="/" className="text-muted">Privacy Policy</Link></li>
                    <li className="f-14"><Link to="/" className="text-muted">Customers</Link></li>
                    <li className="f-14"><Link to="/" className="text-muted">Pricing</Link></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  </>
)

export default Footer;
