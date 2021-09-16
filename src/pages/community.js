import React from "react"
import Layout from '../layouts/default'
import HomeGrownStartups from "../components/homegrown_startups"
import Testimonials from "../components/testimonials"

// import community_banner from "../../public/icons/community_banner.png"

import community_banner from '../assets/img/community/community_banner.png'

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

const CommunityPage = () => {
  return (
    <Layout>
    <div className="h-full">
      <img
        src={community_banner}
        alt="Community Banner"
        className="w-full h-full"
      />
      <div className="w-full h-full px-10 py-20">
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
