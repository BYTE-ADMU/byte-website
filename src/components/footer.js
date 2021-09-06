import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// import facebook from "../../public/icons/facebook.svg"
// import linkedin from "../../public/icons/linkedin.svg"
// import twitter from "../../public/icons/twitter.svg"
// import ig from "../../public/icons/ig.svg"

import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import ig from "../assets/ig.svg"

const about_links = [
  {
    id: 1,
    name: "Vision",
    link: "/vision",
  },
  {
    id: 2,
    name: "Mission",
    link: "/mission",
  },
  {
    id: 3,
    name: "Advocacy",
    link: "/advocacy",
  },
  {
    id: 4,
    name: "Empowerment",
    link: "/empowerment",
  },
  {
    id: 5,
    name: "Core Values",
    link: "/core-values",
  },
  {
    id: 6,
    name: "Core Thrusts",
    link: "/core-thrusts",
  },
]

const projects_links = [
  {
    id: 1,
    name: "Startup Summit",
    link: "/startup-summit",
  },
  {
    id: 2,
    name: "Reboot",
    link: "/reboot",
  },
  {
    id: 3,
    name: "ITECH",
    link: "/itech",
  },
  {
    id: 4,
    name: "FrosBYTE",
    link: "/frosbyte",
  },
  {
    id: 5,
    name: "BYTECamp",
    link: "/bytecamp",
  },
  {
    id: 6,
    name: "Mini Projects",
    link: "/mini-projects",
  },
]

const community_links = [
  {
    id: 1,
    name: "Member Gallery",
    link: "/member-gallery",
  },
  {
    id: 2,
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    id: 3,
    name: "Startups",
    link: "/startups",
  },
]

const social_media = [
  {
    id: 1,
    image: facebook,
    link: "https://facebook.com/BYTE",
  },
  {
    id: 2,
    image: linkedin,
    link: "https://facebook.com/BYTE",
  },
  {
    id: 3,
    image: twitter,
    link: "https://facebook.com/BYTE",
  },
  {
    id: 4,
    image: ig,
    link: "https://facebook.com/BYTE",
  },
]

const Footer = ({ siteTitle }) => (
  <footer className="flex items-center justify-center flex-col bg-gray-400 h-full">
    <div className="flex items-center justify-center w-full px-4 py-4 lg:px-10 lg:py-16 flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-5/12 flex justify-center items-center lg:justify-around lg:items-start flex-col p-6">
        <div className="w-full flex justify-center lg:justify-start lg:items-start">
          {social_media.map((value, key) => {
            return (
              <a
                key={key}
                href={value.link}
                className="w-10 h-10 m-2 bg-white rounded-full flex items-center justify-center text-gray-600"
              >
                <img src={value.image} alt={value.img} className="m-1" />
              </a>
            )
          })}
        </div>

        <div className="flex items-center justify-center lg:items-start lg:justify-start flex-col ml-4">
          <h3 className="mt-2 mb-4 text-white text-sm md:text-md">
            byteadmu@gmail.com
          </h3>
          <div className="flex items-center justify-center mt-10">
            <div className="h-16 w-16 bg-gray-600 mr-4"></div>
            <h3 className="mt-4">BYTE</h3>
          </div>
          <p className="text-xs mt-4 text-center md:text-left">
            © 2021 Building Young Tech Entrepreneurs. All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-start justify-center w-full lg:w-7/12">
        <div className="w-1/3 lg:w-1/4 flex items-start justify-start flex-col m-4">
          <h3>About</h3>
          {about_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="text-sm mb-1 mt-1">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="w-1/3 lg:w-1/4 flex items-start justify-start flex-col m-4">
          <h3>Projects</h3>
          {projects_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="text-sm mb-1 mt-1">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="w-1/3 lg:w-1/4 flex items-start justify-start flex-col m-4">
          <h3>Community</h3>
          {community_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="text-sm mb-1 mt-1">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="w-1/3 lg:w-1/4 flex items-start justify-start flex-col m-4">
          <h3>Partners</h3>
          <p className="text-sm mb-1 mt-1">Coming Soon</p>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
