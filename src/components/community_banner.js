import React from "react"

import "./banner.css"

import topLeft from "../assets/community/topLeft.png"
import bottomLeft from "../assets/community/bottomLeft.png"
import topRight from "../assets/community/topRight.png"
import bottomRight from "../assets/community/bottomRight.png"

const CommunityBanner = () => {
  return (
    <div className="m-0 p-0 pb-32 md:pb-0 community-container">
      <div className="laptop">
        <div className="top-fade"></div>
        <div className="left-animation">
          <div className="top-0 left-0 w-1/4 lg:w-6/6">
            <img src={topLeft} alt="Top Left" className="image-fade" />
          </div>
          <div className="bottom-0 left-0 w-1/4 lg:w-6/6">
            <img src={bottomLeft} alt="Bottom Left" className="image-fade" />
          </div>
        </div>

        <div className="absolute top-1/4 lg:top-1/3 left-1/3 ml-3 w-1/3 flex items-center justify-center">
          <h3 className="text-sm md:text-2xl text-bold text-center w-2/3">
            We foster a community of growth and innovation.
          </h3>
        </div>

        <div className="right-animation">
          <div className="absolute top-0 right-0 w-1/4 lg:w-6/6">
            <img src={topRight} alt="Upper Right" />
          </div>
          <div className="absolute right-0 md:bottom-24 bottom-10 w-1/4 lg:w-6/6 fixed">
            <img src={bottomRight} alt="Bottom Right" />
          </div>
        </div>
        <div className="bottom-fade"></div>
      </div>
    </div>
  )
}

export default CommunityBanner
