import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <section className="section home-2-bg" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container">
            <Row className="align-items-center">
              <Col lg="5">
                <div className="mt-40 home-2-content">
                  <h1 className="text-white font-weight-normal home-2-title display-4 mb-0">
                    ¡Hola! soy Yovanny López
                  </h1>
                  <p className="text-white-70 mt-4 f-15 mb-0">Soy desarrollador web, docente y emprendedor.</p>
                  <div className="mt-5">
                    <Link to="#" className="btn btn-custom mr-4">
                      Ver más
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg="7">
                <div className="mt-40 home-2-content position-relative">
                  <img src="images/yovanny.png" alt="" className="img-fluid mx-auto d-block home-2-img mover-img" />
                  <div className="home-2-bottom-img">
                    <img src="images/homr-2-bg-bottom.png" alt="" className="img-fluid d-block mx-auto" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  </>
)
export default Home;
