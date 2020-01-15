import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logoASAF.jpeg"
import Menu from "./menu.js"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="header"
      style={{
        margin: `0 auto`,
        display: `flex`,
        width: `100%`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="" />
        </Link>
      </h1>
      <div className="navs">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {" "}
          ACCUEIL
        </Link>
        <Link
          to="/alpe-d-huez"
          style={{
            textDecoration: `none`,
          }}
        >
          {" "}
          ALPE D'HUEZ
        </Link>
        <Link
          to="/belleplagne"
          style={{
            textDecoration: `none`,
          }}
        >
          {" "}
          BELLE PLAGNE
        </Link>
        <Link
          to="/tarifs-et-inscriptions"
          style={{
            textDecoration: `none`,
          }}
        >
          {" "}
          TARIFS & INSCRIPTIONS
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: `none`,
          }}
        >
          {" "}
          CONTACT
        </Link>
      </div>
    </div>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
