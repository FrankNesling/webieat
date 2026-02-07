import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import NavBar from "../components/NavBar";

const Layout = ({ children, navbarTitle }) => {
    // TODO: check what it is for
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
        <div>
            <NavBar title={navbarTitle} />
            <main>{children}</main>
        </div>
    </>
  )
}

export default Layout
