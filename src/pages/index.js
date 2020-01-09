import React, { Component } from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import happyski from "../images/happy-ski-0.jpg"
import belleplagne from "../images/IMG_0151copie.jpg"
import programme from "../images/AFFICHE SKI ASAF 2020 v2.png"
import alpeh from "../images/alpeh3.png"
import logo from "../images/logoASAF.jpeg"

class IndexPage extends Component {
  state = {
    mounted: false,
    num: "03",
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ mounted: true })
      }.bind(this),
      3200
    )
  }

  render() {
    const isLoading = !this.state.mounted
    let div
    if (isLoading) {
      div = (
        <div className="landing">
          {" "}
          <div className="landing__content">
            {" "}
            <img src={logo} alt="" />
          </div>
        </div>
      )
    } else {
      div = (
        <Layout>
          <SEO title="Home" />

          <div className="banner">
            {/* <ScrollAnimation animateIn="fadeIn">
              <h1>LESS TALK. MORE SKI.</h1>
            </ScrollAnimation> */}

            <ScrollAnimation animateIn="fadeIn">
              <img src={happyski} alt="" />
            </ScrollAnimation>

            <h2>
              {" "}
              SKI, SURF, PISTE, HORS-PISTE, ENTRE AMIS OU EN FAMILLE{" "}
              <span style={{ fontWeight: `100`, fontSize: `1.6rem` }}>
                {" "}
                <br />
                DES SÉJOURS POUR RÉPONDRE A TOUTES LES ENVIES DE GLISSE
              </span>
            </h2>
          </div>

          <div className="box-left">
            <div className="box-desc">
              <div className="date">23 MARS - 03 AVRIL</div>
              <h3> ALPE D’HUEZ </h3>
              <h4>
                Formule Hotel Club 4* <br /> All inclusive{" "}
              </h4>
              <div className="tarif"> TARIF ASAF 550€</div>
              <Link to="">
                DÉCOUVRIR{" "}
                <svg
                  width="34"
                  height="8"
                  viewBox="0 0 34 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z"
                    fill="#447BCE"
                  />
                </svg>
              </Link>
            </div>
            <ScrollAnimation animateIn="fadeIn">
              <img src={alpeh} alt="" />
            </ScrollAnimation>
          </div>

          <div className="box-left2">
            <ScrollAnimation animateIn="fadeIn">
              <img src={belleplagne} alt="" />
            </ScrollAnimation>

            <div className="box-desc2">
              <div className="date">11-18 & 18-25 AVRIL </div>
              <h3> BELLE PLAGNE </h3>
              <h4>
                Semaine de ski <br />{" "}
              </h4>
              <div className="tarif"> TARIF ASAF à partir de 529€</div>
              <Link to="/belleplagne">
                DÉCOUVRIR{" "}
                <svg
                  width="34"
                  height="8"
                  viewBox="0 0 34 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z"
                    fill="#447BCE"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="programme">
            <a href="/images/AFFICHE SKI ASAF 2020 v2.pdf" download>
              <ScrollAnimation animateIn="fadeIn">
                <img src={programme} alt="" />
              </ScrollAnimation>

              <br />
              <h3> TÉLÉCHARGER LE PROGRAMME </h3>
            </a>
          </div>
        </Layout>
      )
    }

    return <div>{div}</div>
  }
}

export default IndexPage
