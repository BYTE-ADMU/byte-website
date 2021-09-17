import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from 'gatsby';

import Layout from "../layouts/default"
import Seo from "../components/seo"
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
      allStrapiProjects(filter: {category: {name: {eq: "flagship"}}}) {
        edges {
          node {
            id
            name
            description
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
      allStrapiGallery(filter: {strapiId: {lte: 3}}) {
        edges {
          node {
            members {
              url
            }
          }
        }
      }
      strapiTestimonials(strapiId: {eq: 1}) {
        name
        quote
        image {
          url
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

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout >
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
          <h1 className="font-sans text-2xl font-bold text-center text-gray-darkest pb-8">
            Grow with us through these projects.{" "}
          </h1>
          {/* <p className="font-sans text-base text-center text-gray-darkest pt-2 pb-8">
            In BYTE, we don't just build young tech entrepreneurs, we make a change and serve as catalysts of the future.
          </p> */}
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
            We aim to equip the Filipino with Tech Literacy{" "}
          </h1>
          <p className="font-sans text-base text-center text-gray-darkest pt-2 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tristique porttitor amet ac molestie lectus.
          </p>
          <LandingCommunity layout="left"
            gallery={data.allStrapiGallery.edges}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus." />
          <LandingCommunity layout="right"
            testimonial={data.strapiTestimonials}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus." />
          <LandingCommunity layout="left"
            startups={data.allStrapiStartups.edges}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus." />
        </div>

        {/* CTA */}
        <CTA />
      </Layout>
    )}
  />
)

export default IndexPage;