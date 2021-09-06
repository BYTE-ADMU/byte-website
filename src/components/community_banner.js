import React from "react"

import topLeft from "../../public/icons/top_left.svg"
import bottomLeft from "../../public/icons/bottom_left.svg"
import upperRight from "../../public/icons/upper_right.svg"
import bottomRight from "../../public/icons/bottom_right.svg"

const CommunityBanner = () => {
  return (
    <div className="m-0 p-0 h-full pb-32 md:pb-0">
      <div className="top-0 left-0 w-1/4 lg:w-6/6">
        <img src={topLeft} alt="Top Left" />
      </div>
      <div className="bottom-0 left-0 w-1/4 lg:w-6/6">
        <img src={bottomLeft} alt="Bottom Left" />
      </div>

      <div className="absolute top-1/4 lg:top-1/3 left-1/3 ml-3 w-1/3">
        <h3 className="text-sm md:text-2xl text-bold text-center">
          We foster a community of growth and innovation.
        </h3>
      </div>

      <div className="absolute top-0 right-0 w-1/4 lg:w-6/6">
        <img src={upperRight} alt="Upper Right" />
      </div>
      <div className="absolute right-0 md:bottom-24 bottom-10 w-1/4 lg:w-6/6 fixed">
        <img src={bottomRight} alt="Bottom Right" />
      </div>
    </div>
  )
}

export default CommunityBanner
