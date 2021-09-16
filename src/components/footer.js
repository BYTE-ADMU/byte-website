import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import facebook from "../assets/img/social_icons/facebook.png"
import linkedin from "../assets/img/social_icons/linkedin.png"
import twitter from "../assets/img/social_icons/twitter.png"
import ig from "../assets/img/social_icons/ig.png"
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
  <footer className="bottom-0 flex flex-col items-center justify-center h-full bg-yellow-secondary drop-shadow-footer">
    <div className="flex flex-col-reverse items-center justify-center w-full px-4 lg:px-10 lg:py-16 lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full p-6 lg:w-5/12 lg:justify-around lg:items-start">
        <div className="flex flex-col justify-center w-full lg:justify-center lg:items-center">
          <h3 className="flex items-center justify-center w-full px-4 lg:items-start items-left lg:justify-start">Contact Us</h3>
          <div className="flex justify-center w-full lg:justify-start lg:items-start">
            {social_media.map((value, key) => {
              return (
                <a
                  key={key}
                  href={value.link}
                  className="flex items-center justify-center w-10 h-10 m-2 rounded-2xl">
                  <img src={value.image} alt={value.img} className="m-1" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ml-4 lg:items-start lg:justify-start">
          <p className="mt-2 mb-4 text-sm text-white md:text-md">
            byteadmu@gmail.com
          </p>
          <div className="flex items-center justify-center mt-10">
            <div className="w-32 h-16 mr-4">
              <img 
              src={bytelogo}
              alt="BYTE Logo"
              ></img>
            </div>
          </div>
          <p className="mt-24 text-xs text-center md:text-left">
            © 2021 Building Young Tech Entrepreneurs. All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-start w-7/12 w-full h-full mt-5 md:flex-nowrap lg:">
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3>About</h3>
          {about_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="mt-1 mb-1 text-sm">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3>Projects</h3>
          {projects_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="mt-1 mb-1 text-sm">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3>Community</h3>
          {community_links.map((value, key) => {
            return (
              <Link key={key} to={value.link} className="mt-1 mb-1 text-sm">
                {value.name}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3>Partners</h3>
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
