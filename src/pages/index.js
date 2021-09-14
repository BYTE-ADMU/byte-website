import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CTA from "../components/cta"
import Projects from "../components/projects"
import LandingHero from "../components/landing_hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    <LandingHero />
    <div
      className="
            w-full h-max p-32
            flex flex-col justify-center content-center items-center
            bg-white
    "
    >
      <h1 className="font-sans font-bold text-2xl text-black">
        Lorem ipsum dolor sit amet, consectetur{" "}
      </h1>
      <p className="font-sans text-base text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        tristique porttitor amet ac molestie lectus.
      </p>
      <Projects />
    </div>
    <CTA />
  </Layout>
)

export default IndexPage
