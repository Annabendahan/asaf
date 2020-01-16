import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logoASAF.jpeg"
import Menu from "./menu.js"

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      activeStyle={{ fontWeight: "bold" }}
      style={{
        color: `white`,
        textDecoration: `none`,
        boxSizing: "content-box",
      }}
    >
      <img src={logo} alt="" />
    </Link>{" "}
    <div className="navs">
      <Link
        to="/"
        className="nav"
        activeStyle={{ fontWeight: "bold" }}
        style={{
          textDecoration: `none`,
          boxSizing: "content-box",
        }}
      >
        {" "}
        ACCUEIL
      </Link>
      <Link
        to="/alpe-d-huez"
        className="nav"
        activeStyle={{ fontWeight: "bold" }}
        style={{
          textDecoration: `none`,
          boxSizing: "content-box",
        }}
      >
        {" "}
        ALPE D'HUEZ
      </Link>
      <Link
        to="/belleplagne"
        className="nav"
        activeStyle={{ fontWeight: "bold" }}
        style={{
          textDecoration: `none`,
          boxSizing: "content-box",
        }}
      >
        {" "}
        BELLE PLAGNE
      </Link>
      <Link
        to="/tarifs-et-inscriptions"
        className="nav"
        activeStyle={{ fontWeight: "bold" }}
        style={{
          textDecoration: `none`,
          boxSizing: "content-box",
        }}
      >
        {" "}
        TARIFS & INSCRIPTIONS
      </Link>
      <Link
        to="/contact"
        className="nav"
        activeStyle={{ fontWeight: "bold" }}
        style={{
          textDecoration: `none`,
          boxSizing: "content-box",
        }}
      >
        {" "}
        CONTACT
      </Link>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
