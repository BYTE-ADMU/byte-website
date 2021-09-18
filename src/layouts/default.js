/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Store
import { observer } from "mobx-react"
import store from "../store"

import Header from "../components/header"
import Sidebar from "../components/header/sidebar"

import "./default.css"
import "../styles/global.css"

import Footer from "../components/footer"

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
      <Sidebar />

      {store.isOpenSidenav&&(
        <div style={{marginRight:"250px"}}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="min-h-screen">
          {children}
          <Footer />
        </main>
      </div>
      )}

{!store.isOpenSidenav&&(
        <div>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="min-h-screen">
          {children}
          <Footer />
        </main>
      </div>
      )}
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default observer(Layout);
