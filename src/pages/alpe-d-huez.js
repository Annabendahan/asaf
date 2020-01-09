import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import belleplagne from "../images/alpeh3.png"
import a1 from "../images/alpeh1.png"
import a2 from "../images/alpeh2.png"
import a3 from "../images/alpeh3.png"

const Alpedhuez = () => (
  <Layout>
    <div className="banner">
      <h1>ALPE D'HUEZ</h1>
      <ScrollAnimation animateIn="fadeIn">
        <img src={belleplagne} alt="" />
      </ScrollAnimation>
    </div>
    <div className="text">
      <h3>L'ALPE D'HUEZ </h3>
      <p>
        Large, varié et ensoleillé : le domaine de l’Alpe d’Huez séduit toutes
        les envies de neige.
        <br />
        <br />
        Perchée sur un plateau exposé plein sud et bénéficainat d’un
        microclimat, L’Alpe d’Huez peut s’enorgueillir de 300 jours
        d’ensoleillement par an. Son magnifique domaine, regroupant 4 stations
        et 2 villages, étale 250km de pistes, marquées par une grande variété :
        allez vous vous lancer sur la Sarenne, la plus longue piste du monde :
        16 km de descente ininterrompue ? Tenter la piste du Tunnel, qui
        traverse la montagne ? Vous aventurer en freestyle ? Dans la station, à
        1860m d’altitude, oubliez votre voiture et prenez les navettes
        gratuites, qui fonctionnent jour et nuit pour vous mener vers mille
        activités familiales, sportives et festives.
        <br /> <br />
        L’Hôtel Club MMV les Bergers Classé Village de Vacances 4* Idéalement
        situé proche des pistes, votre Hôtel Club vous accueille dans ses
        mini-sites familiales pouvant accueillir jusqu’à 5 personnes ! Le
        restaurant sur deux niveaux et le grand bar sont autant d’invitations à
        la rencontre et à la rencontre et à la convivialité, en famille ou entre
        amis. Le Spa AHIMSA vous attend… pour déconnecter et prendre soin de
        vous.
      </p>
    </div>

    <div className="pictures">
      <ScrollAnimation animateIn="fadeIn">
        <img src={a1} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={a2} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={a3} alt="" />
      </ScrollAnimation>
    </div>

    <div className="link">
      <Link to="tarifs-et-inscriptions">VOIR LES TARIFS</Link>{" "}
    </div>
  </Layout>
)
export default Alpedhuez
