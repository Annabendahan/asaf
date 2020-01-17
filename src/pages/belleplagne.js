import React from "react"
import ReactDOM from "react-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import belleplagne from "../images/image (1).png"
import h1 from "../images/HEBERGEMENT/h1.png"
import h2 from "../images/HEBERGEMENT/h2.png"
import h3 from "../images/HEBERGEMENT/h3.png"
import h4 from "../images/HEBERGEMENT/h4.png"
import h5 from "../images/HEBERGEMENT/h5.png"
import h6 from "../images/HEBERGEMENT/h6.png"

import m1 from "../images/Midi/m1.png"
import m2 from "../images/Midi/m2.png"
import m3 from "../images/Midi/m3.png"
import m4 from "../images/Midi/m4.png"

import c1 from "../images/Cours/c1.png"
import c2 from "../images/Cours/c2.png"
import c3 from "../images/Cours/c3.png"
import c4 from "../images/Cours/c4.png"
import c5 from "../images/Cours/c5.png"
import c6 from "../images/Cours/c6.png"
import c7 from "../images/Cours/c7.png"
import c8 from "../images/Cours/c8.png"
import c9 from "../images/Cours/c9.png"

import acces from "../images/acces.png"
import acces2 from "../images/acces2.png"
const Belleplagne = () => (
  <Layout>
    <SEO title="Belleplagne" />
    <div className="banner">
      <div className="banner-title">
        <h1>Belle Plagne</h1>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <img src={belleplagne} alt="" />
      </ScrollAnimation>
    </div>
    <div className="text">
      <h3>LE SÉJOUR</h3>
      <p>
        {" "}
        Un hébergement en résidence club 4* où chaque famille a son appartement
        dans l’immeuble Le Centaure de Belle Plagne, skis (ou surf) aux pieds,
        en face du jardin des neiges pour les plus petits <br /> Une
        demi-pension avec un repas en altitude tous les midis au restaurant
        l’Arpette, le soir reste à la convenance de chacun douillettement
        installé dans son appartement avec sa famille, les plus petits pouvant
        être tôt au lit pour être en forme le lendemain. Pour les plus
        téméraires, ou les moins sages, on nous a rapporté des soirées animées
        !! <br />
        Le forfait de ski qui permet d’arpenter la station pendant 6 jours, de
        dimanche à vendredi. <br /> Des cours de ski ou de surf pour chacun,
        pour tous niveaux.
      </p>
      <br />
      <br />
      <h3>HEBERGEMENT </h3>
      <p>
        Vous serez hébergés dans la Résidence 4* mmv LE CENTAURE où chaque
        famille ou groupe d'amis aura son appartement (du studio eu 4 pièces)
        spacieux et confortable, décoré avec goût, avec cuisine équipée et
        fonctionnelle. Vous pourrez descendre vous détendredans la belle
        piscineintérieure chauffée, avec vue imprenable sur les pistes
        enneigées.
      </p>
    </div>
    <Carousel showStatus="false">
      <div>
        <img src={h3} alt="hébergement" />
      </div>
      <div>
        <img src={h2} alt="hébergement" />
      </div>
      <div>
        <img src={h4} alt="hébergement" />
      </div>
      <div>
        <img src={h5} alt="hébergement" />
      </div>
      <div>
        <img src={h6} alt="hébergement" />
      </div>
    </Carousel>
    <div className="text">
      <h3>LE MIDI </h3>
      <p>
        Tous les midis, le restaurant l’Arpette nous accueille. Situé au milieu
        des pistes, son accès est facile en ski, mais il peut aussi être atteint
        à pied à partir de notre immeuble (15mn de marche dans la neige).
      </p>
    </div>

    <Carousel showStatus="false">
      <div>
        <img src={m4} alt="midi" />
      </div>
      <div>
        <img src={m2} alt="midi" />
      </div>
      <div>
        <img src={m3} alt="midi" />
      </div>
      <div>
        <img src={m1} alt="midi" />
      </div>
    </Carousel>

    <div className="text">
      <h3>LES COURS</h3>
      <p>
        Les adultes sont répartis par niveau de ski avec des moniteurs ASAF. Les
        jeunes bénéficient des cours des moniteurs de l’ESF (Ecole de ski
        français) et peuvent ainsi passer tous les niveaux proposés (flocons,
        étoiles). Pour ceux qui se sentent l’envie taquiner du piquet, une
        flèche est organisée le jeudi . Suivant la demande, les cours de ski se
        transforment l’après midi en cours de surf (un cours débutant et un
        cours débrouillé). Les meilleurs surfeurs sont encadrés toute la journée
        par un moniteur.
      </p>
    </div>

    <Carousel showStatus="false">
      <div>
        <img src={c1} alt="cours" />
      </div>
      <div>
        <img src={c2} alt="cours" />
      </div>
      <div>
        <img src={c3} alt="cours" />
      </div>
      <div>
        <img src={c4} alt="cours" />
      </div>
      <div>
        <img src={c5} alt="cours" />
      </div>
      <div>
        <img src={c6} alt="cours" />
      </div>
      <div>
        <img src={c7} alt="cours" />
      </div>
      <div>
        <img src={c8} alt="cours" />
      </div>
      <div>
        <img src={c9} alt="cours" />
      </div>
    </Carousel>
    <div className="text">
      <h3>L'ACCÈS</h3>
      <p>
        Le Centaure Belle Plagne <br /> 73210 MACOT LA PLAGNE <br /> 04 79 09 41
        44 <br />
        Coordonnées Gps : 45.506482,6.706935
      </p>
      <br />
      <p>
        - Accès par la route: Autoroute jusqu'à Albertville, puis RN 90 jusqu'à
        Macôt, direction la Plagne. <br />- Accès par le train: Gare d'Aime. TGV
        au départ de Paris <br />- Accès par avion: Aéroport de Lyon St exupéry
        avec liaison bus et SNCF, de Genève-Cointrin avec liaison bus, de
        Chambéry avec liaison bus <br /> - Accès par navette: Navette gratuite
        entre les différentes stations de la Plagne de 8h30 à 23h00. Fréquence
        toute les 1/4 heures <br /> - Acces de Belle plagne à La Plagne
        Bellecote par Télécabine de 8h45 à 00h45 non stop <br /> - Accès à
        l’établissement: Entrée par le parking souterrain "Haut"
      </p>
      <img src={acces} className="acces" alt="cours" />
      <img src={acces2} className="acces" alt="cours" />
    </div>
    <div className="link">
      <Link to="tarifs-et-inscriptions">VOIR LES TARIFS</Link>{" "}
    </div>
  </Layout>
)

export default Belleplagne
