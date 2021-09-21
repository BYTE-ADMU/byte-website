import * as React from "react"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import facebook from "../assets/img/social_icons/facebook.png"
import linkedin from "../assets/img/social_icons/linkedin.png"
import twitter from "../assets/img/social_icons/twitter.png"
import ig from "../assets/img/social_icons/ig.png"
import bytelogo from "../assets/img/byte-icon-with-text.png"


const about_links = [
  {
    id: 1,
    name: "Values",
    link: "/about#values",
  },
  {
    id: 2,
    name: "Goals",
    link: "/about#goals",
  },
  {
    id: 3,
    name: "Core Thrusts",
    link: "/about",
  },
]

const projects_links = [
  {
    id: 1,
    name: "Flagship",
    link: "/projects#flagship",
  },
  {
    id: 2,
    name: "Growth",
    link: "/projects#growth",
  },
]

const community_links = [
  {
    id: 1,
    name: "Bits",
    link: "/community",
  },
  {
    id: 2,
    name: "Testimonials",
    link: "/community#testimonials",
  },
  {
    id: 3,
    name: "Startups",
    link: "/community#startups",
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
  <footer className="bottom-0 flex flex-col items-center justify-center h-full bg-gray-lightest shadow-inner shadow-2xl">
    <div className="flex flex-col-reverse items-start justify-center w-full px-4 lg:px-10 lg:py-16 lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full p-6 lg:w-5/12 lg:justify-around lg:items-start">
        <div className="flex flex-col justify-center w-full lg:justify-center lg:items-center">
          <h3 className="flex items-center justify-center w-full pl-2 lg:items-start items-left lg:justify-start font-bold">
            Contact Us
          </h3>
          <div className="flex justify-center w-full py-2 lg:justify-start lg:items-start">
            {social_media.map((value, key) => {
              return (
                <a
                  key={key}
                  href={value.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 m-2 rounded-2xl"
                >
                  <img src={value.image} alt={value.img} className="m-1" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ml-2 lg:items-start lg:justify-start">
          <h3 className="mt-2 mb-4 text-sm text-white md:text-md">
            byteadmu@gmail.com
          </h3>
          <div className="flex items-center justify-center mt-10">
            {/* <div className="w-32 h-16 mr-4"> */}
            <img src={bytelogo} alt="BYTE Logo" className="w-auto h-12 mr-4" />
            {/* </div> */}
            {/* <h3 className="font-bold text-2xl">byte</h3> */}
          </div>
          <p className="mt-24 text-xs text-center md:text-left">
            © 2021 Building Young Tech Entrepreneurs. All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-center pl-6 sm:pl-24 lg:pl-0 lg:w-7/12 w-full h-full mt-5 lg:mt-0 md:flex-nowrap">
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3 className="font-bold pt-2.5 pb-4">About</h3>
          {about_links.map((value, key) => {
            return (
              <AnchorLink key={key} to={value.link} className="mt-1 mb-1 text-sm transition duration-300 ease-in-out hover:text-yellow-primary">
                {value.name}
              </AnchorLink>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3 className="font-bold pt-2.5 pb-4">Projects</h3>
          {projects_links.map((value, key) => {
            return (
              <AnchorLink key={key} to={value.link} className="mt-1 mb-1 text-sm transition duration-300 ease-in-out hover:text-purple-primary">
                {value.name}
              </AnchorLink>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3 className="font-bold pt-2.5 pb-4">Community</h3>
          {community_links.map((value, key) => {
            return (
              <AnchorLink key={key} to={value.link} className="mt-1 mb-1 text-sm transition duration-300 ease-in-out hover:text-blue-primary">
                {value.name}
              </AnchorLink>
            )
          })}
        </div>
        <div className="flex flex-col items-start justify-start w-1/3 m-4 lg:w-1/4">
          <h3 className="font-bold pt-2.5 pb-4">Partners</h3>
          <AnchorLink to="/partners" className="mt-1 mb-1 text-sm transition duration-300 ease-in-out hover:text-green-primary">
            Coming Soon
          </AnchorLink>
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
