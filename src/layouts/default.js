/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"
import Header from "../components/header"
import "./default.css"
import Footer from "../components/footer"

const Layout = ({ seo, children }) => {
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
      <Helmet
        title={seo.siteTitle}
        titleTemplate={`%s`}
        meta={[
          {
            name: `description`,
            content: seo.siteDescription,
          },
          {
            property: `og:title`,
            content: seo.siteTitle,
          },
          {
            property: `og:description`,
            content: seo.siteDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: `BYTE ADMU`,
          },
          {
            name: `twitter:title`,
            content: seo.siteTitle,
          },
          {
            name: `twitter:description`,
            content: seo.siteDescription,
          },
          {
            name: `og:url`,
            content: `https://byteadmu.com/`,
          },
          // Once thumbnail is available, import image and use here
          // {
          //   name: `og:image`,
          //   content: image,
          // },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} page={seo.siteTitle} />
        <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
