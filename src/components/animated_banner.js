import React from "react"
import "./banner.css"

import topLeft from "../assets/community/topLeft.png"
import bottomLeft from "../assets/community/bottomLeft.png"
import topRight from "../assets/community/topRight.png"
import bottomRight from "../assets/community/bottomRight.png"

import upperCaption from "../assets/community/upperCaption.png"
import lowerCaption from "../assets/community/lowerCaption.png"

const animated_banner = () => {
  return (
    <div className="wrapper">
      <div className="top-fade"></div>
      <div className="banner-desktop">
        <div className="banner-column first left-animation">
          <div className="card">
            <img src={topLeft} alt="placeholder" className="card_img" />
          </div>

          <div className="card">
            <img src={bottomLeft} alt="placeholder" className="card_img" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center mb-40">
          <div>
            <img src={upperCaption} alt="placeholder" />
          </div>
          <div className="w-2/3">
            <h1 className="bold">We foster a community of growth and innovation</h1>
          </div>
          <div>
            <img src={lowerCaption} alt="placeholder" />
          </div>
        </div>

        <div className="banner-column first right-animation">
          <div className="card">
            <img src={topRight} alt="placeholder" />
          </div>
          <div className="card">
            <img src={bottomRight} alt="placeholder" />
          </div>
        </div>
      </div>

      <div className="bottom-fade"></div>

      <div class="block md:hidden py-10 md:py-0">
        <div className="flex items-center justify-around">
          <img src={bottomRight} alt="" className="h-40 w-60" />
          <img src={bottomRight} alt="" className="h-40 w-60" />
        </div>
        <div className="text-center">
          <h1 className="p-4 m-4">
            We foster a community of growth and innovation
          </h1>
        </div>
        <div className="flex items-center justify-around">
          <img src={bottomRight} alt="" className="h-40 w-60" />
          <img src={bottomRight} alt="" className="h-40 w-60" />
        </div>
      </div>
    </div>
  )
}

export default animated_banner
