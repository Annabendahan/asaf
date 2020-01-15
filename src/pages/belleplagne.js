import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import belleplagne from "../images/IMG_0151copie.jpg"
import h1 from "../images/HEBERGEMENT/location-belle-plagne-accueil-12.jpg"
import h2 from "../images/HEBERGEMENT/location-belle-plagne-appartement-17.jpg"
import h3 from "../images/HEBERGEMENT/location-belle-plagne-appartement-24.jpg"
import h4 from "../images/HEBERGEMENT/location-belle-plagne-appartement-39.jpg"
import h5 from "../images/HEBERGEMENT/location-belle-plagne-appartement-44.jpg"
import h6 from "../images/HEBERGEMENT/location-belle-plagne-piscine.jpg"
import h7 from "../images/HEBERGEMENT/location-belle-plagne-salon.jpg"
import h8 from "../images/HEBERGEMENT/location-belle-plagne-squat.jpg"

import m1 from "../images/Midi/GOPR2604 copie.jpg"
import m2 from "../images/Midi/IMG_0356 copie.jpg"
import m3 from "../images/Midi/IMG_9941 copie.jpg"
import m4 from "../images/Midi/IMG_9954 copie.jpg"
import m5 from "../images/Midi/IMG_9955 copie.jpg"

import c1 from "../images/Cours/IMG_0117 copie.jpg"
import c2 from "../images/Cours/IMG_0119 copie.jpg"
import c3 from "../images/Cours/IMG_0340 copie.jpg"
import c4 from "../images/Cours/IMG_0384 copie.jpg"
import c5 from "../images/Cours/IMG_0393 copie.jpg"
import c6 from "../images/Cours/IMG_0411 copie.jpg"
import c7 from "../images/Cours/IMG_9917 copie.jpg"
import c8 from "../images/Cours/IMG_9918 copie.jpg"
import c9 from "../images/Cours/IMG_9982 copie.jpg"
import c10 from "../images/Cours/IMG_9987 copie.jpg"

const Belleplagne = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="banner">
      <div className="banner-title">
        <h1>Belle Plagne</h1>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <img src={belleplagne} alt="" />
      </ScrollAnimation>
    </div>
    <div className="text">
      <h3>HEBERGEMENT </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
    <div className="pictures">
      <ScrollAnimation animateIn="fadeIn">
        <img src={h1} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={h2} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={h3} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={h4} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={h5} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={h6} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={h7} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={h8} alt="" />
      </ScrollAnimation>
    </div>
    <div className="text">
      <h3>LE MIDI </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
    <div className="pictures">
      <ScrollAnimation animateIn="fadeIn">
        <img src={m1} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={m2} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={m3} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={m5} alt="" />
      </ScrollAnimation>
    </div>
    <div className="text">
      <h3>LES COURS</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
    <div className="pictures">
      <ScrollAnimation animateIn="fadeIn">
        <img src={c1} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c2} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c3} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c4} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c5} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c6} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c7} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c8} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c9} alt="" />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <img src={c10} alt="" />
      </ScrollAnimation>
    </div>{" "}
    <div className="link">
      <Link to="tarifs-et-inscriptions">VOIR LES TARIFS</Link>{" "}
    </div>
  </Layout>
)

export default Belleplagne
