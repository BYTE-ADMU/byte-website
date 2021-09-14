import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import LandingHero from "../components/landing_hero"
import LandingProjects from "../components/landing_projects"
import LandingCommunity from "../components/landing_community"
import CTA from "../components/cta"

import projects from "../assets/landing/projects-section.png"
import community from "../assets/landing/community.png"

import "./index.scss";

const galleryInfo = [
  "https://ik.imagekit.io/ripzjge77zz/BYTE/BYTE_Website/Landing/community_1_IAqEeryHx.png?updatedAt=1631622808779",
  "https://ik.imagekit.io/ripzjge77zz/BYTE/BYTE_Website/Landing/community_2_-Qy5ZfXmT.png?updatedAt=1631622807802",
  "https://ik.imagekit.io/ripzjge77zz/BYTE/BYTE_Website/Landing/community_3_C5325yHSF.png?updatedAt=1631622807553"
]

const testimonialsInfo = [
  {
    name: "Kianna Zalameda",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet",
    image: "https://ik.imagekit.io/ripzjge77zz/BYTE/BYTE_Website/Landing/testimonial_OslbvN1To.png?updatedAt=1631628186051",
    secret: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet",
  },
  {
    name: "Aidan Olarte",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet",
    image: "https://ik.imagekit.io/ripzjge77zz/BYTE/BYTE_Website/Landing/community_1_IAqEeryHx.png?updatedAt=1631622808779",
    secret: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet",
  }
]

const startupsInfo = [
  {
    name: "Quicklink",
    logo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758",
    founders: [
      {
        name: "M Jim Lee",
        photo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758"
      },
      {
        name: "M Jim Lee",
        photo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758"
      }
    ],
    description: "A business management solution for MSMEs.",
    banner: null
  },
  {
    name: "Quicklink",
    logo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758",
    founders: [
      {
        name: "M Jim Lee",
        photo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758"
      },
      {
        name: "M Jim Lee",
        photo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758"
      }
    ],
    description: "A business management solution for MSMEs.",
    banner: null
  },
  {
    name: "Quicklink",
    logo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758",
    founders: [
      {
        name: "M Jim Lee",
        photo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758"
      },
      {
        name: "M Jim Lee",
        photo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758"
      }
    ],
    description: "A business management solution for MSMEs.",
    banner: null
  },
  {
    name: "Quicklink",
    logo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758",
    founders: [
      {
        name: "M Jim Lee",
        photo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758"
      },
      {
        name: "M Jim Lee",
        photo: "https://ik.imagekit.io/ripzjge77zz/Quicklink_App/logos/shortened/main_logo_white_bg_KREQ84xA8.png?updatedAt=1619785705758"
      }
    ],
    description: "A business management solution for MSMEs.",
    banner: null
  }
]

const IndexPage = () => {
  // const [gallery, useGallery] = useState[galleryInfo]
  // const [testimonials, useTestimonials] = useState[testimonialsInfo]
  // const [startups, useStartups] = useState[startupsInfo]

  return (
    <Layout>
      {/* Hero Section */}
      <LandingHero />

      {/* About Section */}

      {/* Projects Section */}
      <div
        className="
              w-full h-max 2xl:p-32 lg:p-16 md:p-8 p-4
              flex flex-col justify-center content-center items-center
              bg-white bg-contain bg-no-repeat bg-center" 
        style={{
          backgroundImage: `url(${projects})`
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

      {/* Community Section */}
      <div
        className="
              w-full h-max 2xl:p-48 lg:p-24 md:p-8 p-4
              flex flex-col justify-center content-center items-center
              bg-white bg-contain bg-no-repeat bg-center" 
        style={{
          backgroundImage: `url(${community})`
        }}
      >
        <h1 className="font-sans font-bold text-2xl text-gray-darkest text-center">
          Lorem ipsum dolor sit amet, consectetur{" "}
        </h1>
        <p className="font-sans text-base text-gray-darkest text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tristique porttitor amet ac molestie lectus.
        </p>
        <LandingCommunity layout="left"
          gallery={galleryInfo}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus." />
        <LandingCommunity layout="right"
          testimonial={testimonialsInfo[0]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus." />
        <LandingCommunity layout="left"
          startups={startupsInfo}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus." />
      </div>

      {/* CTA */}
      <CTA />
    </Layout>
  )
}

export default IndexPage;