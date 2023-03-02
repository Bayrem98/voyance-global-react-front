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
          L'astrologie est désormais considérée comme une pseudoscience relevant
          du charlatanisme1[source insuffisante],2,3[source insuffisante],4, une
          croyance indûment présentée comme scientifique, ou comme une
          superstition5[source insuffisante]. L'astrologie se place, par sa
          méthode même, en dehors du domaine rationnel ou scientifique6. Pour
          l'Association française pour l'information scientifique (AFIS) : « Sur
          un plan scientifique, la validité de l’astrologie a été largement mise
          à l'épreuve et est définitivement rejetée. Pour autant, toutes les
          nombreuses expériences déjà réalisées, tout comme celles à venir, ne
          suffiront pas à convaincre les astrologues ou ceux qui croient en
          leurs prédictions. Là où les scientifiques s'intéressent aux faits,
          les astrologues évaluent la satisfaction de leurs clients (et pour les
          plus cyniques, leur chiffre d'affaires et la fréquentation de leur
          cabinet). »4. De nombreux travaux scientifiques ont rigoureusement
          démonté l'ensemble des croyances associées à l'astrologie. Ainsi, sur
          la relation entre personnalité des individus et date de naissance, une
          étude, basée sur deux échantillons de respectivement 4 000 et 15 000
          personnes, publiée en 2006 et menée par Peter Hartmann du département
          de psychologie de l'Université d'Aarhus, conclut : « cette étude de
          grande échelle ne fournit aucun fait permettant de soutenir
          l'existence de relation entre la date de naissance et des différences
          dans la personnalité et l'intelligence générale »7. Des résultats
          similaires avaient été trouvés en 2003 par les psychologues Geoffrey
          Dean et Ivan Kelly sur un échantillon de 2 000 personnes8. D'autres
          études et publications ont par ailleurs démontré qu'il n'existait
          aucune cohérence entre ce que pouvaient affirmer plusieurs astrologues
          à propos d'une même personne9[source insuffisante] ou encore que la
          capacité d'un astrologue à déterminer en fonction des signes astraux
          si une personne était introvertie ou extravertie ne valait pas mieux
          que le tirage d'une pièce à pile ou face4. Sur le plan historique,
          l'astrologie remonte au moins au 2e millénaire avant notre ère. Son
          origine serait dans les tentatives de prédiction des changements
          saisonniers et d'interprétation des cycles célestes comme des signes
          de communication divine10[source insuffisante]. De nombreuses cultures
          ont accordé de l'importance aux événements astronomiques, et certaines
          — comme les hindous, les Chinois et les Mayas — ont mis au point des
          systèmes élaborés pour prévoir les événements terrestres à partir des
          observations célestes. L'astrologie occidentale, l'un des plus anciens
          systèmes astrologiques encore en usage, a son origine en Mésopotamie
          (xixe siècle au xviie siècle avant notre ère). Elle s'est propagée
          ensuite au monde hellénistique puis à la Rome antique, au monde arabe
          et finalement à l'Europe centrale et occidentale. L'astrologie
          occidentale contemporaine est le plus souvent associée à des systèmes
          d'horoscopes qui prétendent expliquer les aspects de la personnalité
          d'une personne et prédire des événements significatifs dans leur vie
          future en fonction de la position des objets célestes11[source
          insuffisante],12,13[source insuffisante]. Tout au long de son
          histoire, l'astrologie a appartenu à une tradition savante et était
          courante dans les milieux universitaires, souvent en relation étroite
          avec l'astronomie, l'alchimie, la météorologie et la médecine14[source
          insuffisante]. Elle avait une forte influence sur les milieux
          politiques. Elle est mentionnée dans divers ouvrages littéraires, de
          Dante Alighieri et Geoffrey Chaucer à William Shakespeare, Lope de
          Vega, et Calderón de la Barca. À partir de la fin du xixe siècle et de
          l'adoption de la méthode scientifique.
        </p>
      </div>
    </>
  );
};
export default Astrologie;
