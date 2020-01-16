import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import tableau from "../images/2020 TARIFS BELLE PLAGNE.png"

const Contact = () => (
  <Layout>
    <div className="banner">
      <div className="banner-title">
        <h1>Contact</h1>
      </div>
      <div className="banner2">
        <div className="contact">
          {" "}
          <h5>ASAF ROISSY EST</h5>
          <br />
          <br />
          <p> ORGANISATION: Gérard 06 80 37 67 33 - gebendahan@gmail.com</p>
          <p> PERMANENCE ASAF: 01 41 56 61 12</p>
        </div>
      </div>
    </div>
  </Layout>
)
export default Contact
