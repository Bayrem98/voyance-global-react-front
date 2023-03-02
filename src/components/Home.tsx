import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardImg } from "reactstrap";
const Home = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <section>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/home-slider-1.png" alt="." />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/home-slider-n.png" alt="." />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/home-slider-3.jpg" alt="." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/home-slider-4.jpg" alt="." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <br />
      <section>
        <div className="container">
          <div className="row" style={{ textAlign: "center" }}>
            <p className="theme" style={{ color: "#b79e56" }}>
              TOUS NOS THEMES
            </p>
            <hr style={{ border: "solid", color: "#217575" }}></hr>
            <div className="col">
              <Link
                to="/astrologie"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className="my-2" color="success" outline>
                  <CardHeader style={{ color: "#217575" }}>
                    ASTROLOGIE
                  </CardHeader>
                  <CardBody>
                    <CardImg src="/home-img/card-astro.jpg" />
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div className="col">
              <Link
                to="/numerologie"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className="my-2" color="success" outline>
                  <CardHeader style={{ color: "#217575" }}>
                    NUMEROLOGIE
                  </CardHeader>
                  <CardBody>
                    <CardImg src="/home-img/card-numé.jpg" />
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div className="col">
              <Link
                to="/tarologie"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className="my-2" color="success" outline>
                  <CardHeader style={{ color: "#217575" }}>
                    TAROLOGIE
                  </CardHeader>
                  <CardBody>
                    <CardImg src="/home-img/card-taro.jpg" />
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div className="col">
              <Link
                to="/cult"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className="my-2" color="success" outline>
                  <CardHeader style={{ color: "#217575" }}>CULTURE</CardHeader>
                  <CardBody>
                    <CardImg
                      className="img-cul"
                      src="/home-img/card-cult.jpg"
                    />
                  </CardBody>
                </Card>
              </Link>
            </div>
          </div>
          <hr style={{ border: "solid", color: "#217575" }}></hr>
        </div>
      </section>
      <br />
      <section>
        <div className="container">
          <div className="row">
            <p className="activi" style={{ color: "#217575" }}>
              TOUS NOS ACTIVITE
            </p>
            <hr
              style={{ borderStyle: "solid", color: "#b79e56", borderWidth: 3 }}
            ></hr>
            <div className="col" style={{ textAlign: "center" }}>
              <Link to="/biblo" style={{ textDecoration: "none" }}>
                <Card className="my-2" outline>
                  <CardHeader style={{ color: "#b79e56", fontSize: 20 }}>
                    BIBLIOTHEQUE
                  </CardHeader>
                  <CardBody>
                    <CardImg src="/home-img/biblo-img.jpg" />
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <Link to="/pquiz" style={{ textDecoration: "none" }}>
                <Card className="my-2" outline>
                  <CardHeader style={{ color: "#b79e56", fontSize: 20 }}>
                    QUIZ
                  </CardHeader>
                  <CardBody>
                    <CardImg src="/home-img/quiz-img.jpg" />
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <Link to="/forma" style={{ textDecoration: "none" }}>
                <Card className="my-2" outline>
                  <CardHeader style={{ color: "#b79e56", fontSize: 20 }}>
                    FORMATION
                  </CardHeader>
                  <CardBody>
                    <CardImg src="/img-theme/successful-deal.jpg" />
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <Link
                to="http://www.tunis0.telemaque.fr/"
                style={{ textDecoration: "none" }}
              >
                <Card className="my-2" outline>
                  <CardHeader style={{ color: "#b79e56", fontSize: 20 }}>
                    WIKI-COSMO
                  </CardHeader>
                  <CardBody>
                    <CardImg
                      className="img-cul1"
                      src="/home-img/wiki-img.jpg"
                    />
                  </CardBody>
                </Card>
              </Link>
            </div>
          </div>
          <hr
            style={{ borderStyle: "solid", color: "#b79e56", borderWidth: 3 }}
          ></hr>
        </div>
      </section>
      <section style={{paddingBottom: 20}}>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/img-sun.jpg" alt="." />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/img-tarot2.jpg" alt="." />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/img-tarot3.jpg" alt="." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/img-tarot4.jpg" alt="." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
