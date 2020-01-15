import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import tableau from "../images/2020 TARIFS BELLE PLAGNE.png"
import happyski from "../images/happy-ski-0.jpg"
import f1 from "../images/FORMULAIRE - Inscription sejour ski 2020.pdf"
import f2 from "../images/FORMULAIRE INVITES - Inscription sejour 2020.pdf"

const Tarifs = () => (
  <Layout>
    <div className="banner">
      <div className="banner-title">
        <h1>Tarifs & inscriptions</h1>
      </div>
    </div>
    <div className="banner">
      <ScrollAnimation animateIn="fadeIn">
        <img src={happyski} alt="" />
      </ScrollAnimation>
    </div>

    <h3> ALPE D'HUEZ </h3>
    <div className="tarifs">
      <p> Tarif ASAF - 550 €</p>
      <p> Tarif invité - 660 €</p>
    </div>
    <h3> BELLE PLAGNE </h3>
    <img src={tableau} alt="" />
    <h3> FORMULAIRES </h3>
    <div className="tarifs">
      <a href={f2} download>
        {" "}
        FORMULAIRE ASAF{" "}
      </a>
      <br />
      <a href={f1} download>
        FORMULAIRE INVITÉS
      </a>
    </div>
  </Layout>
)
export default Tarifs
