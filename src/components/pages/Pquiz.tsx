import { useNavigate } from "react-router-dom";

const Pquiz = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                style={{ paddingBottom: 10, paddingTop: 20 }}
                className="bib-img"
                src="/quiz-img/quiz-cap 1.png"
                alt=".."
              />
            </div>
            <div className="col">
              <img
                style={{ paddingBottom: 10, paddingTop: 20 }}
                className="bib-img"
                src="/quiz-img/quiz-cap 2.png"
                alt=".."
              />
            </div>
            <div className="col">
              <img
                style={{ paddingBottom: 10, paddingTop: 20 }}
                className="bib-img"
                src="/quiz-img/quiz-cap 3.png"
                alt=".."
              />
            </div>
            <hr
              style={{ borderStyle: "solid", color: "#b79e56", borderWidth: 3 }}
            ></hr>
            <div className="row">
              <div className="col">
                <img
                  className="bib-img"
                  src="/quiz-img/quiz-cap 4.png"
                  alt=".."
                />
              </div>
              <div className="col">
                <img
                  style={{ paddingLeft: 8 }}
                  className="bib-img"
                  src="/quiz-img/quiz-cap 5.png"
                  alt=".."
                />
              </div>
              <div className="col">
                <img
                  style={{ paddingLeft: 12 }}
                  className="bib-img"
                  src="/quiz-img/quiz-cap 6.png"
                  alt=".."
                />
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
            NOTRE APP-QUIZ
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
            Notre application de quiz est conçue pour les amateurs de culture
            ésotérique et de culture générale. Elle est composée de quatre
            catégories distinctes de questions pour tester vos connaissances et
            votre intuition. La première catégorie, "Astrologie", vous propose
            des questions sur les signes du zodiaque, les planètes, les maisons
            astrologiques, les transits, etc. La deuxième catégorie,
            "Numérologie", vous invite à découvrir les secrets des nombres, des
            cycles de vie, des nombres de destinée, des nombres karmiques, etc.
            La troisième catégorie, "Tarologie", vous offre des questions sur
            les arcanes majeurs et mineurs du tarot, les différentes méthodes de
            tirage, les significations symboliques, etc. Enfin, la catégorie
            "Culture Générale" vous permet de tester vos connaissances sur
            divers sujets tels que l'histoire, la géographie, la littérature,
            les sciences, etc. Nous sommes convaincus que vous apprécierez cette
            application ludique et instructive qui vous permettra de vous
            divertir tout en enrichissant votre culture personnelle.
          </p>
        </div>
      </section>
    </>
  );
};
export default Pquiz;
