import { useNavigate } from "react-router-dom";

const Numerologie = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <img className="num-img" src="/img-theme/nume-img-page.jpg" alt=".." />
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
          NUMÉROLOGIE
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
          La numérologie est une pratique de divination qui utilise les nombres
          pour interpréter les tendances de la vie d'une personne. Selon la
          numérologie, chaque nombre a une signification symbolique qui peut
          fournir des informations sur la personnalité, les événements futurs et
          les opportunités dans la vie d'un individu. En matière de voyance, la
          numérologie peut être utilisée pour établir un profil personnel basé
          sur la date de naissance et le nom complet d'une personne. Les
          numérologues attribuent des valeurs numériques aux lettres de
          l'alphabet et aux chiffres de la date de naissance, puis combinent ces
          nombres pour déterminer des tendances et des caractéristiques
          personnelles. Par exemple, en numérologie, on considère que chaque
          nombre de 1 à 9 a une signification particulière. Le nombre 1 est
          associé à l'indépendance et au leadership, le nombre 2 à la
          collaboration et à l'harmonie, le nombre 3 à la créativité et à
          l'expression personnelle, et ainsi de suite. En combinant les valeurs
          numériques des lettres du nom et de la date de naissance, les
          numérologues peuvent établir un profil de personnalité et prédire les
          tendances et les événements futurs dans la vie d'une personne. Comme
          pour l'astrologie, il convient de noter que l'efficacité de la
          numérologie en tant que pratique de divination n'a pas été prouvée
          scientifiquement. Cependant, certaines personnes trouvent que la
          numérologie est utile pour mieux se connaître et prendre des décisions
          éclairées, tandis que d'autres la considèrent comme étant simplement
          une forme de divertissement.En numérologie, il existe également des
          nombres maîtres, tels que 11, 22, 33, qui ont une signification
          particulière et qui ne sont pas réduits à un seul chiffre. Les
          numérologues considèrent que les nombres maîtres ont une énergie
          puissante et qu'ils peuvent avoir un impact plus significatif sur la
          vie d'une personne. La numérologie peut également être utilisée pour
          explorer les relations entre les individus, en utilisant la
          compatibilité numérique pour évaluer les relations amoureuses, les
          partenariats d'affaires et les amitiés. Enfin, il est important de
          noter que la numérologie est une pratique différente de la
          mathématique et de la science, et qu'elle est souvent considérée comme
          une forme d'occultisme. Comme pour toute pratique de divination, il
          est important de garder un esprit critique et de ne pas se fier
          aveuglément aux prédictions ou aux interprétations des numérologues.
        </p>
      </div>
    </>
  );
};
export default Numerologie;
