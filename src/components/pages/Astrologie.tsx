import { useNavigate } from "react-router-dom";

const Astrologie = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img
          className="astro-img"
          src="/img-theme/astro-img-page.jpg"
          alt=".."
        />
      </div>
      <hr
        style={{ borderStyle: "solid", color: "#217575", borderWidth: 3 }}
      ></hr>
      <div className="container-fluid" style={{ backgroundColor: "Light" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#b79e56",
            textDecoration: "underline",
          }}
        >
          ASTROLOGIE
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
          L'astrologie est une pratique de divination qui utilise l'étude des
          positions et des mouvements des corps célestes pour interpréter les
          événements et les tendances de la vie des individus et de l'humanité
          dans son ensemble. Les astrologues croient que les positions des
          étoiles, des planètes et des autres corps célestes à un moment donné
          peuvent avoir une influence sur la personnalité, les choix de vie, les
          relations et les événements futurs des individus. En matière de
          voyance, l'astrologie peut être utilisée pour établir un horoscope
          personnel qui fournit des informations sur les tendances de la vie
          d'une personne, les domaines dans lesquels elle est susceptible de
          rencontrer des défis ou des opportunités, ainsi que les périodes
          favorables ou défavorables pour prendre des décisions importantes. Les
          astrologues peuvent également utiliser l'astrologie pour examiner les
          compatibilités entre les personnes, notamment en amour ou en affaires.
          Il est important de noter que l'astrologie est considérée comme une
          pratique controversée et que son efficacité n'a pas été prouvée
          scientifiquement. Certaines personnes trouvent que l'astrologie est
          utile pour mieux se connaître et prendre des décisions éclairées,
          tandis que d'autres la considèrent comme étant simplement une forme de
          divertissement.l'astrologie se base sur l'idée que les corps célestes,
          en particulier le Soleil, la Lune et les planètes du système solaire,
          ont une influence sur la vie sur Terre. Selon l'astrologie, chacun de
          ces corps célestes est associé à certaines caractéristiques, émotions
          et traits de personnalité, et leur position dans le zodiaque au moment
          de la naissance d'une personne peut révéler des informations sur sa
          personnalité et son destin. L'astrologie utilise également les maisons
          astrologiques pour diviser le ciel en douze secteurs, chacun
          correspondant à un domaine de la vie, tels que la carrière, les
          relations, la famille, les finances, etc. Les astrologues utilisent
          ensuite les positions des corps célestes dans les différentes maisons
          pour obtenir des informations supplémentaires sur les tendances et les
          événements dans chaque domaine. Il est important de noter que
          l'astrologie ne doit pas être confondue avec l'astronomie, qui est une
          science basée sur l'étude objective des corps célestes. Alors que
          l'astronomie utilise des méthodes scientifiques pour étudier les
          étoiles, les planètes et les autres objets dans l'espace, l'astrologie
          est considérée comme une pratique plus subjective, basée sur
          l'interprétation des symboles et des motifs associés aux corps
          célestes.
        </p>
      </div>
    </>
  );
};
export default Astrologie;
