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
          Le tarot divinatoire est un art divinatoire qui utilise les cartes du
          tarot de Marseille ou sous d'autre forme comme le tarot des anges ou
          tarot des égyptiens. Il s'agit d'une forme de cartomancie. C'est l'art
          de tirer les cartes, les tarots1. L'interprétation des cartes de tarot
          – comme oracle ou dans le cadre d'une approche plus psychologique –
          est parfois désignée par des néologismes, comme tarologie. Cette
          pratique repose sur un ensemble de croyances, propres à l'occultisme,
          quant à l'existence de forces mystérieuses ou de liens invisibles
          entre les choses. Dans le milieu occultiste, de nombreuses théories
          attribuent à l'usage divinatoire des cartes de tarot, comme aux cartes
          elles-mêmes, des origines mythiques très diverses : Égypte ancienne,
          Bohémiens, etc. Historiquement, la plus ancienne trace connue de
          l'approche des cartes de tarot comme instrument d'interprétation
          apparaît à Bologne dans la première moitié du xviiie siècle2. Un point
          marquant de son développement apparait vraisemblablement à la fin du
          xviiie siècle, dans l’œuvre d'Antoine Court de Gébelin immédiatement
          prolongée par Jean-Baptiste Alliette, dit “Etteilla”, mais la source
          en est vraisemblablement italienne3. Au xixe siècle, Eliphas Lévi
          développa une théorie qui, associant notamment les 22 cartes majeures
          (nommées arcanes majeurs à partir de 1863, en référence au lexique de
          Paracelse) aux 22 lettres de l’alphabet hébreu, est devenue la
          référence dans le milieu occultiste. À partir du travail de Lévi, de
          nombreux jeux de tarot divinatoire ont été créés au tournant des xixe
          et xxe siècles par différentes sociétés occultistes, essentiellement
          françaises et anglo-saxonnes, chacune désireuse de développer un jeu
          dont l'iconographie et la clé d'interprétation seraient conformes à sa
          doctrine. Parmi les plus célèbres dérivés, on trouve le Tarot de
          Wirth, publié en 1889 par Stanislas de Guaïta et Oswald Wirth, et le
          Tarot Waite-Smith, publié en 1909 par Arthur Edward Waite et Pamela
          Colman-Smith.L'usage divinatoire du tarot pourrait être daté de 1527
          avec la parution du Chaos del Tri per uno, essai littéraire de lecture
          divinatoire avec les cartes de tarot de Teofilo Folengo écrit sous le
          pseudonyme de Merlin Cocai. Toutefois cette source est isolée et
          encore sujette à débats. C'est à la fin du xviiie siècle à Bologne en
          Italie qu'est attesté un des premiers documents connus avec la liste
          de cartes du tarot et leurs significations divinatoires4. Le
          rayonnement du tarot divinatoire fondé sur le tarot de Marseille ou le
          tarot de Besançon prend son essor en France avec Antoine Court de
          Gébelin5 à la fin du xviiie siècle, en pleine période des Lumières.
          L'approche moderne des cartes de tarot comme instrument
          d'interprétation (essentiellement divinatoire) prend sa source dans
          l’œuvre de cet érudit protestant célèbre à l’époque avec son Monde
          Primitif6. Son travail est repris et réinterprété dans les livres
          d'Etteilla de Jean-Baptiste Alliette dit Etteilla, occultiste du
          xviiie siècle qui, penché sur la cartomancie7, décide de restituer aux
          cartes de tarot ce qu’il estime être leur forme primitive, il en
          remodèle l’iconographie8 et il le baptise Livre de Thot. Plus tard,
          Eliphas Lévi dénonce les erreurs d’Etteilla en affirmant que les 22
          Triomphes correspondent aux 22 lettres de l’alphabet hébreu mosaïque9,
          un rapprochement déjà fait dans l'ouvrage de Court de Gébelin sous la
          plume du C. de M10. L'étude de Lévi, plus profonde et complexe,
          devient ainsi la plus importante référence de l'occultisme moderne11.
          Les théories de Lévi sont reprises par de nombreuses confraternités
          occultistes (en particulier dans l'Ordre Kabbalistique de la
          Rose+Croix avec Oswald Wirth, Gerard "Papus" Encausse) et chacune
          d’entre elles réalise de nouvelles cartes de tarot conformes à sa
          propre philosophie.
        </p>
      </div>
    </>
  );
};
export default Tarologie;
