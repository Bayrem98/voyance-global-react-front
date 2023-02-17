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
          NUMEROLOGIE
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
          L'une des origines de la numérologie serait la guématria, une
          technique herméneutique fondée sur la numération hébraïque. Une autre
          serait l'arithmancie pythagoricienne. Sarah Joanna Dennis (1847-1929,
          ép. L. Dow Balliett)1 est considérée comme la fondatrice de la
          numérologie moderne occidentale.2. En 1905, elle publie sous son nom
          marital un opuscule sur la théorie des vibrations fondée sur
          l'interprétation chiffrée du nom et la date de naissance, How to
          attain success through the strength of vibration : a system of numbers
          as taught by pythagoras3. En 1908, elle développe cette idée dans un
          second ouvrage plus complet, The Philosophy of numbers; their tone and
          colors4. Inspirée par l'harmonie des contraires de Pythagore, Sarah
          Dow Balliett voit le monde comme un ensemble de vibrations s'exprimant
          par des noms et des nombres. En accordant une valeur numérique à
          chaque lettre, elle procède par isopséphies (somme des valeurs
          accordées à chaque lettre dans un mot) et attribue des qualités
          propres à chaque nombre. Par exemple, les personnes dont l'isopséphie
          du nom dans son système est 4, « ne croient pas à l'inspiration et
          dépendent entièrement de leur intellect »3, ou bien : « L'état de
          l'Alabama vibre du nombre 4. Il manque à cet état un principe
          matériel. C'est la parenté individuelle plutôt que la fraternité qui
          domine »4. Le terme isopséphie signifie originellement « égalité des
          votes », du grec isos (égal) et psêphis (caillou, vote). Le but de
          l'isopséphie est donc d'identifier des mots de valeur numérique
          équivalente. Lors de ses conférences à la New Thought Church and
          School, fondée en 1905 à Boston, dans le Massachusetts, elle se lie
          d'amitié avec sa fondatrice, le Dr Julia Seton Sears (1862-1950). Le
          terme de numérologie, un mot hybride composé du latin numerus et du
          grec logia désignant l'étude de la signification occulte des nombres,
          aurait été forgé par Julia Seton Sears pour moderniser le terme de
          Science des noms et des nombres. Il apparaît dans le titre d'un
          ouvrage américain publié en 1914 : Roy Page Walton, Names, Dates, and
          Numbers, a system of numerology5.Grâce à nos modules de calculs
          gratuits, vous pouvez autant de fois que vous le désirez entrer le nom
          et prénom d’une personne, sa date de naissance, si toutefois vous la
          connaissez, et en apprendre beaucoup sur ses failles, ses attributs,
          ce qu’elle aime, ce qu’elle redoute, etc. Si vous êtes dans le doute
          concernant une récente rencontre amoureuse, la numérologie est un
          choix judicieux. Elle vous donnera une tendance, ainsi que des
          informations capitales pour mieux vous situer dans cette plausible
          relation. Une démarche simple, à la fois efficace et ludique, qui vous
          dira si vos deux personnalités sont complémentaires, ou au contraire,
          radicalement opposées. Vous seriez surpris de voir que beaucoup de
          dirigeants d’entreprises, stars, politiques, people, et bien d’autres
          personnalités connues et inconnues, se tournent vers la numérologie
          pour obtenir des informations cruciales. C’est donc en toute
          connaissance de cause que ces personnes averties profitent des
          périodes les plus opportunes, pour mener à terme leurs actions et
          atteindre les objectifs qu’ils se sont fixés. Des grandes firmes, aux
          plus petites entreprises, nombreux sont les recruteurs qui font appel
          aux services de numérologues pour analyser différents profils et ainsi
          recruter les meilleurs. La numérologie répond à toutes les questions
          que vous vous posez et ce, quel soit le domaine concerné. Lorsque l’on
          prend conscience de la justesse et de l’incroyable précision délivrée
          par une étude numérologique, il devient alors difficile de s’en
          passer.Pour bien comprendre le concept de la numérologie.
        </p>
      </div>
    </>
  );
};
export default Numerologie;
