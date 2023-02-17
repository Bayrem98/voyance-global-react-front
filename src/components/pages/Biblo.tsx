import { useNavigate } from "react-router-dom";

const Biblo = () => {
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
                src="/biblo-img/v-anglais.png"
                alt=".."
              />
            </div>
            <div className="col">
              <img
                style={{ paddingBottom: 10, paddingTop: 20 }}
                className="bib-img"
                src="/biblo-img/onebook-anglais.png"
                alt=".."
              />
            </div>
            <div className="col">
              <img
                style={{ paddingBottom: 10, paddingTop: 20 }}
                className="bib-img"
                src="/biblo-img/book-anglais.png"
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
                  src="/biblo-img/v-francais.png"
                  alt=".."
                />
              </div>
              <div className="col">
                <img
                  style={{ paddingLeft: 8 }}
                  className="bib-img"
                  src="/biblo-img/onebook-francais.png"
                  alt=".."
                />
              </div>
              <div className="col">
                <img
                  style={{ paddingLeft: 12 }}
                  className="bib-img"
                  src="/biblo-img/book-francais.png"
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
          <p>
            L'astrologie est désormais considérée comme une pseudoscience
            relevant du charlatanisme1[source insuffisante],2,3[source
            insuffisante],4, une croyance indûment présentée comme scientifique,
            ou comme une superstition5[source insuffisante]. L'astrologie se
            place, par sa méthode même, en dehors du domaine rationnel ou
            scientifique6. Pour l'Association française pour l'information
            scientifique (AFIS) : « Sur un plan scientifique, la validité de
            l’astrologie a été largement mise à l'épreuve et est définitivement
            rejetée. Pour autant, toutes les nombreuses expériences déjà
            réalisées, tout comme celles à venir, ne suffiront pas à convaincre
            les astrologues ou ceux qui croient en leurs prédictions. Là où les
            scientifiques s'intéressent aux faits, les astrologues évaluent la
            satisfaction de leurs clients (et pour les plus cyniques, leur
            chiffre d'affaires et la fréquentation de leur cabinet). »4. De
            nombreux travaux scientifiques ont rigoureusement démonté l'ensemble
            des croyances associées à l'astrologie. Ainsi, sur la relation entre
            personnalité des individus et date de naissance, une étude, basée
            sur deux échantillons de respectivement 4 000 et 15 000 personnes,
            publiée en 2006 et menée par Peter Hartmann du département de
            psychologie de l'Université d'Aarhus, conclut : « cette étude de
            grande échelle ne fournit aucun fait permettant de soutenir
            l'existence de relation entre la date de naissance et des
            différences dans la personnalité et l'intelligence générale »7.
          </p>
        </div>
      </section>
    </>
  );
};
export default Biblo;
