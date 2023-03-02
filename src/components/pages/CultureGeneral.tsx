import { useNavigate } from "react-router-dom";

const CultureGeneral = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <img className="cul-img" src="/img-theme/cult-img-page.jpg" alt=".." />
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
          Culture Général
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
          La culture générale n'est pas une discipline académique, comme peuvent
          l'être l'histoire-géographie ou la physique. La culture générale
          regroupe plusieurs disciplines à partir d'un esprit commun, qui est
          celui du dialogue entre les connaissances. Elle représente
          l'indispensable moteur permettant une réflexion autonome. En tant que
          dialogue, elle ne peut être une simple compilation de connaissances.
          Elle ne vise pas une érudition ou un savoir universel. La culture
          générale n'est pas non plus une connaissance mondaine, qui serait
          innée pour les uns ou étrangère aux autres.La culture générale est une
          propédeutique à une connaissance plus spécialisée. Le Prix Nobel de
          Médecine de 1965 François Jacob écrit ainsi que l'utilité de l'école
          est de nourrir les esprits de culture générale pour leur permettre de
          penser. Il déclare que « Ce qui importe, à l'école, c'est moins
          d'acquérir en vrac le plus de connaissances possible que d'apprendre à
          apprendre. La gymnastique intellectuelle qu'implique la vie moderne
          exige de se familiariser aussi bien avec la littérature et l'histoire
          qu'avec les mathématiques et la biologie ». Le monde étant fait d'une
          complexe interconnectivité et s'étant spécialisé, la culture générale
          permet de penser le global de manière complexe. Devant l'impossibilité
          de se spécialiser en tout, la culture générale permet de disposer des
          outils pour saisir les tenants et les aboutissants de problèmes
          spécialisés.La question de la culture générale émaille plusieurs
          textes issus de l'Antiquité. Les sophistes grecs, professeurs
          itinérants, délivraient un savoir général et étaient connus pour avoir
          des connaissances en toute chose. Cette approche du savoir est
          critiquée par Platon, notamment à la fin de l’Euthydème, qui promeut
          la spécialisation. Le philosophe reconnaît néanmoins que
          l'apprentissage de culture générale est ainsi un moment nécessaire du
          projet philosophique en ce qu'elle permet d'acquérir des connaissances
          sans lesquelles la raison tournerait à vide. La notion parvient aux
          romains par l'étude des textes grecs. Le philosophe Cicéron définit
          l’humanitas comme « le traitement à appliquer aux enfants pour qu’ils
          deviennent hommes » dans De oratore. La culture générale est donc un
          outil nécessaire de l'éducation. Dans les Tusculanes, le philosophe
          forge l'expression de « culture de l'âme ».L’idéal de culture s’est
          transmis jusqu’à aujourd’hui, s’incarnant dans des modèles scolaires
          distincts. Cet idéal était discuté et abondé par différents penseurs
          au cours des siècles. René Descartes fait de la culture générale un
          pivot de sa pensée. Selon la première règle pour la direction de
          l'esprit, « Le but des études doit être de diriger l’esprit de manière
          à ce qu’il porte des jugements solides et vrais sur tout ce qui se
          présente à lui ». La culture générale ne se définit donc pas par son
          objet, mais par sa visée : celle d'un support pour bien juger des
          choses. Emmanuel Kant poursuit dans son sens. Il oppose la nature
          (règne des causes déterminées par des lois empiriques) à la culture,
          cette dernière étant le règne de la liberté. La culture est par
          conséquent la marque de l’aptitude des hommes à se donner librement
          des fins qui lui plaisent, en général. La culture générale ne peut
          donc pas être réduite à contenu déterminé, puisqu'elle vise
          précisément à donner à l'homme la possibilité de choisir les fins qui
          déterminent son existence. Si les humanistes se sont concentrés sur la
          vertu de l'homme humaniste, le philosophe allemand George Friedrich
          Hegel critique le projet d'une culture qui ne viserait que
          l’épanouissement de l'individu subjectif.
        </p>
      </div>
    </>
  );
};
export default CultureGeneral;
