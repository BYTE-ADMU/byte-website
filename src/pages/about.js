// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from "react"
import Layout from "../layouts/default"

// Components
import AboutHero from "../components/about/about-hero"
import LandingProjects from "../components/landing_projects"
import { StaticQuery, graphql } from "gatsby"
import CoreThrusts from "../components/about/core_thrusts"
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

const query = graphql`
  query {
    allStrapiProjects(
      filter: { category: { name: { eq: "flagship" } } }
      sort: { fields: id }
    ) {
      edges {
        node {
          id
          name
          teaser
          color
          logo {
            url
          }
          image_1 {
            url
          }
          image_2 {
            url
          }
        }
      }
    }
    allStrapiGallery(filter: { strapiId: { lte: 3 } }) {
      edges {
        node {
          members {
            url
          }
        }
      }
    }
    strapiTestimonials(strapiId: { eq: 1 }) {
      name
      quote
      image {
        url
      }
    }
    allStrapiStartups(filter: { strapiId: { lte: 3 } }) {
      edges {
        node {
          logo {
            url
          }
        }
      }
    }
  }
`

const seo = {
  siteTitle: "About BYTE",
  siteDescription:
    "This is the official website of BYTE: Building Young Tech Entrepreneurs.",
}

const about = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout seo={seo}>
          <AboutHero />
          <LandingProjects data={data.allStrapiProjects.edges} />
          <CoreThrusts />
        </Layout>
      )}
    />
  )
}

export default about
