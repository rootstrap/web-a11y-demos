import {Helmet} from "react-helmet";

export const AboutPageGoodSemantics = () => {
  return (
    <>
      <Helmet>
        <title>Quiénes Somos | Food App</title>
      </Helmet>
    <section>
      {" "}
      <div className="container px-4 mx-auto">
        <h1 className="h1">¿Quiénes Somos?</h1>
        {/* TODO: Add video with captions */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatus sibi
          videtur esse moriens. <i>Sed haec omittamus;</i>{" "}
          <b>Tum Torquatus: Prorsus, inquit, assentior;</b>
        </p>

        <ol>
          <li>Ergo, si semel tristior effectus est, hilara vita amissa est?</li>
          <li>
            Non quaero, quid dicat, sed quid convenienter possit rationi et
            sententiae suae dicere.
          </li>
          <li>Quis istud possit, inquit, negare?</li>
          <li>
            Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum
            abducas licebit.
          </li>
        </ol>

        <ul>
          <li>Summus dolor plures dies manere non potest?</li>
          <li>Sed quid attinet de rebus tam apertis plura requirere?</li>
        </ul>

        <h2 className="h2">Historia</h2>

        <p>
          Aufidio, praetorio, erudito homine, oculis capto, saepe audiebam, cum
          se lucis magis quam utilitatis desiderio moveri diceret. Rationis enim
          perfectio est virtus; <strong>Et hunc idem dico, inquieta sed ad virtutes</strong> et
          ad vitia nihil interesse. Quid, si etiam iucunda memoria est
          praeteritorum malorum?{" "}
        </p>

        <p>
          Non est enim vitium in oratione solum, sed etiam in moribus. Qua ex
          cognitione facilior facta est investigatio rerum occultissimarum.
          Videamus animi partes, quarum est conspectus illustrior; Memini vero,
          inquam;{" "}
        </p>

        <p>
          Quod autem principium officii quaerunt, melius quam Pyrrho; Aliter
          enim nosmet ipsos nosse non possumus. <strong>Verum tamen cum</strong> de rebus
          grandioribus dicas, ipsae res verba rapiunt;{" "}
          <i>Primum quid tu dicis breve?</i> Nam diligi et carum esse iucundum
          est propterea, quia tutiorem vitam et voluptatem pleniorem efficit.{" "}
        </p>


        <h2 className="h2">Equipo</h2>

        <p>
          Istam voluptatem perpetuam quis potest praestare sapienti? Ratio
          quidem vestra sic cogit. Sin kakan malitiam dixisses, ad aliud nos
          unum certum vitium consuetudo Latina traduceret. Itaque ad tempus ad
          Pisonem omnes. Nec enim, omnes avaritias si aeque avaritias esse
          dixerimus, sequetur ut etiam aequas esse dicamus. Prioris generis est
          docilitas, memoria;{" "}
        </p>
      </div>
    </section>
    </>
  );
};
