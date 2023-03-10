import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forma = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleClick2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <>
      <section>
        <div className="container-fluid" style={{ paddingTop: 30 }}>
          <div className="row">
            <div className="col">
              {" "}
              <img
                style={{ cursor: "pointer" }}
                src="/form-img/form-cap-1.png"
                alt=".."
                height={300}
                width={390}
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
                    src="/form-img/form-cap-1.png"
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
                style={{ cursor: "pointer" }}
                src="/form-img/form-cap-2.png"
                alt=".."
                height={300}
                width={390}
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
                    src="/form-img/form-cap-2.png"
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
              {" "}
              <img
                style={{ cursor: "pointer" }}
                src="/form-img/form-cap-3.png"
                alt=".."
                height={300}
                width={390}
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
                    src="/form-img/form-cap-3.png"
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
            NOTRE DOCUMENT DE FORMATION
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
            Notre espace de formation est conçu pour les professionnels et les
            amateurs de l'ésotérisme qui souhaitent approfondir leurs
            connaissances et développer leurs compétences dans le domaine de la
            voyance et des pratiques divinatoires. Dans cet espace, nous
            proposons des conseils pratiques pour améliorer la relation entre le
            voyant et le client, en mettant l'accent sur l'écoute active,
            l'empathie et la bienveillance. Nous abordons également des sujets
            tels que l'éthique et la déontologie, pour garantir une pratique
            professionnelle et responsable. Nous proposons également une
            formation sur le "Référentiel de Naissance", qui est une méthode de
            lecture du thème astral basée sur les nombres. Cette formation vous
            permettra de découvrir les secrets de votre date de naissance, de
            votre nom et de votre prénom, et de les interpréter pour mieux vous
            connaître et mieux comprendre votre chemin de vie. Enfin, nous
            proposons également une formation en chiromancie, qui est l'art de
            lire les lignes de la main pour prédire l'avenir. Vous apprendrez à
            identifier les différentes lignes de la main, leur signification et
            leur interprétation, pour vous permettre de pratiquer la chiromancie
            avec confiance et précision. Nous sommes convaincus que notre espace
            de formation vous permettra d'acquérir des connaissances solides et
            des compétences pratiques dans le domaine de la voyance et des
            pratiques divinatoires, pour vous permettre de pratiquer en toute
            sécurité et en toute responsabilité.
          </p>
        </div>
      </section>
    </>
  );
};

export default Forma;
