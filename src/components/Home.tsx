import { Carousel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardImg } from "reactstrap";
const Home = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <section>
        <div>
          <Card
            style={{
              color: "#b79e56",
              backgroundColor: "#f9f9f9",
              textAlign: "center",
              fontSize: 30,
              border: 0,
            }}
          >
            <CardBody>
              POUR UTILISER LA BIBLIOTHEQUE ET LE QUIZ IL FAUT D'ABORD
              INSCRIVEZ-VOUS.!!
            </CardBody>
          </Card>
        </div>
      </section>
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
              <FormattedMessage id="title1.page.home" />
            </p>
            <hr style={{ border: "solid", color: "#217575" }}></hr>
            <div className="col">
              <Link
                to="/astrologie"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card className="my-2" color="success" outline>
                  <CardHeader style={{ color: "#217575" }}>
                    <FormattedMessage id="card1.page.home" />
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
                    <FormattedMessage id="card2.page.home" />
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
                    <FormattedMessage id="card3.page.home" />
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
                  <CardHeader style={{ color: "#217575" }}>
                    <FormattedMessage id="card4.page.home" />
                  </CardHeader>
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
              <FormattedMessage id="title2.page.home" />
            </p>
            <hr
              style={{ borderStyle: "solid", color: "#b79e56", borderWidth: 3 }}
            ></hr>
            <div className="col" style={{ textAlign: "center" }}>
              <Link to="/biblo" style={{ textDecoration: "none" }}>
                <Card className="my-2" outline>
                  <CardHeader style={{ color: "#b79e56", fontSize: 20 }}>
                    <FormattedMessage id="card5.page.home" />
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
                    <FormattedMessage id="card6.page.home" />
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
                    <FormattedMessage id="card7.page.home" />
                  </CardHeader>
                  <CardBody>
                    <CardImg src="/img-theme/successful-deal.jpg" />
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <Link
                to="http://tunis0.telemaque.fr/mediawiki/index.php/Accueil"
                style={{ textDecoration: "none" }}
              >
                <Card className="my-2" outline>
                  <CardHeader style={{ color: "#b79e56", fontSize: 20 }}>
                    <FormattedMessage id="card8.page.home" />
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
      <section style={{ paddingBottom: 20 }}>
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
            <img className="slider" src="/home-img/taro-sing-im.jpg" alt="." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/home-img/img-tarot3.jpg" alt="." />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
