import { useNavigate } from "react-router-dom";

const Tarologie = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <img className="tar-img" src="/img-theme/taro-img-page.jpg" alt=".." />
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
          Tarologie
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
          La tarologie est une pratique de divination qui utilise des cartes de
          tarot pour interpréter les tendances et les événements dans la vie
          d'une personne. Les cartes de tarot sont un ensemble de cartes
          illustrées, chacune avec des symboles, des images et des couleurs qui
          représentent des archétypes et des concepts universels. En matière de
          voyance, un praticien de la tarologie peut utiliser un jeu de tarot
          pour répondre aux questions et fournir des conseils sur divers aspects
          de la vie, tels que la carrière, l'amour, la famille, la santé et la
          spiritualité. Le tarot peut également être utilisé pour interpréter
          les tendances et les événements futurs dans la vie d'une personne. Le
          jeu de tarot le plus couramment utilisé est le Tarot de Marseille, qui
          est composé de 78 cartes divisées en deux groupes : les arcanes
          majeurs et les arcanes mineurs. Les arcanes majeurs sont les 22 cartes
          les plus importantes, chacune avec une signification symbolique
          spécifique, telle que le Mat, l'Impératrice, le Bateleur et le Pendu.
          Les arcanes mineurs sont les 56 cartes restantes, qui sont divisées en
          quatre suites représentant les éléments de l'air, de l'eau, du feu et
          de la terre. Il convient de noter que la tarologie est considérée
          comme une forme d'art divinatoire et qu'elle n'a pas été
          scientifiquement prouvée comme étant une méthode fiable pour prédire
          l'avenir ou fournir des conseils. Cependant, de nombreuses personnes
          trouvent que la tarologie peut offrir des perspectives intéressantes
          sur leur vie et les aider à prendre des décisions éclairées.En
          tarologie, les cartes sont souvent interprétées en fonction de leur
          position dans le tirage. Il existe de nombreuses méthodes différentes
          de tirage de cartes, chacune ayant sa propre signification et son
          propre objectif. Par exemple, un tirage en croix est l'une des
          méthodes les plus courantes et utilise cinq cartes pour fournir des
          informations sur une situation particulière, tandis que le tirage de
          la roue astrologique utilise douze cartes pour représenter les douze
          maisons astrologiques. Il est important de noter que la tarologie est
          une pratique qui nécessite une certaine expérience et une connaissance
          des significations symboliques des cartes. De nombreux praticiens de
          la tarologie ont étudié pendant des années et ont développé leur
          propre interprétation des cartes. Il est également important de garder
          un esprit critique et de ne pas se fier aveuglément aux
          interprétations des praticiens de la tarologie. En outre, la tarologie
          est souvent utilisée en conjonction avec d'autres pratiques de
          divination, telles que l'astrologie, la numérologie et la lecture des
          feuilles de thé, pour fournir une image plus complète de la situation
          ou de la question posée. La combinaison de différentes pratiques de
          divination peut offrir des perspectives intéressantes sur la vie et
          les événements futurs.
        </p>
      </div>
    </>
  );
};
export default Tarologie;
