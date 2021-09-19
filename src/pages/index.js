import React from "react"
import { StaticQuery, graphql } from 'gatsby';

import Layout from "../layouts/default"
import Button from "../components/button"

import LandingHero from "../components/landing_hero"
import LandingAbout from "../components/landing_about"
import LandingProjects from "../components/landing_projects"
import LandingCommunity from "../components/landing_community"
import CTA from "../components/cta"

import projects from "../assets/img/landing/projects-section.png"
import community from "../assets/img/landing/community.png"

import "./index.css";
import "./globals.scss";

// Query data from Strapi
const query = graphql`
    query {
      allStrapiProjects(filter: {category: {name: {eq: "flagship"}}}, sort: {fields: id}) {
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
      allStrapiGallery(filter: {strapiId: {lte: 5}}) {
        edges {
          node {
            members {
              url
            }
          }
        }
      }
      allStrapiTestimonials(filter: {strapiId: {lte: 4}}) {
        edges {
          node {
            name
            quote
            image {
              url
            }
          }
        }
      }
      allStrapiStartups(filter: {strapiId: {lte: 3}}) {
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
  siteTitle: "Home",
  siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout seo={seo}>
        {/* Hero Section */}
        <LandingHero />
        {/* End of Hero Section */}

        {/* About Section */}
        <LandingAbout />
        {/* End of About Section */}

        {/* Projects Section */}
        <div
          className="flex flex-col items-center content-center justify-center w-full p-4 bg-white bg-center bg-no-repeat bg-contain h-max 2xl:p-32 lg:p-16 md:p-8" 
          style={{
            backgroundImage: `url(${projects})`
          }}
        >
          <h1 className="font-sans text-2xl font-bold text-center text-gray-darkest pb-1">
            Grow with us through these projects.{" "}
          </h1>
          <p className="font-sans text-base text-center text-gray-darkest pt-2 pb-8">
            We spark initiatives that aim to  inspire the youth, and give a platform to enact positive change.
          </p>
          <LandingProjects data={data.allStrapiProjects.edges} />
        </div>

        {/* Community Section */}
        <div
          className="flex flex-col items-center content-center justify-center w-full p-4 bg-white bg-center bg-no-repeat bg-contain h-max 2xl:p-48 lg:p-24 md:p-8" 
          style={{
            backgroundImage: `url(${community})`
          }}
        >
          <h1 className="font-sans text-2xl font-bold text-center text-gray-darkest">
            Make memories with our awesome comm-YOU-nity!{" "}
          </h1>
          <p className="font-sans text-base text-center text-gray-darkest pt-2 pb-8">
            Forge unforgettable moments with BYTE — ones that you'll always cherish .
          </p>
          <LandingCommunity layout="left"
            gallery={data.allStrapiGallery.edges}
            description="Meet your future wedding guests, grad trip mates and eating buddies! It's rarely a dull moment here with us!" />
          <LandingCommunity layout="right"
            testimonials={data.allStrapiTestimonials.edges}
            description="Find those friends you'll struggle and thrive with! Either in academics, leisure, or projects, we gotchu!" />
          <LandingCommunity layout="left"
            startups={data.allStrapiStartups.edges}
            description="There are no better startup partners than people who hold you accountable. You might meet them here in BYTE!" />
          <Button type="primary" label="Learn More" link="/community" className="my-16" />
        </div>

        {/* CTA */}
        <CTA />
      </Layout>
    )}
  />
)

export default IndexPage;