import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Biblo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleClick2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const handleClick3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const handleClick4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  const handleClick5 = () => {
    setIsExpanded5(!isExpanded5);
  };

  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                style={{ paddingBottom: 10, paddingTop: 20, cursor: "pointer" }}
                className="bib-img"
                src="/biblo-img/v-anglais.png"
                alt=".."
                onClick={handleClick}
              />
              {isExpanded && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 9999,
                  }}
                  onClick={handleClick}
                >
                  <img
                    src="/biblo-img/v-anglais.png"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="col">
              <img
                style={{ paddingBottom: 10, paddingTop: 20, cursor: "pointer" }}
                className="bib-img"
                src="/biblo-img/onebook-anglais.png"
                alt=".."
                onClick={handleClick1}
              />
              {isExpanded1 && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 9999,
                  }}
                  onClick={handleClick1}
                >
                  <img
                    src="/biblo-img/onebook-anglais.png"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>
              )}
            </div>

            <div className="col">
              <img
                style={{ paddingBottom: 10, paddingTop: 20, cursor: "pointer" }}
                className="bib-img"
                src="/biblo-img/book-anglais.png"
                alt=".."
                onClick={handleClick2}
              />
              {isExpanded2 && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 9999,
                  }}
                  onClick={handleClick2}
                >
                  <img
                    src="/biblo-img/book-anglais.png"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>
              )}
            </div>
            <hr
              style={{ borderStyle: "solid", color: "#b79e56", borderWidth: 3 }}
            ></hr>
            <div className="row">
              <div className="col">
                <img
                  className="bib-img"
                  src="/biblo-img/v-francais.png"
                  alt=".."
                  onClick={handleClick3}
                  style={{ cursor: "pointer" }}
                />
                {isExpanded3 && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      zIndex: 9999,
                    }}
                    onClick={handleClick3}
                  >
                    <img
                      src="/biblo-img/v-francais.png"
                      style={{
                        maxWidth: "80%",
                        maxHeight: "80%",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="col">
                <img
                  style={{ paddingLeft: 8, cursor: "pointer" }}
                  className="bib-img"
                  src="/biblo-img/onebook-francais.png"
                  alt=".."
                  onClick={handleClick4}
                />
                {isExpanded4 && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      zIndex: 9999,
                    }}
                    onClick={handleClick4}
                  >
                    <img
                      src="/biblo-img/onebook-francais.png"
                      style={{
                        maxWidth: "80%",
                        maxHeight: "80%",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="col">
                <img
                  style={{ paddingLeft: 12, cursor: "pointer" }}
                  className="bib-img"
                  src="/biblo-img/book-francais.png"
                  alt=".."
                  onClick={handleClick5}
                />
                {isExpanded5 && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      zIndex: 9999,
                    }}
                    onClick={handleClick5}
                  >
                    <img
                      src="/biblo-img/book-francais.png"
                      style={{
                        maxWidth: "80%",
                        maxHeight: "80%",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{ borderStyle: "solid", color: "#b79e56", borderWidth: 3 }}
        ></hr>
        <div className="container-fluid" style={{ backgroundColor: "Light" }}>
          <h1
            style={{
              textAlign: "center",
              color: "#b79e56",
              textDecoration: "underline",
            }}
          >
            NOTRE BIBLIOTHEQUE
          </h1>
          <img
            src="/home-img/previous (2).png"
            alt="img"
            height={35}
            width={35}
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
          <br />
          <br />
          <p>
            Notre biblioth??que est compos??e de quatre cat??gories distinctes pour
            r??pondre ?? vos diff??rents besoins de lecture. La premi??re cat??gorie,
            "Supports Divinatoires", regroupe des ouvrages sur la voyance, la
            divination et les pratiques ??sot??riques. La deuxi??me cat??gorie,
            "Formation Initiale", vous propose des livres pour vous initier ?? de
            nouveaux domaines de connaissance, que ce soit en voyance, en
            culture g??n??ral ou en astrologie. La troisi??me cat??gorie,
            "Psychologie Humaine", vous offre des ouvrages sur la compr??hension
            de l'??tre humain, sur la sant?? mentale, la communication, la gestion
            du stress et de l'anxi??t??. Enfin, la cat??gorie "Divers" vous permet
            de d??couvrir des ouvrages vari??s, tels que des romans, des
            biographies, des livres de buddhisme, etc. Nous sommes convaincus
            que vous trouverez dans notre biblioth??que de quoi satisfaire votre
            soif de savoir et de d??couverte.
          </p>
        </div>
      </section>
    </>
  );
};
export default Biblo;
