import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CTA from "../components/cta"
import LandingProjects from "../components/landing_projects"
import LandingHero from "../components/landing_hero"

import section from "../assets/landing/projects-section.png"

const IndexPage = () => (
  <Layout>
    <LandingHero />
    <div
      className="
            w-full h-max 2xl:p-32 lg:p-16 md:p-8 p-4
            flex flex-col justify-center content-center items-center
            bg-white bg-contain bg-no-repeat bg-center" 
      style={{
        backgroundImage: `url(${section})`
      }}
    >
      <h1 className="font-sans font-bold text-2xl text-gray-darkest text-center">
        Lorem ipsum dolor sit amet, consectetur{" "}
      </h1>
      <p className="font-sans text-base text-gray-darkest text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        tristique porttitor amet ac molestie lectus.
      </p>
      <LandingProjects />
    </div>
    <CTA />
  </Layout>
)

export default IndexPage;