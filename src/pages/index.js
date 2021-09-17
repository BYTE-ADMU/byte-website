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

// const query = graphql`
//   query {

//   }
// `;

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
        <h1 className="font-sans text-2xl font-bold text-center text-gray-darkest">
          Build Hope, Make Change, With Tech{" "}
        </h1>
        <p className="font-sans text-base text-center text-gray-darkest pt-2 pb-8">
          In BYTE, we don't just build young tech entrepreneurs, we make a change and serve as catalysts of the future.
        </p>
        <LandingProjects />
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