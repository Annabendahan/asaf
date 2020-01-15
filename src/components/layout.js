/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./style.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="layout"
        style={{
          margin: `0 auto`,

          minHeight: `100vh`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © ASAF {new Date().getFullYear()} - TOUT DROITS RÉSERVÉS - SITE CRÉÉ
          PAR{" "}
          <a href="https://annabdh.com" target="blank">
            {" "}
            <b>ANNA BENDAHAN</b>{" "}
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
