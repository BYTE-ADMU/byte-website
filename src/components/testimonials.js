import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

import "../styles/global.css"

import "swiper/css"
import "swiper/css/pagination"

// import message from "../../public/icons/message.png"
// import play from "../../public/icons/play.png"

import message from "../assets/img/message.png"
import play from "../assets/img/play.png"
import CommunityBg from "../assets/community/community-bg.png"

SwiperCore.use([Pagination])
SwiperCore.use([Autoplay])

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

const Testimonials = props => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper border-2 border-red-primary rounded-2xl"
    >
      <SwiperSlide key={props.id}>
        <div className="
            h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20
            justify-center content-center items-center bg-white-primary xl:bg-contain bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${CommunityBg})`
              }}>
          <div className="w-full mt-20 md:w-1/2 flex items-center justify-center mr-0 md:mr-10">
            <div className="bg-gray-light h-96 w-80 hidden md:block"></div>
          </div>
          <div className="flex flex-col items-start justify-start w-full mt-10 md:w-1/2 md:m-0">
            <div>
              <img src={message} alt="Message" className="hidden md:block" />
            </div>
            <div className="flex items-center">
              <div className="h-32 w-32 bg-gray-dark mr-10 mb-10 rounded-full md:hidden block"></div>
              <div>
                <h2>Kirsten Marini Sy</h2>
                <h3>BYTE President</h3>
                {/* <h2 className={`text-${data.node.color}-primary bold py-2`}>{data.node.name}</h2>
                <h3 className={`text-${data.node.color}-secondary medium pb-4`}>{data.node.subtitle}</h3> */}
              </div>
            </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
              {/* <p>{data.node.description}</p> */}
          </div>
          <img src={play} alt="Play" />
        </div>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default Testimonials
