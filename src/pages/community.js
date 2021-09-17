import React from "react"
import Layout from '../layouts/default'
import HomeGrownStartups from "../components/homegrown_startups"
import Testimonials from "../components/testimonials"
import "./community.css"

// import community_banner from "../../public/icons/community_banner.png"

import CommunityBanner from "../components/community_banner"
import AnimatedBanner from "../components/animated_banner"

const testimonials_data = [
  {
    id: 1,
    name: "Kirsten Sy",
    position: "BYTE 4 President",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
  {
    id: 2,
    name: "TJ Lao",
    position: "BYTE 3 President",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
  {
    id: 3,
    name: "Lance Villacin",
    position: "BYTE 3 Executive VP",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
]

const seo = {
  siteTitle: "BYTE Community",
  siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const CommunityPage = () => {
  return (
    <Layout seo={seo}>
      <div>
        {/* <CommunityBanner /> */}
        <AnimatedBanner />
        <div className="px-10 py-20 h-full w-full">
          <Testimonials />
        </div>
        <div className="h-full">
          <HomeGrownStartups />
        </div>
      </div>
    </Layout>
  )
}
export default CommunityPage
