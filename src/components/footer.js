import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './footer.css'

import facebook from "../assets/img/social_icons/facebook.svg"
import linkedin from "../assets/img/social_icons/linkedin.svg"
import twitter from "../assets/img/social_icons/twitter.svg"
import ig from "../assets/img/social_icons/ig.svg"
import bytelogo from "../assets/img/byte-icon-without-text.png"

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
    link: "https://www.facebook.com/byteadmu",
  },
  {
    id: 2,
    image: linkedin,
    link: "https://www.linkedin.com/company/byteadmu/mycompany/",
  },
  {
    id: 3,
    image: twitter,
    link: "https://twitter.com/byteadmu",
  },
  {
    id: 4,
    image: ig,
    link: "https://www.instagram.com/byteadmu/",
  },
]

const Footer = ({ siteTitle }) => (
  <footer className="bottom-0 flex flex-col items-center justify-center h-full bg-gray-lightest drop-shadow-footer">
    <div className="flex flex-col-reverse items-start justify-center w-full px-4 lg:px-10 lg:py-16 lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full p-6 lg:w-5/12 lg:justify-around lg:items-start">
        <div className="flex flex-col justify-center w-full lg:justify-center lg:items-center">
          <h3 className="flex items-center justify-center w-full px-4 lg:items-start items-left lg:justify-start font-bold">
            Contact Us
          </h3>
          <div className="flex justify-center w-full lg:justify-start lg:items-start">
            {social_media.map((value, key) => {
              if (value.id === 1) {
                return (
                  <a
                    key={key}
                    href={value.link}
                    className="flex items-center justify-center w-10 h-10 m-2 rounded-2xl bg-blue-primary hover:bg-blue-secondary"
                  >
                    <img src={value.image} alt={value.img} className="m-1" />
                  </a>
                )
              } else if (value.id === 2) {
                return (
                  <a
                    key={key}
                    href={value.link}
                    className="flex items-center justify-center w-10 h-10 m-2 rounded-2xl bg-purple-primary hover:bg-purple-secondary"
                  >
                    <img src={value.image} alt={value.img} className="m-1" />
                  </a>
                )
              } else if (value.id === 3) {
                return (
                  <a
                    key={key}
                    href={value.link}
                    className="flex items-center justify-center w-10 h-10 m-2 rounded-2xl bg-green-primary hover:bg-green-secondary"
                  >
                    <img src={value.image} alt={value.img} className="m-1" />
                  </a>
                )
              } else if (value.id === 4) {
                return (
                  <a
                    key={key}
                    href={value.link}
                    className="flex items-center justify-center w-10 h-10 m-2 rounded-2xl bg-red-primary hover:bg-red-secondary"
                  >
                    <img src={value.image} alt={value.img} className="m-1" />
                  </a>
                )
              }
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ml-4 lg:items-start lg:justify-start">
          <h3 className="mt-2 mb-4 text-sm text-white md:text-md">
            byteadmu@gmail.com
          </h3>
          <div className="flex items-center justify-center mt-10">
            {/* <div className="w-32 h-16 mr-4"> */}
            <img src={bytelogo} alt="BYTE Logo" className="w-24 h-24 mr-4" />
            {/* </div> */}
            <h3 className="font-bold text-2xl">byte</h3>
          </div>
          <p className="mt-4 text-xs text-center md:text-left">
            © 2021 Building Young Tech Entrepreneurs. All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-center lg:w-7/12 w-full h-full mt-5 lg:mt-0 md:flex-nowrap">
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3 className="font-bold">About</h3>
          {about_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="mt-1 mb-1 text-sm">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3 className="font-bold">Projects</h3>
          {projects_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="mt-1 mb-1 text-sm">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3 className="font-bold">Community</h3>
          {community_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="mt-1 mb-1 text-sm">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3 className="font-bold">Partners</h3>
          <p className="mt-1 mb-1 text-sm">Coming Soon</p>
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
