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
          <br />
          <br />
          <p>
            "Notre bibliothèque est composée de quatre catégories distinctes
            pour répondre à vos différents besoins de lecture. La première
            catégorie, "Supports Divinatoires", regroupe des ouvrages sur la
            voyance, la divination et les pratiques ésotériques. La deuxième
            catégorie, "Formation Initiale", vous propose des livres pour vous
            initier à de nouveaux domaines de connaissance, que ce soit en
            voyance, en culture général ou en astrologie. La troisième
            catégorie, "Psychologie Humaine", vous offre des ouvrages sur la
            compréhension de l'être humain, sur la santé mentale, la
            communication, la gestion du stress et de l'anxiété. Enfin, la
            catégorie "Divers" vous permet de découvrir des ouvrages variés,
            tels que des romans, des biographies, des livres de buddhisme, etc.
            Nous sommes convaincus que vous trouverez dans notre bibliothèque de
            quoi satisfaire votre soif de savoir et de découverte."
          </p>
        </div>
      </section>
    </>
  );
};
export default Biblo;
