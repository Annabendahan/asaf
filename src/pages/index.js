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
    mounted2: false,
    num: "03",
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
    l6: false,
    l7: false,
    l8: false,
    l9: false,
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ mounted: true })
      }.bind(this),
      2200
    )
    setTimeout(
      function() {
        this.setState({ mounted2: true })
      }.bind(this),
      3200
    )
    setTimeout(
      function() {
        this.setState({ l1: true })
      }.bind(this),
      100
    )
    setTimeout(
      function() {
        this.setState({ l2: true })
      }.bind(this),
      200
    )
    setTimeout(
      function() {
        this.setState({ l3: true })
      }.bind(this),
      300
    )
    setTimeout(
      function() {
        this.setState({ l4: true })
      }.bind(this),
      400
    )
    setTimeout(
      function() {
        this.setState({ l5: true })
      }.bind(this),
      500
    )
    setTimeout(
      function() {
        this.setState({ l6: true })
      }.bind(this),
      600
    )
    setTimeout(
      function() {
        this.setState({ l7: true })
      }.bind(this),
      700
    )
    setTimeout(
      function() {
        this.setState({ l8: true })
      }.bind(this),
      800
    )
    setTimeout(
      function() {
        this.setState({ l9: true })
      }.bind(this),
      900
    )
  }

  render() {
    return (
      <div>
        <div
          className="landing"
          style={{
            opacity: this.state.mounted ? 0 : 1,
            display: this.state.mounted2 ? "none" : "block",
            transition: "1s opacity ease-out",
          }}
        >
          {" "}
          <div className="landing__content">
            {" "}
            <p>
              {" "}
              {this.state.l1 ? "B" : null} {this.state.l2 ? "I" : null}{" "}
              {this.state.l3 ? "E" : null} {this.state.l4 ? "N" : null}{" "}
              {this.state.l5 ? "V" : null} {this.state.l6 ? "E" : null}{" "}
              {this.state.l7 ? "N" : null} {this.state.l7 ? "U" : null}{" "}
              {this.state.l7 ? "E" : null}
            </p>
          </div>
        </div>
        <Layout>
          <SEO title="ASAF SKI" />

          <div
            className="home"
            style={{
              display: this.state.mounted ? "block" : "none",
            }}
          >
            <div className="box-banner">
              <div className="box-banner__left">
                <h1>
                  {" "}
                  Envie <br />
                  de glisse?
                </h1>
                <p>
                  {" "}
                  SKI, SURF, PISTE, HORS-PISTE, ENTRE AMIS OU EN FAMILLE !{" "}
                </p>
              </div>
              <div className="box-banner__right">
                <svg
                  width="39"
                  height="54"
                  viewBox="0 0 39 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.02 4.39C4.94 4.29667 4.83333 4.20667 4.7 4.12C4.56667 4.03333 4.41667 3.95667 4.25 3.89C4.08333 3.81667 3.9 3.76 3.7 3.72C3.50667 3.67333 3.30333 3.65 3.09 3.65C2.53667 3.65 2.13 3.75333 1.87 3.96C1.61667 4.16667 1.49 4.45 1.49 4.81C1.49 5.00333 1.52667 5.16333 1.6 5.29C1.67333 5.41667 1.78667 5.52667 1.94 5.62C2.1 5.70667 2.29667 5.78333 2.53 5.85C2.76333 5.91667 3.04 5.98667 3.36 6.06C3.72667 6.14 4.05667 6.23333 4.35 6.34C4.65 6.44 4.90333 6.56667 5.11 6.72C5.32333 6.87333 5.48333 7.06 5.59 7.28C5.70333 7.5 5.76 7.77 5.76 8.09C5.76 8.43 5.69333 8.72667 5.56 8.98C5.42667 9.22667 5.24333 9.43333 5.01 9.6C4.78333 9.76 4.51333 9.88 4.2 9.96C3.88667 10.0333 3.54667 10.07 3.18 10.07C2.63333 10.07 2.11333 9.98667 1.62 9.82C1.13333 9.64667 0.69 9.39667 0.29 9.07L0.72 8.31C0.826667 8.42333 0.963333 8.53667 1.13 8.65C1.30333 8.76333 1.49667 8.86667 1.71 8.96C1.93 9.04667 2.16333 9.12 2.41 9.18C2.66333 9.23333 2.92667 9.26 3.2 9.26C3.70667 9.26 4.1 9.17 4.38 8.99C4.66 8.81 4.8 8.54 4.8 8.18C4.8 7.98 4.75333 7.81333 4.66 7.68C4.57333 7.54 4.44333 7.42 4.27 7.32C4.09667 7.22 3.88 7.13333 3.62 7.06C3.36667 6.98 3.07667 6.9 2.75 6.82C2.39 6.73333 2.07333 6.64 1.8 6.54C1.52667 6.44 1.29667 6.32 1.11 6.18C0.93 6.04 0.793333 5.87 0.7 5.67C0.606667 5.47 0.56 5.23 0.56 4.95C0.56 4.61 0.623333 4.31 0.75 4.05C0.876667 3.79 1.05333 3.57 1.28 3.39C1.50667 3.21 1.77667 3.07667 2.09 2.99C2.40333 2.89667 2.74333 2.85 3.11 2.85C3.59 2.85 4.02333 2.92333 4.41 3.07C4.79667 3.21667 5.14 3.41333 5.44 3.66L5.02 4.39ZM6.48375 6.4C6.48375 5.97333 6.55708 5.55 6.70375 5.13C6.85708 4.70333 7.07708 4.32333 7.36375 3.99C7.65708 3.65 8.01375 3.37667 8.43375 3.17C8.85375 2.96333 9.33042 2.86 9.86375 2.86C10.4971 2.86 11.0404 3.00333 11.4938 3.29C11.9471 3.57667 12.2838 3.95 12.5038 4.41L11.7938 4.87C11.6871 4.64333 11.5571 4.45333 11.4038 4.3C11.2571 4.14667 11.0938 4.02333 10.9138 3.93C10.7404 3.83667 10.5604 3.77 10.3738 3.73C10.1871 3.69 10.0038 3.67 9.82375 3.67C9.43042 3.67 9.08042 3.75333 8.77375 3.92C8.47375 4.08 8.22042 4.29333 8.01375 4.56C7.80708 4.82 7.65042 5.11667 7.54375 5.45C7.44375 5.77667 7.39375 6.10667 7.39375 6.44C7.39375 6.81333 7.45375 7.17 7.57375 7.51C7.70042 7.84333 7.87375 8.14 8.09375 8.4C8.31375 8.66 8.57375 8.86667 8.87375 9.02C9.17375 9.17333 9.50042 9.25 9.85375 9.25C10.0404 9.25 10.2304 9.22667 10.4238 9.18C10.6238 9.13333 10.8138 9.06 10.9938 8.96C11.1738 8.85333 11.3404 8.72333 11.4938 8.57C11.6538 8.41 11.7838 8.22 11.8838 8L12.6338 8.41C12.5204 8.67667 12.3604 8.91333 12.1538 9.12C11.9538 9.32 11.7238 9.49 11.4638 9.63C11.2104 9.77 10.9404 9.87667 10.6538 9.95C10.3671 10.0233 10.0871 10.06 9.81375 10.06C9.32708 10.06 8.88042 9.95333 8.47375 9.74C8.06708 9.52667 7.71375 9.25 7.41375 8.91C7.12042 8.56333 6.89042 8.17333 6.72375 7.74C6.56375 7.3 6.48375 6.85333 6.48375 6.4ZM13.7602 10V2.9H16.8002C17.1135 2.9 17.4002 2.96667 17.6602 3.1C17.9268 3.22667 18.1535 3.4 18.3402 3.62C18.5335 3.83333 18.6835 4.07667 18.7902 4.35C18.8968 4.61667 18.9502 4.89 18.9502 5.17C18.9502 5.41667 18.9135 5.65667 18.8402 5.89C18.7735 6.11667 18.6735 6.32333 18.5402 6.51C18.4135 6.69667 18.2568 6.85667 18.0702 6.99C17.8902 7.12333 17.6868 7.22 17.4602 7.28L19.1802 10H18.1602L16.5402 7.45H14.6602V10H13.7602ZM14.6602 6.65H16.8102C16.9968 6.65 17.1635 6.61 17.3102 6.53C17.4635 6.45 17.5935 6.34333 17.7002 6.21C17.8068 6.07 17.8902 5.91 17.9502 5.73C18.0102 5.55 18.0402 5.36333 18.0402 5.17C18.0402 4.97 18.0035 4.78333 17.9302 4.61C17.8635 4.43 17.7702 4.27333 17.6502 4.14C17.5368 4 17.4002 3.89333 17.2402 3.82C17.0868 3.74 16.9235 3.7 16.7502 3.7H14.6602V6.65ZM23.2124 10.05C22.7124 10.05 22.2558 9.95 21.8424 9.75C21.4358 9.54333 21.0858 9.27333 20.7924 8.94C20.4991 8.6 20.2724 8.21333 20.1124 7.78C19.9524 7.34667 19.8724 6.90333 19.8724 6.45C19.8724 5.97667 19.9558 5.52333 20.1224 5.09C20.2958 4.65667 20.5324 4.27333 20.8324 3.94C21.1324 3.60667 21.4858 3.34333 21.8924 3.15C22.3058 2.95 22.7524 2.85 23.2324 2.85C23.7324 2.85 24.1858 2.95667 24.5924 3.17C24.9991 3.37667 25.3491 3.65 25.6424 3.99C25.9358 4.33 26.1624 4.71667 26.3224 5.15C26.4824 5.57667 26.5624 6.01333 26.5624 6.46C26.5624 6.93333 26.4758 7.38667 26.3024 7.82C26.1358 8.25333 25.9024 8.63667 25.6024 8.97C25.3091 9.29667 24.9558 9.56 24.5424 9.76C24.1358 9.95333 23.6924 10.05 23.2124 10.05ZM20.7824 6.45C20.7824 6.81 20.8391 7.16 20.9524 7.5C21.0724 7.83333 21.2391 8.13 21.4524 8.39C21.6658 8.65 21.9224 8.85667 22.2224 9.01C22.5224 9.16333 22.8558 9.24 23.2224 9.24C23.6024 9.24 23.9424 9.16 24.2424 9C24.5424 8.83333 24.7958 8.62 25.0024 8.36C25.2158 8.09333 25.3758 7.79333 25.4824 7.46C25.5958 7.12667 25.6524 6.79 25.6524 6.45C25.6524 6.09 25.5924 5.74333 25.4724 5.41C25.3591 5.07 25.1924 4.77333 24.9724 4.52C24.7591 4.26 24.5024 4.05333 24.2024 3.9C23.9091 3.74667 23.5824 3.67 23.2224 3.67C22.8424 3.67 22.5024 3.75 22.2024 3.91C21.9024 4.07 21.6458 4.28 21.4324 4.54C21.2258 4.8 21.0658 5.09667 20.9524 5.43C20.8391 5.76333 20.7824 6.10333 20.7824 6.45ZM27.8129 10V2.9H28.7129V9.2H32.6729V10H27.8129ZM33.6527 10V2.9H34.5527V9.2H38.5127V10H33.6527Z"
                    fill="#072656"
                  />
                  <path
                    d="M18.6464 53.3838C18.8417 53.5791 19.1583 53.5791 19.3536 53.3838L22.5355 50.2019C22.7308 50.0066 22.7308 49.69 22.5355 49.4947C22.3403 49.2995 22.0237 49.2995 21.8284 49.4947L19 52.3232L16.1716 49.4947C15.9763 49.2995 15.6597 49.2995 15.4645 49.4947C15.2692 49.69 15.2692 50.0066 15.4645 50.2019L18.6464 53.3838ZM18.5 19.9697V53.0303H19.5V19.9697H18.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            <div className="banner">
              {/* <ScrollAnimation animateIn="fadeIn">
              <h1>LESS TALK. MORE SKI.</h1>
            </ScrollAnimation> */}

              <img
                style={{
                  opacity: this.state.mounted2 ? 1 : 0,
                  transition: "1s opacity ease-out",
                }}
                src={belleplagne}
                alt=""
              />
            </div>
            <br />
            <h3> DÉCOUVREZ NOS SÉJOURS</h3>

            <div className="box-left">
              <div className="box-desc">
                <Link to="/alpe-d-huez">
                  <div className="date">23 MARS - 03 AVRIL</div>
                  <h2> Alpe d'huez </h2>
                  <p>
                    FORMULE HOTEL CLUB 4* <br />
                    TARIF ASAF 550€
                  </p>
                </Link>
              </div>

              <Link to="/alpe-d-huez">
                <ScrollAnimation animateIn="fadeIn">
                  <img className="s-pic" src={alpeh} alt="" />
                </ScrollAnimation>
              </Link>
            </div>

            <div className="box-left2">
              <Link to="/belleplagne">
                <ScrollAnimation animateIn="fadeIn">
                  <img className="s-pic" src={belleplagne} alt="" />
                </ScrollAnimation>
              </Link>

              <div className="box-desc2">
                <Link to="/belleplagne">
                  <div className="date">11-18 & 18-25 AVRIL </div>
                  <h2> Belle Plagne </h2>
                  <p>
                    SEMAINE DE SKI <br /> TARIF ASAF à partir de 529€{" "}
                  </p>
                </Link>
              </div>
            </div>

            <div className="programme">
              <a href={programme} download>
                <ScrollAnimation animateIn="fadeIn">
                  <img src={programme} alt="" />
                </ScrollAnimation>

                <br />
                <h3> TÉLÉCHARGER LE PROGRAMME </h3>
              </a>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default IndexPage
